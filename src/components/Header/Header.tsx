import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { MobileNav } from "./MobileNav/MobileNav";

export const Header = () => {
  return (
    <header className="fixed w-full min-h-[110px] p-2 flex flex-col justify-center items-center shadow-md shadow-black bg-white">
      <Link href="./" className="flex justify-center">
        <Logo className="w-1/2" />
      </Link>
      <MobileNav />
    </header>
  );
};

export default Header;
