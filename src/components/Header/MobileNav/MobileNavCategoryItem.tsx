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
    <li className="pl-4 py-4 w-full border-b-[1px] border-b-white/30">
      <Link href={category.href} onClick={onClick}>
        {category.text}
      </Link>
    </li>
  );
};
