import { useState } from "react";
import Link from "next/link";
import { MobileNavigationMenu } from "../HeaderConfig";
import { MobileNavCategoryItem } from "./MobileNavCategoryItem";

type MobileNavItemprops = {
  link: MobileNavigationMenu;
  onClick: () => void;
};

export const MobileNavItem = ({ link, onClick }: MobileNavItemprops) => {
  const [isOpen, setIsopen] = useState(false);

  const {
    menuStyles,
    menuOpenStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  } = getStyles(isOpen);

  return (
    <li className={`${menuStyles} ${menuOpenStyles}`}>
      <Link href={link.href} onClick={onClick} className="py-4 flex-1">
        {link.text}
      </Link>
      <span
        onClick={() => setIsopen((prevState) => !prevState)}
        className={`${chevronStyles} ${chevronOpenStyles}`}
      >
        {link.icon}
      </span>
      {link.categories && (
        <ul className={`${submenuStyles} ${subMenuOpenStyles}`}>
          {link.categories?.map((category) => (
            <MobileNavCategoryItem
              key={category.text}
              category={category}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const getStyles = (isOpen: boolean) => {
  const menuStyles =
    "w-full flex flex-wrap justify-between items-center border-b-[1px] border-b-white/30";
  const menuOpenStyles = isOpen ? "!border-b-0" : "";
  const chevronStyles = "flex justify-center items-center";
  const chevronOpenStyles = isOpen
    ? "rotate-180 duration-200"
    : "rotate-0 duration-200";
  const submenuStyles =
    "w-full flex flex-col justify-center items-start overflow-hidden";
  const subMenuOpenStyles = isOpen
    ? "max-h-72 opacity-1 duration-500"
    : "max-h-0 opacity-0 duration-500";

  return {
    menuStyles,
    menuOpenStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  };
};
