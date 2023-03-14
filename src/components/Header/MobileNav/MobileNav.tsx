import { useState } from "react";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { MobileNavTrigger } from "./MobileNavTrigger";

export const MobileNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  console.log(openDrawer);
  return (
    <>
      <MobileNavTrigger onClick={handleOpenDrawer} />
      <MobileNavDrawer onClick={handleOpenDrawer} isDrawerOpen={openDrawer} />
    </>
  );
};
