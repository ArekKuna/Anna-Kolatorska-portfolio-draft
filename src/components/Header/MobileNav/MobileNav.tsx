import { useState } from "react";
import { MobileNavTrigger } from "./MobileNavTrigger";
import { Socials } from "@/components/Socials/Socials";
import { MobileNavDrawer } from "./MobileNavDrawer";

export const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    const body = document.getElementById("body");

    setOpenDrawer((prevState) => !prevState);
    body?.classList.toggle(`${openDrawer}` ? "drawer-open" : "");
  };

  return (
    <>
      <div className="w-full flex flex-col flex-wrap justify-around col-span-1">
        <Socials />
        <MobileNavTrigger onClick={handleOpenDrawer} />
      </div>
      <MobileNavDrawer onClick={handleOpenDrawer} isDrawerOpen={openDrawer} />
    </>
  );
};
