import { css } from "@emotion/css";

export const VisitMosaico = () => {
  const mosaicoStyles = {
    smallPhotoContainer: css({
      maxWidth: "163px",
      maxHeight: "150px",
      width: "100%",
      height: "auto",
      aspectRatio: "1/1",
      borderRadius: "24px",
      boxShadow: "0 0 0 4px #FFFFFF",
      overflow: "hidden",
      transform: "translateY(-50px)",
      transition: "all 0.3s ease",

      "@media(min-width: 768px)": {
        maxWidth: "193px",
        maxHeight: "170px",
        transform: "translateY(-60px)",
      },

      "@media(min-width: 1024px)": {
        maxWidth: "382px",
        maxHeight: "352px",
        transform: "translateY(-80px)",
      },
    }),

    bigPhotoContainer: css({
      maxWidth: "200px",
      maxHeight: "150px",
      width: "100%",
      height: "auto",
      aspectRatio: "16/9",
      borderRadius: "24px",
      boxShadow: "0 0 0 4px #FFFFFF",
      overflow: "hidden",
      transform: "translateY(-82px)",
      transition: "all 0.3s ease",

      "@media(min-width: 768px)": {
        maxWidth: "230px",
        maxHeight: "170px",
        transform: "translateY(-95px)",
      },

      "@media(min-width: 1024px)": {
        maxWidth: "472px",
        maxHeight: "352px",
        transform: "translateY(-150px)",
      },
    }),
  };
  return (
    <div
      className={css({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflowX: "clip",
        backgroundColor: "#FFFFFF",
        height: "150px",
        transition: "all 0.3s ease",

        "@media(min-width: 768px)": {
          height: "170px",
        },

        "@media(min-width: 1024px)": {
          height: "352px",
          backgroundColor: "#CCF3F9",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          gap: "42px",
          minWidth: "620px",
          position: "absolute",

          "@media(min-width: 1024px)": {
            padding: "4px 36px 0px 36px",
            backgroundColor: "#CCF3F9",
          },

          "@media(min-width: 1280px)": {
            padding: "4px 96px 0px 96px",
          },
        })}
      >
        <div className={mosaicoStyles.smallPhotoContainer}>
          <img
            src="/images/visit1.webp"
            alt="Parque centrar de Granada"
            className={css({
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            })}
          />
        </div>
        <div className={mosaicoStyles.bigPhotoContainer}>
          <img
            src="/images/visit2.webp"
            alt="Malecon de Granada y una vista al Cocibolca"
            className={css({
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom 0 left 50%",
            })}
          />
        </div>
        <div className={mosaicoStyles.smallPhotoContainer}>
          <img
            src="/images/visit3.webp"
            alt="Costado de la Catedral de Granada"
            className={css({
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left",
            })}
          />
        </div>
      </div>
    </div>
  );
};
