import { NavigateFunction } from "@remix-run/react";

type LogoSectionProps = {
  navigate: NavigateFunction;
};

export const LogoSection = ({ navigate }: LogoSectionProps) => {
  return (
    <div onClick={() => navigate({ pathname: "/" })} className="cursor-pointer">
      <img
        src="/images/cocibolcaLogoWhite.svg"
        alt="Logo de la Licorería Cocibolca"
        height={50}
        width={156}
      />
    </div>
  );
};
