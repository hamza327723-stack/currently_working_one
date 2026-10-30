export type Category = "Textbooks" | "Electronics" | "Furniture" | "Services";

export interface Listing {
  id: number;
  title: string;
  price: number;
  category: Category;
  seller: string;
  campus: string;
  condition: "New" | "Like new" | "Good" | "Fair";
  postedDaysAgo: number;
}

export const categories: Category[] = ["Textbooks", "Electronics", "Furniture", "Services"];

export const listings: Listing[] = [
  { id: 1, title: "Calculus: Early Transcendentals, 8th ed.", price: 35, category: "Textbooks", seller: "Ayesha K.", campus: "North Campus", condition: "Good", postedDaysAgo: 1 },
  { id: 2, title: "TI-84 Plus graphing calculator", price: 60, category: "Electronics", seller: "Bilal R.", campus: "Engineering", condition: "Like new", postedDaysAgo: 2 },
  { id: 3, title: "IKEA desk lamp + study chair", price: 25, category: "Furniture", seller: "Sara M.", campus: "Dorm B", condition: "Good", postedDaysAgo: 3 },
  { id: 4, title: "Python & data structures tutoring", price: 15, category: "Services", seller: "Omar F.", campus: "CS Building", condition: "New", postedDaysAgo: 0 },
  { id: 5, title: "Organic Chemistry lab coat & goggles", price: 18, category: "Textbooks", seller: "Zainab H.", campus: "Science Hall", condition: "Like new", postedDaysAgo: 4 },
  { id: 6, title: "Mini fridge, 3.2 cu ft", price: 70, category: "Furniture", seller: "Hamza A.", campus: "Dorm A", condition: "Good", postedDaysAgo: 5 },
  { id: 7, title: "Noise-cancelling headphones", price: 85, category: "Electronics", seller: "Fatima S.", campus: "Library", condition: "Like new", postedDaysAgo: 2 },
  { id: 8, title: "Essay proofreading (per page)", price: 5, category: "Services", seller: "Daniyal T.", campus: "Arts Block", condition: "New", postedDaysAgo: 6 },
];

export const myListings = [
  { id: 6, views: 142, messages: 6, status: "Active" as const },
  { id: 3, views: 88, messages: 2, status: "Sold" as const },
  { id: 1, views: 51, messages: 3, status: "Active" as const },
];
