import { Logo } from "../Logo/Logo";
import { FooterNav } from "./FooterNav/FooterNav";
import { Socials } from "../Socials/Socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-3 flex flex-col justify-center items-center gap-2 shadow-top shadow-black">
      <Link href="/" className="flex justify-center items-center">
        <Logo className="w-1/2" />
      </Link>
      <FooterNav />
      <Socials />
    </footer>
  );
};
