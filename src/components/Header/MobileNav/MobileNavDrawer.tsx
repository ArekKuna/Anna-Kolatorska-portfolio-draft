import { motion, AnimatePresence } from "framer-motion";
import { MobileNavMenu } from "./MobileNavMenu";
import { CloseIcon } from "./CloseIcon";

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
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 p-5 w-screen h-screen flex justify-center items-center text-white bg-black/80 z-100 drawer-open"
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
