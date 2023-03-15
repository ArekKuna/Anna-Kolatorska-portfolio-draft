import { motion, AnimatePresence } from "framer-motion";
import { MobileNavMenu } from "./MobileNavMenu";
import { CloseIcon } from "./CloseIcon";
import { drawerVariantsMap } from "../HeaderConfig";

type MobileNavDrawerProps = {
  onClick: () => void;
  isDrawerOpen: boolean;
};

export const MobileNavDrawer = ({
  isDrawerOpen,
  onClick,
}: MobileNavDrawerProps) => {
  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          variants={drawerVariantsMap}
          initial="initial"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 p-5 w-screen h-screen flex justify-center items-center overflow-y-auto text-white bg-black/80 z-100"
        >
          <CloseIcon
            onClick={onClick}
            className="w-8 h-8 absolute top-10 right-10"
          />
          <MobileNavMenu onClick={onClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
