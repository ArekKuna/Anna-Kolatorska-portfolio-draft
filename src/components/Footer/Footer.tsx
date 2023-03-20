import { Logo } from "../Logo/Logo";
import { FooterNav } from "./FooterNav/FooterNav";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-2 flex flex-col justify-center items-center gap-2 shadow-top shadow-black">
      <FooterNav />
      <Link href="/" className="flex justify-center items-center">
        <Logo className="w-1/2" />
      </Link>
    </footer>
  );
};
