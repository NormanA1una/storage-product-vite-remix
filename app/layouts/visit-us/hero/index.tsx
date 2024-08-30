import { css } from "@emotion/css";
import { H1 } from "~/components/typography/h1";

export const HeroVisitUs = () => {
  const visitHeroStyles = {
    mainContainer: css({
      height: "442px",
      backgroundImage: "url(/images/granadaVisit.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",

      "@media(min-width: 1024px)": {
        height: "646px",
      },
    }),

    blueMask: css({
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#0E8499D1",
    }),

    container: css({
      padding: "72px 50px 0px 50px",
      position: "relative",

      "@media(min-width: 1024px)": {
        padding: "144px 0px 0px 0px",
      },
    }),

    titleDisplayMobile: css({
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "48px",
      margin: "0px auto",
    }),

    titleStyle: css({ color: "#FFFFFF", textAlign: "center" }),

    h1Br: css({
      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),
  };
  return (
    <div className={visitHeroStyles.mainContainer}>
      <div className={visitHeroStyles.blueMask} />
      {/* container */}
      <div className={visitHeroStyles.container}>
        {/* img + text */}
        <div className={visitHeroStyles.titleDisplayMobile}>
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
              classname={visitHeroStyles.titleStyle}
            >
              ¡De todo para <br className={visitHeroStyles.h1Br} />
              vos!
            </H1>
          </div>
        </div>
      </div>
    </div>
  );
};
