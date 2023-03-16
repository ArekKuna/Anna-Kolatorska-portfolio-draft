import { useState } from "react";
import Link from "next/link";
import { MobileNavigationMenu } from "../HeaderConfig";
import { MobileNavCategoryItem } from "./MobileNavCategoryItem";

type MobileNavItemprops = {
  link: MobileNavigationMenu;
  activeMenuLink: string;
  onClick: () => void;
};

export const MobileNavItem = ({
  link,
  activeMenuLink,
  onClick,
}: MobileNavItemprops) => {
  const [isOpen, setIsopen] = useState(false);

  const { chevronStyles, chevronOpenStyles, submenuStyles, subMenuOpenStyles } =
    getStyles(isOpen);

  return (
    <>
      <Link
        href={link.href}
        onClick={onClick}
        className={`${activeMenuLink} py-4 flex-1`}
      >
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
    </>
  );
};

const getStyles = (isOpen: boolean) => {
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
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  };
};
