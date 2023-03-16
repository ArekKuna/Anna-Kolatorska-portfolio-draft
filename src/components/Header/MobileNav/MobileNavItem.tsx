import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MobileNavigationMenu } from "../HeaderConfig";
import { MobileNavCategoryItem } from "./MobileNavCategoryItem";

type MobileNavItemprops = {
  link: MobileNavigationMenu;
  activeMenuLink: boolean;
  onClick: () => void;
};

export const MobileNavItem = ({
  link,
  activeMenuLink,
  onClick,
}: MobileNavItemprops) => {
  const [isOpen, setIsopen] = useState(false);

  const router = useRouter();
  const activeSubmenuPath = router.asPath;

  const {
    menuLinkStyles,
    activeMenuLinkStyles,
    chevronStyles,
    chevronOpenStyles,
    submenuStyles,
    subMenuOpenStyles,
  } = getStyles(isOpen, activeMenuLink);

  return (
    <>
      <Link
        href={link.href}
        onClick={onClick}
        className={`${menuLinkStyles} ${activeMenuLinkStyles}`}
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
          {link.categories?.map((category) => {
            const activeSubmenuLink = activeSubmenuPath === category.href;

            return (
              <MobileNavCategoryItem
                key={category.text}
                category={category}
                activeSubmenuLink={activeSubmenuLink}
                onClick={onClick}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

const getStyles = (isOpen: boolean, activeMenuLink: boolean) => {
  const menuLinkStyles = "py-4 flex-1";
  const activeMenuLinkStyles = activeMenuLink
    ? "text-red-500 duration-1000"
    : "";
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
