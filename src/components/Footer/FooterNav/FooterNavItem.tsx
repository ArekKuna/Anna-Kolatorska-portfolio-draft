import Link from "next/link";
import { FooterNavigationMenu } from "../FooterConfig";

type FooterNavItemProps = {
  links: FooterNavigationMenu;
};

export const FooterNavItem = ({ links }: FooterNavItemProps) => {
  return (
    <li className="py-2 font-light uppercase">
      <Link href={links.href}>{links.text}</Link>
    </li>
  );
};
