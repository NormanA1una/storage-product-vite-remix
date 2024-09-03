import { css } from "@emotion/css";
import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

export const VisitUs = () => {
  const navigate = useNavigate();
  const visitStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
      padding: "160px 0",
      position: "relative",
      "@media(min-width: 1024px)": {
        backgroundColor: "#CCF3F9",
      },
    }),
    containerTitles: css({
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    container: css({
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      backgroundColor: "#FFFFFF",
      width: "fit-content",
      height: "fit-content",
      padding: "20px 24px",
      borderRadius: "24px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,

      "@media(min-width: 1024px)": {
        padding: "40px 128px",
      },
    }),

    contentTitle: css({ color: "#2C2C2C" }),

    subtitleDisplay: css({ maxWidth: "670px" }),

    contentText: css({
      width: "100%",
      maxWidth: "700px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      margin: "0 auto",
    }),

    contentSubTitle: css({ color: "#706F6F" }),

    buttonsDisplay: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      justifyContent: "center",
      flexDirection: "column",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
      },
    }),

    displayButton: css({
      width: "100%",

      "@media(min-width: 1024px)": {
        width: "fit-content",
      },
    }),

    mapContainer: css({
      display: "flex",
      justifyContent: "center",
    }),

    iframe: css({
      width: "100%",
      maxWidth: "648px",
      height: "300px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "24px",
    }),
  };
  return (
    <div className={visitStyles.mainContainer}>
      <div
        className={css({
          backgroundImage: "url(/images/patronDelgado.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
        })}
      />

      {/* Main container */}
      <div className={visitStyles.container}>
        {/* Texts */}
        <div className={visitStyles.contentText}>
          <div>
            <img
              src="/images/volcanSvg.svg"
              alt="Dibujo de un volcan con trazos celestes"
            />
          </div>

          <div className={visitStyles.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={visitStyles.contentTitle}
              >
                ¡Visítanos en Granada!
              </H1>
            </div>

            <div className={visitStyles.subtitleDisplay}>
              <H2 variant="md" classname={visitStyles.contentSubTitle}>
                Descubre nuestra tienda y encuentra todo lo que necesitas en el
                corazón de Granada. ¡Te esperamos con los brazos abiertos!
              </H2>
            </div>

            <div className={visitStyles.buttonsDisplay}>
              <Button
                variant="link"
                className={visitStyles.displayButton}
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/a8SYf4RDQD7PMvXw6",
                    "_blank"
                  )
                }
              >
                Ver en Google Maps
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className={visitStyles.displayButton}
                onClick={() => navigate({ pathname: "/visitanos" })}
              >
                Ver detalles
              </Button>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className={visitStyles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.3871600778629!2d-85.95094916333358!3d11.947391207004795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740d4892feba1d%3A0xe7740edcd3e77d50!2sLicoreria%20Cocibolca!5e1!3m2!1sen!2sni!4v1724429098669!5m2!1sen!2sni"
            className={visitStyles.iframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
