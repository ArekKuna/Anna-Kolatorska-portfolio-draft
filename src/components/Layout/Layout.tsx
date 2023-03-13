import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
