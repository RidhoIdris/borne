import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const clsxm = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-À-ÖØ-öø-ÿ]+/g, "");
};

export { slugify, clsxm };
