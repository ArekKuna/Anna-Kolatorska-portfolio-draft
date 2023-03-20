import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-[137px] min-h-[2000px]">{children}</main>
      <Footer />
    </>
  );
};
