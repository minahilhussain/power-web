import {
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
  product2,
  product3,
  product4,
  product5,
} from "@/assets";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Product", href: "#product" },
];

const TRUSTED_COPMANY_LOGOS: React.ComponentType[] = [
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
];

const DIGITAL_PRODUCTS = [
  { src: product2, title: "Redesign channel website landing page" },
  { src: product3, title: "New Locator App For a New Company" },
  { src: product4, title: "Rental Rooms Web App Platform" },
  { src: product5, title: "Calendar App for Big SASS Company" },
];

export { NAV_ITEMS, TRUSTED_COPMANY_LOGOS, DIGITAL_PRODUCTS };
