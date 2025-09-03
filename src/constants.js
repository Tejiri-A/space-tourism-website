import { nanoid } from "nanoid";
export const navLinks = [
  { id: nanoid(), label: "home", number: "00", route: "/" },
  { id: nanoid(), label: "destination", number: "01", route: "/destination" },
  { id: nanoid(), label: "crew", number: "02", route: "/crew" },
  { id: nanoid(), label: "technology", number: "03", route: "/technology" },
];

// Framer motion animations
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0.8 },
};
export const contentTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  exit: { opacity: 0, y: -20 },
};
export const tabContentTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -10 },
};
