import { useRouter } from "next/router";
import Link from "next/link";
import { MobileNavigationMenuCategory } from "../HeaderConfig";

type MobileNavCategoryItemProps = {
  categories: MobileNavigationMenuCategory;
  onClick: () => void;
};

export const MobileNavCategoryItem = ({
  categories,
  onClick,
}: MobileNavCategoryItemProps) => {
  const router = useRouter();
  const activePath = router.asPath;

  const { activeSubmenuStyles, submenuStyles } = getStyles(
    categories,
    activePath
  );

  return (
    <li className="w-full flex border-b-[1px] border-b-white/30 last-of-type:border-b-0">
      <Link
        href={categories.href}
        onClick={onClick}
        className={`${activeSubmenuStyles} ${submenuStyles}`}
      >
        {categories.text}
      </Link>
    </li>
  );
};

const getStyles = (categories: MobileNavigationMenuCategory, path: string) => {
  const activePath = path === categories.href;

  const submenuStyles = "pl-4 py-3 flex-1";
  const activeSubmenuStyles = activePath ? "text-indigo-500 duration-1000" : "";

  return {
    submenuStyles,
    activeSubmenuStyles,
  };
};
