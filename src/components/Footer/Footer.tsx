import Link from "next/link";
import { Contacts } from "./Contacts";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="p-2 pt-0 grid grid-cols-4 shadow-top shadow-black">
      <Link href="/" className="col-span-2 col-start-2">
        <Logo className="w-full h-[50px]" />
      </Link>
      <Contacts />
    </footer>
  );
};
