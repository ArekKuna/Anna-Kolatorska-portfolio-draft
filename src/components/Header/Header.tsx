import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Logo } from "../Logo/Logo";
import { MobileNav } from "./MobileNav/MobileNav";
import { hideHeaderVariants } from "./HeaderConfig";

export const Header = () => {
  const [hideHeader, sethideHeader] = useState(false);

  const { scrollY } = useScroll();

  const updateSetHeaderState = () => {
    const current = scrollY.get();
    const prev = scrollY.getPrevious();

    if (current < prev) {
      sethideHeader(false);
    }

    if (current > 100 && current > prev) {
      sethideHeader(true);
    }
  };

  useEffect(() => {
    return scrollY.on("change", () => updateSetHeaderState());
  });

  return (
    <motion.header
      variants={hideHeaderVariants}
      animate={hideHeader ? "hidden" : "visible"}
      className="fixed min-h-[137px] pb-2 w-full flex flex-col justify-center items-center shadow-bottom shadow-black bg-white"
    >
      <Link href="./" className="flex justify-center">
        <Logo className="w-full" />
      </Link>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
