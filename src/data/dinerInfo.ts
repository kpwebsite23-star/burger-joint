export interface WeeklyHour {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, etc.
  openTime: string;
  closeTime: string;
  openHour24: number;
  closeHour24: number;
  isToday?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  favoriteItem: string;
  date: string;
}

export const DINER_INFO = {
  name: "Miller's Five Drive-In",
  shortName: "Miller's Five",
  tagline: "Classic Smashed Burgers, Golden Crinkle-Cut Fries & Hand-Spun Shakes.",
  subhead: "Made fresh to order, served car-hop style or ready for quick pickup.",
  badge: "Est. Local Favorite",
  foundedYear: "1958",
  phoneDisplay: "(555) 348-3483",
  phoneTel: "tel:5553483483",
  address: "505 Route 66 Parkway, Lincoln, IL 62656",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Miller's+Five+Drive-In+505+Route+66+Parkway+Lincoln+IL",
  totalStalls: 16,
  carHopInstructions: "Pull into an open stall, turn on headlights for service, or call ahead for window pickup.",
  weeklyHours: [
    { day: "Monday", dayIndex: 1, openTime: "11:00 AM", closeTime: "9:00 PM", openHour24: 11, closeHour24: 21 },
    { day: "Tuesday", dayIndex: 2, openTime: "11:00 AM", closeTime: "9:00 PM", openHour24: 11, closeHour24: 21 },
    { day: "Wednesday", dayIndex: 3, openTime: "11:00 AM", closeTime: "9:00 PM", openHour24: 11, closeHour24: 21 },
    { day: "Thursday", dayIndex: 4, openTime: "11:00 AM", closeTime: "9:00 PM", openHour24: 11, closeHour24: 21 },
    { day: "Friday", dayIndex: 5, openTime: "11:00 AM", closeTime: "10:00 PM", openHour24: 11, closeHour24: 22 },
    { day: "Saturday", dayIndex: 6, openTime: "11:00 AM", closeTime: "10:00 PM", openHour24: 11, closeHour24: 22 },
    { day: "Sunday", dayIndex: 0, openTime: "12:00 PM", closeTime: "8:30 PM", openHour24: 12, closeHour24: 20.5 },
  ] as WeeklyHour[],
  trustBadges: [
    { label: "100% Fresh Beef", detail: "Never frozen, smash-seared daily" },
    { label: "Hand-Spun Real Ice Cream", detail: "Whole milk & real premium dairy" },
    { label: "Drive-In & Dine-Out", detail: "16 classic stalls with car-hop trays" },
  ],
  communityStory: {
    title: "Over 6 Decades of Car-Hop Tradition & Smashed Perfection",
    p1: "At Miller's Five Drive-In, we believe true roadside American dining is an art form. Founded on Route 66 by the Miller family, our recipe hasn't changed because perfection doesn't need altering: 100% fresh Midwest beef smashed thin on a screaming-hot flat-top grill to achieve those lace-crisp edges, served on butter-toasted potato buns.",
    p2: "Whether you pull into one of our 16 vintage car-hop stalls and flick on your headlights for tray-to-door service, or call ahead for window pickup on your drive home, you're getting hospitality that feels like family and food made with real pride.",
    stats: [
      { value: "65+", label: "Years Serving Families" },
      { value: "100%", label: "Fresh Angus Beef" },
      { value: "16", label: "Covered Car-Hop Stalls" },
      { value: "4.9 ★", label: "Local Rating (2,400+ Reviews)" },
    ],
  },
  testimonials: [
    {
      id: "1",
      author: "Marcus Vance",
      location: "Lincoln Local",
      rating: 5,
      quote: "The Double Smash Cheeseburger is hands down the best burger in the state. Those crispy smashed edges and the house secret sauce will ruin all other burgers for you. And having it brought out right to the car window? Legendary.",
      favoriteItem: "Double Smash Cheeseburger & Crinkle Fries",
      date: "Verified Customer • 3 days ago",
    },
    {
      id: "2",
      author: "Sarah Jenkins",
      location: "Springfield, IL",
      rating: 5,
      quote: "We drive 35 minutes just for the peanut butter malt shake and bacon BBQ burger. The staff is always smiling, orders are lightning fast, and the car-hop experience brings back the best childhood memories.",
      favoriteItem: "Peanut Butter Malt & Bacon BBQ Burger",
      date: "Verified Customer • 1 week ago",
    },
    {
      id: "3",
      author: "Dave & Elena Kowalski",
      location: "Route 66 Traveler",
      rating: 5,
      quote: "Stopped on a cross-country road trip and Miller's Five was the highlight of our entire Route 66 drive. Golden crinkle-cut cheese fries piping hot, crispy tenders, and honest-to-goodness real malt ice cream.",
      favoriteItem: "Crispy Tender Basket & Cheese Fries",
      date: "Verified Customer • 2 weeks ago",
    },
  ] as Testimonial[],
};

export function getDinerStatus() {
  const now = new Date();
  const dayIndex = now.getDay();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const todaySchedule = DINER_INFO.weeklyHours.find((h) => h.dayIndex === dayIndex) || DINER_INFO.weeklyHours[0];

  const isOpen = currentHour >= todaySchedule.openHour24 && currentHour < todaySchedule.closeHour24;

  let statusText = "";
  if (isOpen) {
    statusText = `Open Today until ${todaySchedule.closeTime}`;
  } else if (currentHour < todaySchedule.openHour24) {
    statusText = `Opens Today at ${todaySchedule.openTime}`;
  } else {
    const tomorrowIndex = (dayIndex + 1) % 7;
    const tomorrowSchedule = DINER_INFO.weeklyHours.find((h) => h.dayIndex === tomorrowIndex) || DINER_INFO.weeklyHours[0];
    statusText = `Closed • Opens ${tomorrowSchedule.day} at ${tomorrowSchedule.openTime}`;
  }

  return {
    isOpen,
    statusText,
    todayCloseTime: todaySchedule.closeTime,
    todaySchedule,
    currentDayIndex: dayIndex,
  };
}
