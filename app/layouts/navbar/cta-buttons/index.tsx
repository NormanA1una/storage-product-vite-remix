import { NavigateFunction } from "@remix-run/react";
import { Button } from "~/components/button";
import { contactUs } from "~/utils/contact-whatsapp";

type CtaButtonsProps = {
  navigate: NavigateFunction;
  phoneNumber: string;
};

export const CtaButtons = ({ navigate, phoneNumber }: CtaButtonsProps) => {
  return (
    <div className="gap-3 items-center pr-3 hidden lg:flex">
      <Button variant="secondary" onClick={() => contactUs(phoneNumber)}>
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
