import { NavigateFunction } from "@remix-run/react";

type LogoSectionProps = {
  navigate: NavigateFunction;
};

export const LogoSection = ({ navigate }: LogoSectionProps) => {
  return (
    <div
      onClick={() => navigate({ pathname: "/" })}
      className="cursor-pointer flex items-center"
    >
      <img
        src="/images/cocibolcaLogo.svg"
        alt="Logo de la Licorería Cocibolca"
        height={50}
        width={156}
        className="hidden lg:block"
        loading="eager"
      />
      <img
        src="/images/cocibolcaLogoMobile.svg"
        alt="Logo para celulares de la Licorería Cocibolca"
        className="lg:hidden"
        width={41}
        height={48}
        loading="eager"
      />
    </div>
  );
};
