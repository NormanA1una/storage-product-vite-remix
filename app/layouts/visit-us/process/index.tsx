import { css } from "@emotion/css";

import { H1 } from "~/components/typography/h1";
import { InstructionSteps } from "./steps";

export const PurchaseProcess = () => {
  const processStyles = {
    mainContainer: css({ backgroundColor: "#FFFFFF" }),

    container: css({
      padding: "200px 24px 110px 24px",

      "@media(min-width: 1024px)": {
        padding: "200px 24px 160px 24px",
      },
    }),

    contentText: css({
      width: "100%",
      maxWidth: "990px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      margin: "0px auto 48px auto",

      "@media(min-width: 1024px)": {
        margin: "0px auto 64px auto",
      },
    }),

    containerTitles: css({
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    contentTitle: css({ color: "#2C2C2C" }),
  };
  return (
    <div className={processStyles.mainContainer}>
      {/* container */}
      <div className={processStyles.container}>
        {/* icon + text */}
        <div className={processStyles.contentText}>
          <div>
            <img
              src="/images/chucheria.svg"
              alt="Dibujo de un volcan con trazos celestes"
            />
          </div>

          <div className={processStyles.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={processStyles.contentTitle}
              >
                ¿Cómo Comprar en Nuestro Catálogo Web?
              </H1>
            </div>
          </div>
        </div>

        {/* cards */}
        <InstructionSteps />
      </div>
    </div>
  );
};
