import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//nav links

export const navlinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "ventures",
    path: "/ventures",
  },
  {
    name: "heritage/titles",
    path: "/heritage",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
