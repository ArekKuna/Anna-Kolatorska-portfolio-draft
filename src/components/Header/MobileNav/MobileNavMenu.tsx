import { MobileNavItem } from "./MobileNavItem";
import { MobileMenuMap } from "../HeaderConfig";

type MobileNavMenuProps = {
  onClick: () => void;
};

export const MobileNavMenu = ({ onClick }: MobileNavMenuProps) => {
  return (
    <nav className="flex justify-center items-center font-light uppercase">
      <ul className="h-full flex flex-col justify-center items-start">
        {MobileMenuMap.map((link) => (
          <>
            <MobileNavItem key={link.id} link={link} onClick={onClick} />
          </>
        ))}
      </ul>
    </nav>
  );
};
