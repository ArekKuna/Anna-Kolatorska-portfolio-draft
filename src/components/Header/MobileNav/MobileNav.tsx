import { useState } from "react";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { MobileNavTrigger } from "./MobileNavTrigger";

export const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    const body = document.getElementById("body");
    setOpenDrawer((prevState) => !prevState);
    body?.classList.toggle(`${openDrawer}` ? "drawer-open" : "");
  };

  return (
    <>
      <MobileNavTrigger onClick={handleOpenDrawer} />
      <MobileNavDrawer onClick={handleOpenDrawer} isDrawerOpen={openDrawer} />
    </>
  );
};
