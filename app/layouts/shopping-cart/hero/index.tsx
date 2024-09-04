import { css } from "@emotion/css";
import { H1 } from "~/components/typography/h1";

export const HeroCart = () => {
  const heroCartStyles = {
    mainContainer: css({
      backgroundColor: "#0E8499",
      position: "relative",
      height: "350px",
      display: "flex",
      alignItems: "end",
      justifyContent: "center",
      "@media(min-width: 1024px)": {
        justifyContent: "start",
      },
    }),
    patronCatalog: css({
      position: "absolute",
      backgroundImage: "url(/images/patronDelgadoWhite.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      top: 0,
      bottom: 160,
      left: 0,
      right: 0,
      pointerEvents: "none",

      "@media(min-width: 1024px)": {
        bottom: 125,
      },
    }),

    container: css({
      display: "flex",
      justifyContent: "start",
      padding: "0px 0px 32px 0px",

      "@media(min-width: 1024px)": {
        justifyContent: "start",
        padding: "0px 0px 32px 96px",
      },
    }),

    title: css({
      color: "#FFFFFF",
      textAlign: "center",
    }),
  };
  return (
    <div className={heroCartStyles.mainContainer}>
      <div className={heroCartStyles.patronCatalog} />
      {/* container */}
      <div className={heroCartStyles.container}>
        {/* pattern */}
        <div></div>

        {/* title */}
        <div>
          <H1 variant="6xl" weight="bold" classname={heroCartStyles.title}>
            Mi carrito de compras
          </H1>
        </div>
      </div>
    </div>
  );
};
