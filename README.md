# Miller's Five Drive-In 🍔🥤

> A production-ready, mobile-first website for **Miller's Five Drive-In**, a modernized classic American drive-in diner serving smash burgers, crinkle-cut fries, and hand-spun malts since 1958.

Designed & Built by **KP Websites**.

---

## 🌟 Brand & Visual Identity

- **Aesthetic**: Modernized classic American drive-in diner. High-contrast, clean, and appetizing.
- **Palette**:
  - **Primary Background**: Crisp warm white (`#FAFAF9`)
  - **Containers & Footer**: Dark charcoal (`#1C1917` / `#292524`)
  - **Accent Colors**: Bold vintage cherry red (`#DC2626`) & warm golden mustard (`#F59E0B`)
- **Typography**: Clean, high-readability sans-serif (Geist) paired with stylized vintage headings and retro order badges.

---

## 🚀 Key Features

1. **Dynamic Top Announcement Bar**:
   - Live status badge indicating current opening hours (e.g. *"Open Today until 9:00 PM"* with pulsing status indicator).
   - Direct click-to-call link for Car-Hop & Call-Ahead Orders.
   - Sticky behavior on mobile with full-width tap-to-call action.

2. **Header & Sticky Navigation**:
   - Brand Wordmark: "Miller's Five Drive-In" with retro badge: *"Est. Local Favorite"*.
   - Navigation links: Menu, About Us, Hours & Location, VIP Club.
   - Quick Actions: Google Maps turn-by-turn directions & primary "Call In Order" button (`tel:`).
   - Accessible mobile drawer with 48px+ touch targets.

3. **High-Conversion Hero Section**:
   - Headline: *"Classic Smashed Burgers, Golden Crinkle-Cut Fries & Hand-Spun Shakes."*
   - Subhead: *"Made fresh to order, served car-hop style or ready for quick pickup."*
   - Action buttons: Call to Order, Explore Digital Menu, and Directions.
   - 3 Trust/Value Badges: *"100% Fresh Beef"*, *"Hand-Spun Real Ice Cream"*, *"Drive-In & Dine-Out"*.
   - Interactive vintage Order Ticket #058 showcase card.

4. **Tabbed Digital Menu (`#menu`)**:
   - Interactive category switcher with smooth transitions:
     - 🌟 **Combos & Specials**
     - 🍔 **Burgers & Sandwiches**
     - 🍟 **Sides & Baskets**
     - 🥤 **Shakes & Classic Drinks**
   - Live search bar to quickly filter items.
   - Detailed menu item cards (1-col mobile, 2-col desktop) featuring prices, calorie tags, specialty badges (*"Best Seller"*, *"Customer Favorite"*, *"Car-Hop Classic"*), ingredient highlights, and one-tap order actions.

5. **Location, Car-Hop Stalls & Hours Section (`#location`)**:
   - Weekly operating schedule (Mon–Sun) with dynamic highlighting of the current day.
   - Car-Hop Ordering Instructions: *"Pull into an open stall, turn on headlights for service, or call ahead for window pickup."*
   - Stylized interactive Route 66 map frame mockup with stall count (16 covered stalls) and direct Google Maps launch button.

6. **Social Proof & Community Story (`#about`)**:
   - Dedicated heritage story highlighting Midwestern Angus beef, family recipes, and car-hop service tradition.
   - 3 authentic verified customer testimonial cards with 5-star ratings and favorite item callouts.

7. **VIP Club Lead Capture (`#vip`)**:
   - Warm mustard-bordered container with secret menu and birthday treat incentives.
   - Client-side validated email/phone form with instant celebration state and welcome reward code (`FREE-SHAKE-VIP`).

8. **Footer & Mobile Persistent Order Bar**:
   - Charcoal footer with operational hours snapshot and business details.
   - Agency attribution: *"Website Designed & Built by KP Websites"*.
   - Floating sticky bottom bar on mobile screens ensuring rapid tap-to-call and menu jump from any scroll depth.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Deployment Target**: Vercel, Netlify, or any Node.js/Docker host

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js v24)
- npm or pnpm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/kpwebsite23-star/burger-joint.git
cd burger-joint

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

### Production Build
```bash
npm run build
npm run start
```
