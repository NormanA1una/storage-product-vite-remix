import { css } from "@emotion/css";
import { H1 } from "~/components/typography/h1";

export const HeroCatalog = () => {
  const heroCatalogStyle = {
    mainContainer: css({
      backgroundColor: "#0E8499",
      height: "480px",
      position: "relative",
    }),

    container: css({
      display: "flex",
      justifyContent: "center",
      padding: "72px 0px 0px 0px",
    }),

    patronCatalog: css({
      position: "absolute",
      backgroundImage: "url(/images/patronDelgadoWhite.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      top: 352,
      bottom: 0,
      left: 0,
      right: 0,
      pointerEvents: "none",

      "@media(min-width: 1024px)": {
        top: 301,
      },
    }),

    titleDisplay: css({
      maxWidth: "800px",
      display: "none",

      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    titleDisplayMobile: css({
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "48px",

      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),

    titleStyle: css({ color: "#FFFFFF", textAlign: "center" }),
  };
  return (
    <div className={heroCatalogStyle.mainContainer}>
      <div className={heroCatalogStyle.container}>
        <div className={heroCatalogStyle.titleDisplay}>
          <H1
            variant="6xl"
            weight="bold"
            classname={heroCatalogStyle.titleStyle}
          >
            ¡Variedad de productos en un solo lugar!
          </H1>
        </div>

        <div className={heroCatalogStyle.titleDisplayMobile}>
          {/* Image */}
          <div>
            <img
              src="/images/cocibolcaLogoCatalog.svg"
              alt="Logo de la licorería Cocibolca en la sección del catálogo"
            />
          </div>

          {/* Text */}
          <div>
            <H1
              variant="6xl"
              weight="bold"
              classname={heroCatalogStyle.titleStyle}
            >
              ¡De todo para <br />
              vos!
            </H1>
          </div>
        </div>
      </div>
      <div className={heroCatalogStyle.patronCatalog} />
    </div>
  );
};
