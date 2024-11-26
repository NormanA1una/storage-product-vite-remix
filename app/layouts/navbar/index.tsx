import { LogoSection } from "./logo-section";
import { CtaButtons } from "./cta-buttons";
import { useNavigate } from "@remix-run/react";
import { Navigation } from "./navigation";
import { SideNav } from "./mobile";
import { css } from "@emotion/css";
import { memo } from "react";

export const Navbar = memo(
  ({ pathNames, contactMedia, phoneNumber }: NavbarProps) => {
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

        "@media(min-width: 1024px)": {
          padding: "12px 96px",
        },
      }),
    };

    return (
      <nav className={navbarStyle.container}>
        <LogoSection navigate={navigate} />
        <Navigation pathNames={pathNames} />
        <CtaButtons navigate={navigate} phoneNumber={phoneNumber as string} />
        <SideNav pathNames={pathNames} contactMedia={contactMedia} />
      </nav>
    );
  }
);
