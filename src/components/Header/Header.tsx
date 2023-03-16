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
      className="fixed w-full min-h-[110px] p-2 flex flex-col justify-center items-center shadow-sm shadow-black bg-white"
    >
      <Link href="./" className="flex justify-center">
        <Logo className="w-1/2" />
      </Link>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
