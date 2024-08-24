import { css } from "@emotion/css";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

export const SocialMedia = () => {
  const socialMediaStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
      "@media(min-width: 1024px)": {
        backgroundColor: "#0E8499",
      },
    }),
    contentText: css({
      width: "100%",
      maxWidth: "700px",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "24px",
    }),

    container: css({
      padding: "50px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "column",
      gap: "72px",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
        padding: "64px 96px",
        gap: "0px",
      },
    }),

    containerTitles: css({
      textAlign: "start",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    contentTitle: css({
      color: "#2C2C2C",
      "@media(min-width: 1024px)": {
        color: "#FFFFFF",
      },
    }),

    subtitleDisplay: css({ maxWidth: "670px" }),

    contentSubTitle: css({
      color: "#706F6F",
      "@media(min-width: 1024px)": {
        color: "#FFFFFF",
      },
    }),

    mosaicoContainer: css({
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",

      "@media(min-width: 1024px)": {
        gap: "40px",
        width: "auto",
      },
    }),

    imageDisplayRelative: css({
      position: "relative",
    }),

    facebookTag: css({
      position: "absolute",
      right: -45,
      top: -58,

      "@media(min-width: 1024px)": {
        left: -95,
        top: -48,
      },
    }),

    largeImage: css({
      backgroundImage: "url(/images/mosaicoTito5.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "40vw", // Responsive width
      height: "40vw", // Responsive height
      maxWidth: "336px",
      maxHeight: "336px",
      borderRadius: "24px",
      boxShadow: "0 0 0 2px #9DD3DA",
      overflow: "hidden",

      "@media(min-width: 1024px)": {
        width: "336px",
        height: "336px",
      },
    }),

    smallImageContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "40px",
    }),

    instagramTag: css({
      position: "absolute",
      left: -55,
      top: -48,
    }),

    firstSmallImage: css({
      backgroundImage: "url(/images/mosaicoTito3.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "30vw", // Responsive width
      height: "35vw", // Responsive height
      maxWidth: "184px",
      maxHeight: "204px",
      borderRadius: "24px",
      boxShadow: "0 0 0 2px #9DD3DA",
      overflow: "hidden",
      "@media(min-width: 1024px)": {
        width: "184px",
        height: "204px",
      },
    }),

    whatsappTag: css({
      position: "absolute",
      left: -64,
      bottom: -55,
    }),

    secondSmallImage: css({
      backgroundImage: "url(/images/mosaicoTito3.webp)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "30vw", // Responsive width
      height: "35vw", // Responsive height
      maxWidth: "184px",
      maxHeight: "204px",
      borderRadius: "24px",
      boxShadow: "0 0 0 2px #9DD3DA",
      overflow: "hidden",
      "@media(min-width: 1024px)": {
        width: "184px",
        height: "204px",
      },
    }),
  };
  return (
    <div className={socialMediaStyles.mainContainer}>
      {/* container */}
      <div className={socialMediaStyles.container}>
        {/* Texts */}
        <div className={socialMediaStyles.contentText}>
          <div>
            <img src="/images/campanaSvg.svg" alt="Dibujo de una campana" />
          </div>

          <div className={socialMediaStyles.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={socialMediaStyles.contentTitle}
              >
                ¡Síguenos y no te pierdas nuestras promociones!
              </H1>
            </div>

            <div className={socialMediaStyles.subtitleDisplay}>
              <H2 variant="md" classname={socialMediaStyles.contentSubTitle}>
                Conectate con nosotros en redes sociales para estar al tanto de
                ofertas exclusivas, novedades y mucho más. ¡No te pierdas las
                promociones especiales que tenemos para vos!
              </H2>
            </div>

            <div>
              <Button variant="secondary" size="lg">
                ¡Quiero seguirlos!
              </Button>
            </div>
          </div>
        </div>

        <div className={socialMediaStyles.mosaicoContainer}>
          <div className={socialMediaStyles.imageDisplayRelative}>
            <div className={socialMediaStyles.facebookTag}>
              <img
                src="/images/facebookTag.svg"
                alt="Logo de facebook en un fondo blanco"
              />
            </div>
            <div className={socialMediaStyles.largeImage} />
          </div>

          {/* Small imgs */}
          <div className={socialMediaStyles.smallImageContainer}>
            <div className={socialMediaStyles.imageDisplayRelative}>
              <div className={socialMediaStyles.instagramTag}>
                <img
                  src="/images/instagramTag.svg"
                  alt="Logo de instagram en un fondo blanco"
                />
              </div>
              <div className={socialMediaStyles.firstSmallImage} />
            </div>

            <div className={socialMediaStyles.imageDisplayRelative}>
              <div className={socialMediaStyles.whatsappTag}>
                <img
                  src="/images/whatsappTag.svg"
                  alt="Logo de whatsapp en un fondo blanco"
                />
              </div>
              <div className={socialMediaStyles.secondSmallImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
