import { ChevronIcon } from "./MobileNav/ChevronDownIcon";

export type MobileNavigationMenuCategory = {
  text: string;
  href: string;
};

export type MobileNavigationMenu = {
  id: number;
  text: string;
  href: string;
  categories?: MobileNavigationMenuCategory[];
  icon?: JSX.Element;
};

export const MobileMenuMap: MobileNavigationMenu[] = [
  {
    id: 1,
    text: "home",
    href: "./",
  },
  {
    id: 2,
    text: "oferta",
    href: "./offer",
    categories: [
      {
        text: "sesje biznesowe",
        href: "./offer#",
      },
      {
        text: "sesje portretowe",
        href: "./offer#",
      },
      {
        text: "sesje rodzinne",
        href: "./offer#",
      },
      {
        text: "sesje reportażowe",
        href: "./offer#",
      },
      {
        text: "sesje kobiece",
        href: "./offer#",
      },
    ],
    icon: <ChevronIcon />,
  },
  {
    id: 3,
    text: "o mnie",
    href: "./about",
  },
  {
    id: 4,
    text: "kontakt",
    href: "./contact",
  },
];
