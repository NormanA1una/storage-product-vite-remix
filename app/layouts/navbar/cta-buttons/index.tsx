import { NavigateFunction } from "@remix-run/react";
import { Button } from "~/components/button";

type CtaButtonsProps = {
  navigate: NavigateFunction;
};

export const CtaButtons = ({ navigate }: CtaButtonsProps) => {
  return (
    <div className="gap-3 items-center pr-3 hidden lg:flex">
      <Button
        variant="secondary"
        onClick={() => navigate({ pathname: "/catalog" })}
      >
        Contáctanos
      </Button>
      <Button
        variant="primary"
        onClick={() => navigate({ pathname: "/catalog" })}
      >
        Ver catálogo
      </Button>
    </div>
  );
};
