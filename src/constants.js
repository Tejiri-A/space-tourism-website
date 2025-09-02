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
