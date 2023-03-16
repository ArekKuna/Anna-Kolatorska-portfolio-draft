import Link from "next/link";
import { MobileNavigationMenuCategory } from "../HeaderConfig";

type MobileNavCategoryItemProps = {
  category: MobileNavigationMenuCategory;
  activeSubmenuLink: boolean;
  onClick: () => void;
};

export const MobileNavCategoryItem = ({
  category,
  activeSubmenuLink,
  onClick,
}: MobileNavCategoryItemProps) => {
  const { activeSubmenuStyles, submenuStyles } = getStyles(activeSubmenuLink);

  return (
    <li className="w-full flex border-b-[1px] border-b-white/30 last-of-type:border-b-0">
      <Link
        href={category.href}
        onClick={onClick}
        className={`${activeSubmenuStyles} ${submenuStyles}`}
      >
        {category.text}
      </Link>
    </li>
  );
};

const getStyles = (activeSubmenuLink: boolean) => {
  const submenuStyles = "pl-4 py-4 flex-1";
  const activeSubmenuStyles = activeSubmenuLink
    ? "text-red-500 duration-1000"
    : "";

  return {
    submenuStyles,
    activeSubmenuStyles,
  };
};
