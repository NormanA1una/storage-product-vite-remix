import { LogoSection } from "./logo-section";
import { CtaButtons } from "./cta-buttons";
import { useNavigate } from "@remix-run/react";
import { Navigation } from "./navigation";
import { SideNav } from "./mobile";

export const Navbar = ({ pathNames, contactMedia }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FFFFFF] py-3 px-6 flex items-center justify-between cursor-pointer">
      <LogoSection navigate={navigate} />
      <Navigation pathNames={pathNames} />
      <CtaButtons navigate={navigate} />
      <SideNav pathNames={pathNames} contactMedia={contactMedia} />
    </nav>
  );
};
