import { css } from "@emotion/css";
import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";
import { contactUs } from "~/utils/contact-whatsapp";

type HomeHeroProps = {
  phoneNumber: string;
};

export const HomeHero = ({ phoneNumber }: HomeHeroProps) => {
  const navigate = useNavigate();

  const heroStyles = {
    container: css({
      backgroundColor: "#FFFFFF",
      padding: "72px 24px 193px 24px",

      "@media(min-width: 1024px)": {
        padding: "72px 0 193px 0",
      },
    }),

    containerText: css({
      width: "100%",
      maxWidth: "800px",
      textAlign: "center",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    heroTitle: css({ color: "#2C2C2C" }),

    brTitle: css({ "@media(min-width: 1024px)": { display: "none" } }),

    heroSubtitle: css({ color: "#706F6F" }),

    buttons: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      justifyContent: "center",
      flexDirection: "column",

      "@media(min-width: 1024px)": { flexDirection: "row" },
    }),

    buttonHero: css({
      width: "100%",

      "@media(min-width: 1024px)": { width: "fit-content" },
    }),
  };

  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.containerText}>
        <div>
          <H1 variant="6xl" weight="bold" classname={heroStyles.heroTitle}>
            ¡Todo lo que <br className={heroStyles.brTitle} />
            necesitas, en un solo lugar!
          </H1>
        </div>

        <div>
          <H2 variant="lg" classname={heroStyles.heroSubtitle}>
            En Licorería Cocibolca, encontrarás desde tus bebidas favoritas
            hasta deliciosos snacks y helados. ¡Disfruta de la comodidad de
            tener todo a tu alcance!
          </H2>
        </div>

        <div className={heroStyles.buttons}>
          <Button
            variant="secondary"
            size="lg"
            className={heroStyles.buttonHero}
            onClick={() => contactUs(phoneNumber)}
          >
            Contáctanos
          </Button>
          <Button
            onClick={() => navigate({ pathname: "/catalog" })}
            variant="primary"
            size="lg"
            className={heroStyles.buttonHero}
          >
            Ver catálogo
          </Button>
        </div>
      </div>
    </div>
  );
};
