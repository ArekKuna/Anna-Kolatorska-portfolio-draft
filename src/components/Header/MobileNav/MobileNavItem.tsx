import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MobileNavigationMenu } from "../HeaderConfig";
import { MobileNavCategoryItem } from "./MobileNavCategoryItem";

type MobileNavItemprops = {
  links: MobileNavigationMenu;
  onClick: () => void;
};

export const MobileNavItem = ({ links, onClick }: MobileNavItemprops) => {
  const [isOpen, setIsopen] = useState(false);

  const router = useRouter();
  const activePath = router.pathname;

  const {
    menuLinkStyles,
    activeMenuLinkStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  } = getStyles(isOpen, links, activePath);

  return (
    <>
      <Link
        href={links.href}
        onClick={onClick}
        className={`${menuLinkStyles} ${activeMenuLinkStyles}`}
      >
        {links.text}
      </Link>
      {links.icon && (
        <span
          onClick={() => setIsopen((prevState) => !prevState)}
          className={`${chevronStyles} ${chevronOpenStyles}`}
        >
          {links.icon}
        </span>
      )}
      {links.categories && (
        <ul className={`${submenuStyles} ${subMenuOpenStyles}`}>
          {links.categories?.map((category) => (
            <MobileNavCategoryItem
              key={category.text}
              categories={category}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const getStyles = (
  isOpen: boolean,
  links: MobileNavigationMenu,
  path: string
) => {
  const activePath = path === links.href;

  const menuLinkStyles = "py-3 w-full flex-1";
  const activeMenuLinkStyles = activePath ? "text-sky-400 duration-1000" : "";
  const chevronStyles = "w-[20%] flex justify-center items-center";
  const chevronOpenStyles = isOpen
    ? "rotate-180 duration-200"
    : "rotate-0 duration-200";
  const submenuStyles =
    "w-full flex flex-col justify-center items-start overflow-hidden";
  const subMenuOpenStyles = isOpen
    ? "max-h-72 opacity-1 duration-500"
    : "max-h-0 opacity-0 duration-500";

  return {
    menuLinkStyles,
    activeMenuLinkStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  };
};
