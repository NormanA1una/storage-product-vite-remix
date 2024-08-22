import { LogoSection } from "./logo-section";
import { CtaButtons } from "./cta-buttons";
import { useNavigate } from "@remix-run/react";
import { Navigation } from "./navigation";
import { SideNav } from "./mobile";
import { css } from "@emotion/css";

export const Navbar = ({ pathNames, contactMedia }: NavbarProps) => {
  const navigate = useNavigate();

  const navbarStyle = {
    container: css({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "#FFFFFF",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      zIndex: 99,
    }),
  };

  return (
    <nav className={navbarStyle.container}>
      <LogoSection navigate={navigate} />
      <Navigation pathNames={pathNames} />
      <CtaButtons navigate={navigate} />
      <SideNav pathNames={pathNames} contactMedia={contactMedia} />
    </nav>
  );
};
