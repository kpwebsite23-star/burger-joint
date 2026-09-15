"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/menu";

export interface TrayItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  customizations?: string[];
  totalPrice: number;
}

interface TrayContextType {
  items: TrayItem[];
  addItem: (item: MenuItem, customizations?: string[]) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearTray: () => void;
  totalItemsCount: number;
  subtotal: number;
  isTrayOpen: boolean;
  setIsTrayOpen: (open: boolean) => void;
  selectedStall: string;
  setSelectedStall: (stall: string) => void;
}

const TrayContext = createContext<TrayContextType | undefined>(undefined);

export function TrayProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<TrayItem[]>([]);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [selectedStall, setSelectedStall] = useState("Car-Hop Stall #7");

  // Load saved tray from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("millers_five_tray");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save tray to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("millers_five_tray", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const addItem = (menuItem: MenuItem, customizations: string[] = []) => {
    let extra = 0;
    if (customizations.includes("extra-patty")) extra += 2.5;
    if (customizations.includes("bacon")) extra += 1.5;
    if (customizations.includes("cheese-sauce")) extra += 0.95;
    if (customizations.includes("malt-upgrade")) extra += 1.25;

    const singlePrice = menuItem.rawPrice + extra;

    setItems((prev) => {
      // Look for identical item with identical customizations
      const existingIndex = prev.findIndex(
        (i) =>
          i.menuItem.id === menuItem.id &&
          JSON.stringify(i.customizations?.sort()) === JSON.stringify(customizations.sort())
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        updated[existingIndex].totalPrice = updated[existingIndex].quantity * singlePrice;
        return updated;
      }

      const newItem: TrayItem = {
        id: `${menuItem.id}-${Date.now()}`,
        menuItem,
        quantity: 1,
        customizations,
        totalPrice: singlePrice,
      };
      return [...prev, newItem];
    });

    setIsTrayOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const singlePrice = item.totalPrice / item.quantity;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * singlePrice,
            };
          }
          return item;
        })
        .filter(Boolean) as TrayItem[];
    });
  };

  const clearTray = () => setItems([]);

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <TrayContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearTray,
        totalItemsCount,
        subtotal,
        isTrayOpen,
        setIsTrayOpen,
        selectedStall,
        setSelectedStall,
      }}
    >
      {children}
    </TrayContext.Provider>
  );
}

export function useTray() {
  const context = useContext(TrayContext);
  if (!context) {
    throw new Error("useTray must be used within a TrayProvider");
  }
  return context;
}
