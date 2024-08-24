import { css } from "@emotion/css";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

export const TitoSection = () => {
  const titoStyles = {
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

    content: css({
      backgroundColor: "#FFFFFF",
      padding: "200px 24px 64px 24px",

      "@media(min-width: 1024px)": {
        padding: "290px 96px 64px 96px",
        backgroundColor: "#F8EED8",
      },
    }),

    contentText: css({
      width: "100%",
      maxWidth: "648px",
      margin: "0 auto 52px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
    }),

    containerTitles: css({
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    contentTitle: css({ color: "#2C2C2C" }),

    contentSubTitle: css({ color: "#706F6F" }),

    buttonDisplay: css({
      display: "none",
      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    containerPhotos: css({
      display: "none",
      justifyContent: "space-around",

      "@media(min-width: 1024px)": {
        display: "flex",
      },
    }),

    containerPhotosMobile: css({
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",

      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),

    firstPhotoMobile: css({
      width: "100%",
      height: "202px",
      borderRadius: "24px",
      overflow: "hidden",
      backgroundImage: "url(/images/mosaicoTito3.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }),

    secondPhotoMobile: css({
      width: "100%",
      height: "202px",
      borderRadius: "24px",
      overflow: "hidden",
      backgroundImage: "url(/images/secondMobileImg.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }),

    smallPhotosContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    }),

    smallPhotoDimension: css({
      maxWidth: "384px",
      maxHeight: "204px",
      borderRadius: "24px",
      boxShadow: "0 0 0 2px #9DD3DA",
      overflow: "hidden",
    }),

    firstPhoto: css({
      borderRadius: "24px",
      transform: "translateY(-5px)",
    }),

    secondPhoto: css({
      borderRadius: "24px",
      transform: "translateY(-110px)",
    }),

    bigPhotoDimension: css({
      maxWidth: "472px",
      maxHeight: "448px",
      borderRadius: "24px",
      boxShadow: "0 0 0 2px #9DD3DA",
      overflow: "hidden",
    }),

    thirdPhoto: css({
      borderRadius: "24px",
      height: "100%",
    }),

    fourthPhoto: css({
      borderRadius: "24px",
      transform: "translateY(-110px)",
    }),

    fifthPhoto: css({
      borderRadius: "24px",
      transform: "translate(-1px, -180px)",
    }),
  };

  return (
    <div>
      <div className={titoStyles.titoContainer}>
        <div className={titoStyles.tito}>
          <img
            src="/images/titoSaludo.svg"
            alt="Tito saludando con un trago en la mano"
          />
        </div>

        <div className={titoStyles.titoSaludo}>¡Hola, soy Tito!</div>
        <div className={titoStyles.titoMobile}>
          <img
            src="/images/titoMobile.svg"
            alt="Tito saludando con un trago en la mano"
          />
        </div>
      </div>

      <div className={titoStyles.content}>
        <div>
          <div className={titoStyles.contentText}>
            <div>
              <img
                src="/images/tapaSvg.svg"
                alt="Dibujo de una tapa de una botella de vidrio"
              />
            </div>

            <div className={titoStyles.containerTitles}>
              <div>
                <H1
                  variant="5xl"
                  weight="bold"
                  classname={titoStyles.contentTitle}
                >
                  ¡De todo para vos!
                </H1>
              </div>

              <div>
                <H2 variant="md" classname={titoStyles.contentSubTitle}>
                  En Licorería Cocibolca, nos esforzamos por ser parte de tus
                  momentos especiales, brindando productos de calidad a precios
                  accesibles. Porque merecés lo mejor, siempre.
                </H2>
              </div>

              <div className={titoStyles.buttonDisplay}>
                <Button variant="secondary" size="lg">
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className={titoStyles.containerPhotosMobile}>
            <div className={titoStyles.firstPhotoMobile} />
            <div className={titoStyles.secondPhotoMobile} />
          </div>

          <div className={titoStyles.containerPhotos}>
            <div className={titoStyles.smallPhotosContainer}>
              <div className={titoStyles.smallPhotoDimension}>
                <img
                  src="/images/mosaicoTito1.webp"
                  alt="Lata de cerveza Toña con un eslogan"
                  className={titoStyles.firstPhoto}
                />
              </div>

              <div className={titoStyles.smallPhotoDimension}>
                <img
                  src="/images/mosaicoTito2.webp"
                  alt="Paquete de Victoria Frost en lata"
                  className={titoStyles.secondPhoto}
                />
              </div>
            </div>

            <div className={titoStyles.bigPhotoDimension}>
              <img
                src="/images/mosaicoTito3.webp"
                alt="Foto de la ciudad de Granada con un filtro en azul"
                className={titoStyles.thirdPhoto}
              />
            </div>

            <div className={titoStyles.smallPhotosContainer}>
              <div className={titoStyles.smallPhotoDimension}>
                <img
                  src="/images/mosaicoTito4.webp"
                  alt="Paquete de Victoria Clásica con precio"
                  className={titoStyles.fourthPhoto}
                />
              </div>

              <div className={titoStyles.smallPhotoDimension}>
                <img
                  src="/images/mosaicoTito5.webp"
                  alt="Lata de cerveza Toña con la palabra promo en grande"
                  className={titoStyles.fifthPhoto}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
