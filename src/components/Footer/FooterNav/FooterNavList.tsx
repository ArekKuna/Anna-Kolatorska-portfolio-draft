import { FooterNavItem } from "./FooterNavItem";
import { footerMenuMap } from "../FooterConfig";

export const FooterNavList = () => {
  return (
    <ul className="flex space-x-3">
      {footerMenuMap.map((link) => (
        <FooterNavItem key={link.id} links={link} />
      ))}
    </ul>
  );
};
