import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Logo } from "../Logo/Logo";
import { MobileNav } from "./MobileNav/MobileNav";

export const Header = () => {
  const [hideHeader, sethideHeader] = useState(false);

  const { scrollY } = useScroll();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  const update = () => {
    if (scrollY.get() < scrollY?.getPrevious()) {
      sethideHeader(false);
    } else if (
      scrollY?.get() > 100 &&
      scrollY?.get() > scrollY?.getPrevious()
    ) {
      sethideHeader(true);
    }
  };

  useEffect(() => {
    return scrollY.on("change", () => update());
  });
  console.log(hideHeader);
  return (
    <motion.header
      variants={variants}
      animate={hideHeader ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="fixed w-full min-h-[110px] p-2 flex flex-col justify-center items-center shadow-md shadow-black bg-white"
    >
      <Link href="./" className="flex justify-center">
        <Logo className="w-1/2" />
      </Link>
      <MobileNav />
    </motion.header>
  );
};

export default Header;
