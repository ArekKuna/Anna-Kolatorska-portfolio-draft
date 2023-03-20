import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";

export const Socials = () => {
  return (
    <div className="flex justify-center items-center space-x-5">
      <Facebook />
      <Instagram />
    </div>
  );
};
