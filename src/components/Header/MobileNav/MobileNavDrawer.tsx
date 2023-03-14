import { motion, AnimatePresence } from "framer-motion";
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
          className="fixed top-0 left-0 w-screen h-screen text-white bg-black/70"
        >
          <CloseIcon onClick={onClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
