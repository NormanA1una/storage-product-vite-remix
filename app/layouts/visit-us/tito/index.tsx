import { css } from "@emotion/css";

export const TitoVisitUs = () => {
  const titoVisit = {
    titoContainer: css({
      backgroundImage: "url(/images/titoPattern.svg)",
      backgroundSize: "cover",
      position: "relative",
      height: "218px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),

    tito: css({
      display: "none",
      position: "absolute",
      top: "-150px",
      pointerEvents: "none",

      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    titoMobile: css({
      position: "absolute",
      pointerEvents: "none",
      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),

    titoSaludo: css({
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
      padding: "8px 12px",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000000",
      position: "absolute",
      zIndex: 1,
      boxShadow: "0px 4px 32px 0px #2C2C2C1F",
      top: -140,

      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),
  };
  return (
    <div className={titoVisit.titoContainer}>
      <div className={titoVisit.tito}>
        <img
          src="/images/titoSaludo.svg"
          alt="Tito saludando con un trago en la mano"
        />
      </div>

      <div className={titoVisit.titoSaludo}>¡Hola, soy Tito!</div>
      <div className={titoVisit.titoMobile}>
        <img
          src="/images/titoMobile.svg"
          alt="Tito saludando con un trago en la mano"
        />
      </div>
    </div>
  );
};
