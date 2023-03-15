import { HamburgerIcon } from "./HamburgerIcon";

type MobileNavTriggerProps = {
  onClick: () => void;
};

export const MobileNavTrigger = ({ onClick }: MobileNavTriggerProps) => {
  return (
    <div className="flex justify-center items-center" onClick={onClick}>
      <span className="p-2 uppercase">menu</span>
      <HamburgerIcon />
    </div>
  );
};
