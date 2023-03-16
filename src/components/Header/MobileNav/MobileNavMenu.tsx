import { useRouter } from "next/router";
import { MobileNavItem } from "./MobileNavItem";
import { MobileMenuMap } from "../HeaderConfig";

type MobileNavMenuProps = {
  onClick: () => void;
};

export const MobileNavMenu = ({ onClick }: MobileNavMenuProps) => {
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <nav className="flex justify-center items-center font-light uppercase">
      <ul className="h-full flex flex-col justify-center items-start">
        {MobileMenuMap.map((link) => {
          const activeMenuLink =
            activePath === link.href ? "text-red-500 duration-1000" : "";

          return (
            <li
              key={link.id}
              className="w-full flex flex-wrap justify-between items-center border-b-[1px] border-b-white/30"
            >
              <MobileNavItem
                activeMenuLink={activeMenuLink}
                link={link}
                onClick={onClick}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
