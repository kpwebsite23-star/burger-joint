export interface WeeklyHour {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
  isOpenDay: boolean;
  openTime: string;
  closeTime: string;
  openHour24: number;
  closeHour24: number;
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
  name: "Miller's Five Drive-In & Carry-Out",
  shortName: "Miller's Five",
  tagline: "Classic Flat-Top Burgers, Crinkle-Cut Fries & Hand-Spun Malts.",
  subhead: "Serving Augusta with authentic 1950s drive-in flavor and friendly carry-out since 1956.",
  badge: "Est. 1956 • Augusta, KS",
  foundedYear: "1956",
  familySinceYear: "1964",
  phoneDisplay: "(316) 775-9989",
  phoneTel: "tel:3167759989",
  address: "330 State St, Augusta, KS 67010",
  mapsUrl: "https://www.google.com/maps/place/Miller's+Five+Drive-In+%26+Carry-Out,+330+State+St,+Augusta,+KS+67010/@37.674734,-96.978721,17z/data=!4m6!3m5!1s0x87ba516f22d766c9:0xff1a207779e0bd5c!8m2!3d37.674734!4d-96.978721!16s%2Fg%2F1th28xzl?hl=en-us&source=lnms&g_ep=Eg1tbF8yMDI2MDkxM18wIOC7DCoASAJQAg%3D%3D",
  googleReviewsUrl: "https://www.google.com/maps/place/Miller's+Five+Drive-In+%26+Carry-Out,+330+State+St,+Augusta,+KS+67010/@37.674734,-96.978721,17z/data=!4m6!3m5!1s0x87ba516f22d766c9:0xff1a207779e0bd5c!8m2!3d37.674734!4d-96.978721!16s%2Fg%2F1th28xzl?hl=en-us&source=lnms&g_ep=Eg1tbF8yMDI2MDkxM18wIOC7DCoASAJQAg%3D%3D",
  orderingInstructions: "Call ahead for window carryout or walk right up for friendly counter service and picnic bench dining.",
  weeklyHours: [
    { day: "Sunday", dayIndex: 0, isOpenDay: false, openTime: "Closed", closeTime: "Closed", openHour24: 0, closeHour24: 0 },
    { day: "Monday", dayIndex: 1, isOpenDay: false, openTime: "Closed", closeTime: "Closed", openHour24: 0, closeHour24: 0 },
    { day: "Tuesday", dayIndex: 2, isOpenDay: true, openTime: "11:30 AM", closeTime: "7:30 PM", openHour24: 11.5, closeHour24: 19.5 },
    { day: "Wednesday", dayIndex: 3, isOpenDay: true, openTime: "11:30 AM", closeTime: "7:30 PM", openHour24: 11.5, closeHour24: 19.5 },
    { day: "Thursday", dayIndex: 4, isOpenDay: true, openTime: "11:30 AM", closeTime: "7:30 PM", openHour24: 11.5, closeHour24: 19.5 },
    { day: "Friday", dayIndex: 5, isOpenDay: true, openTime: "11:30 AM", closeTime: "7:30 PM", openHour24: 11.5, closeHour24: 19.5 },
    { day: "Saturday", dayIndex: 6, isOpenDay: true, openTime: "11:30 AM", closeTime: "7:30 PM", openHour24: 11.5, closeHour24: 19.5 },
  ] as WeeklyHour[],
  trustBadges: [
    { label: "100% Fresh Beef", detail: "Never frozen, flat-top smashed to order" },
    { label: "Hand-Spun Real Ice Cream", detail: "Creamy whole dairy shakes & malts" },
    { label: "Carryout & Picnic Dining", detail: "Quick pickup window & State St benches" },
  ],
  communityStory: {
    title: "Over 6 Decades of Augusta Drive-In Tradition",
    p1: "Located right on State Street in Augusta, Kansas, Miller's Five Drive-In & Carry-Out has been a local cornerstone since 1956 and owned and operated by the Miller family since 1964. Generations of families, locals, and Mobil refinery workers have gathered here for classic flat-top smash burgers with lace-crisp edges, golden crinkle fries, and frosty fountain treats.",
    p2: "Everything is cooked fresh when you order it. Whether you're calling ahead for quick carryout on your way home or enjoying lunch under the Kansas sun, you'll always find friendly hometown service and authentic 1950s roadside diner flavor.",
    stats: [
      { value: "60+", label: "Years in Augusta" },
      { value: "1956", label: "Founded on State St" },
      { value: "100%", label: "Fresh Angus Chuck" },
      { value: "Top Pick", label: "Butler County Classic" },
    ],
  },
  testimonials: [
    {
      id: "1",
      author: "Local Butler County Regular",
      location: "Augusta, KS",
      rating: 5,
      quote: "The Double Smash Cheeseburger with grilled onions and a Cherry Limeade is the absolute gold standard in Augusta. They've kept the quality unchanged for decades.",
      favoriteItem: "Double Cheeseburger & Cherry Limeade",
      date: "Verified Local Review",
    },
    {
      id: "2",
      author: "Wichita Daytripper",
      location: "Wichita, KS",
      rating: 5,
      quote: "We drive over from Wichita regularly just for the crinkle fries and hand-spun malts. You simply cannot beat an authentic Kansas fifties-style drive-in.",
      favoriteItem: "Chocolate Malt & Crinkle Fries",
      date: "Verified Customer Review",
    },
    {
      id: "3",
      author: "Lifelong Augusta Resident",
      location: "Augusta, KS",
      rating: 5,
      quote: "Grew up coming here with my grandparents after Little League games and now I bring my own kids. Friendly staff and the best burgers in town.",
      favoriteItem: "Bacon BBQ Burger & Tenders",
      date: "Community Review",
    },
  ] as Testimonial[],
};

export function getDinerStatus() {
  const now = new Date();
  const dayIndex = now.getDay();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const todaySchedule = DINER_INFO.weeklyHours.find((h) => h.dayIndex === dayIndex) || DINER_INFO.weeklyHours[2];

  let isOpen = false;
  let statusText = "";

  if (!todaySchedule.isOpenDay) {
    // Find next open day
    const nextOpen = DINER_INFO.weeklyHours.find((h) => h.isOpenDay) || DINER_INFO.weeklyHours[2];
    isOpen = false;
    statusText = `Closed Today • Opens Tuesday at ${nextOpen.openTime}`;
  } else if (currentHour >= todaySchedule.openHour24 && currentHour < todaySchedule.closeHour24) {
    isOpen = true;
    statusText = `Open Today until ${todaySchedule.closeTime}`;
  } else if (currentHour < todaySchedule.openHour24) {
    isOpen = false;
    statusText = `Opens Today at ${todaySchedule.openTime}`;
  } else {
    // Closed for the day
    const tomorrowIndex = (dayIndex + 1) % 7;
    const tomorrowSchedule = DINER_INFO.weeklyHours.find((h) => h.dayIndex === tomorrowIndex);
    if (tomorrowSchedule && tomorrowSchedule.isOpenDay) {
      statusText = `Closed for the day • Opens tomorrow at ${tomorrowSchedule.openTime}`;
    } else {
      statusText = `Closed • Opens Tuesday at 11:30 AM`;
    }
  }

  return {
    isOpen,
    statusText,
    todayCloseTime: todaySchedule.closeTime,
    todaySchedule,
    currentDayIndex: dayIndex,
  };
}
