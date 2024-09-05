import { css } from "@emotion/css";
import { useState } from "react";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import { useToast } from "~/context/toast-context";

export const LocationLico = () => {
  const {
    openToast,
    setToastContent,
    setAutoCloseTime,
    closeToast,
    disableIcon,
  } = useToast();

  const handleCopyClick = () => {
    const textToCopy =
      "Villa Sandino, de la Iglesia Espíritu Santo 1c al norte";
    navigator.clipboard.writeText(textToCopy).then(undefined, () => {
      console.error("Error al copiar!");
    });
  };

  const locationStyle = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
      padding: "50px 0px 250px 0px",
      position: "relative",
      "@media(min-width: 1024px)": {
        backgroundColor: "#CCF3F9",
        padding: "100px 0px 300px 0px",
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

    copyDisplay: css({
      display: "none",
      alignItems: "center",
      backgroundColor: "#E2E2E2",
      borderRadius: "12px",
      padding: "12px 24px",

      "@media(min-width: 1024px)": {
        display: "flex",
      },
    }),

    directionDisplay: css({ width: "100%" }),

    directionStyle: css({ color: "#2C2C2C", textAlign: "center" }),

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
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "center",

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

  const handleShowToast = () => {
    disableIcon();
    setToastContent(
      <div
        className={css({ display: "flex", alignItems: "center", gap: "12px" })}
      >
        <div>
          <img
            src="/images/copyText.gif"
            alt="Animación haciendo referencia de que se ha copiado un texto"
            className={css({ height: "40px", width: "40px" })}
          />
        </div>

        <div>
          <Paragraph
            variant="sm"
            weight="semi-bold"
            classname={css({ color: "#344054" })}
          >
            ¡Dirección copiada éxitosamente!
          </Paragraph>
        </div>
      </div>
    );
    setAutoCloseTime(3000);
    openToast();
  };

  return (
    <div className={locationStyle.mainContainer}>
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
          pointerEvents: "none",
        })}
      />

      {/* Main container */}
      <div className={locationStyle.container}>
        {/* Texts */}
        <div className={locationStyle.contentText}>
          <div>
            <img
              src="/images/volcanSvg.svg"
              alt="Dibujo de un volcan con trazos celestes"
              loading="lazy"
            />
          </div>

          <div className={locationStyle.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={locationStyle.contentTitle}
              >
                ¡Visítanos en Granada!
              </H1>
            </div>

            <div className={locationStyle.subtitleDisplay}>
              <H2 variant="md" classname={locationStyle.contentSubTitle}>
                Descubre nuestra tienda y encuentra todo lo que necesitas en el
                corazón de Granada. ¡Te esperamos con los brazos abiertos!
              </H2>
            </div>

            {/* input que me permita copiar lo que hay en el value */}
            <div className={locationStyle.copyDisplay}>
              {/* Text */}
              <div className={locationStyle.directionDisplay}>
                <Paragraph
                  variant="md"
                  weight="semi-bold"
                  classname={locationStyle.directionStyle}
                >
                  Villa Sandino, de la Iglesia Espíritu Santo 1c al norte
                </Paragraph>
              </div>

              <div>
                <Button
                  variant="link"
                  size="icon"
                  onClick={() => {
                    handleCopyClick();
                    handleShowToast();
                  }}
                >
                  <img
                    src="/images/copy.svg"
                    alt="Icono que sugiere copiar al portapapeles"
                  />
                </Button>
              </div>
            </div>

            <div className={locationStyle.buttonsDisplay}>
              <Button
                variant="secondary"
                size="sm"
                className={locationStyle.displayButton}
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/a8SYf4RDQD7PMvXw6",
                    "_blank"
                  )
                }
              >
                Ver en Google Maps{" "}
                <img
                  src="/images/location.svg"
                  alt="Ícono de un punto de localización"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className={locationStyle.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.3871600778629!2d-85.95094916333358!3d11.947391207004795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740d4892feba1d%3A0xe7740edcd3e77d50!2sLicoreria%20Cocibolca!5e1!3m2!1sen!2sni!4v1724429098669!5m2!1sen!2sni"
            className={locationStyle.iframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
