import Link from "next/link";
import { MobileNavigationMenuCategory } from "../HeaderConfig";

type MobileNavCategoryItemProps = {
  category: MobileNavigationMenuCategory;
  onClick: () => void;
};

export const MobileNavCategoryItem = ({
  category,
  onClick,
}: MobileNavCategoryItemProps) => {
  return (
    <li className="w-full flex border-b-[1px] border-b-white/30">
      <Link href={category.href} onClick={onClick} className="pl-4 py-4 flex-1">
        {category.text}
      </Link>
    </li>
  );
};
