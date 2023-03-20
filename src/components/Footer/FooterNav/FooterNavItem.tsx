import Link from "next/link";
import { useRouter } from "next/router";
import { FooterNavigationMenu } from "../FooterConfig";

type FooterNavItemProps = {
  links: FooterNavigationMenu;
};

export const FooterNavItem = ({ links }: FooterNavItemProps) => {
  const router = useRouter();
  const activePath = router.pathname;

  const { defLinkStyles, activeLinkStyles } = getStyles(links, activePath);

  return (
    <li className={`${defLinkStyles} ${activeLinkStyles}`}>
      <Link href={links.href}>{links.text}</Link>
    </li>
  );
};

const getStyles = (links: FooterNavigationMenu, path: string) => {
  const defLinkStyles = "text-sm font-light uppercase";
  const activeLinkStyles =
    path === links.href
      ? "underline underline-offset-4 decoration-1 decoration-black"
      : "";

  return {
    defLinkStyles,
    activeLinkStyles,
  };
};
