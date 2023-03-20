export type FooterNavigationMenu = {
  id: number;
  text: string;
  href: string;
};

export const footerMenuMap: FooterNavigationMenu[] = [
  {
    id: 1,
    text: "home",
    href: "/",
  },
  {
    id: 2,
    text: "oferta",
    href: "/oferta",
  },
  {
    id: 3,
    text: "o mnie",
    href: "/omnie",
  },
  {
    id: 4,
    text: "kontakt",
    href: "/kontakt",
  },
];
