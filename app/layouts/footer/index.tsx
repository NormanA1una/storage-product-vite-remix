import { css } from "@emotion/css";
import { Link } from "@remix-run/react";
import { H5 } from "~/components/typography/h5";
import { Paragraph } from "~/components/typography/paragraph";

export const Footer = ({ pathNames, contactMedia }: FooterProps) => {
  const footerStyles = {
    footer: css({ backgroundColor: "#EAF6F8" }),

    container: css({
      padding: "24px",

      "@media(min-width: 1024px)": {
        padding: "48px 96px",
      },
    }),

    containerInfo: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "24px",
      marginBottom: "40px",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "normal",
      },
    }),

    logoSection: css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "32px",

      "@media(min-width: 1024px)": {
        alignItems: "start",
        height: "auto",
        justifyContent: "space-around",
      },
    }),

    contentSection: css({
      "@media(min-width: 1024px)": {
        display: "flex",
        gap: "48px",
      },
    }),

    subtitleLogo: css({ color: "#A74B3B" }),

    containerNav: css({
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",

      "@media(min-width: 1024px)": {
        alignItems: "start",
        marginBottom: "0px",
        justifyContent: "start",
      },
    }),

    containerContact: css({
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",

      "@media(min-width: 1024px)": {
        alignItems: "start",
      },
    }),

    titleNavigation: css({
      color: "#2C2C2C",
    }),

    listPaths: css({
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      textAlign: "center",

      "@media(min-width: 1024px)": {
        textAlign: "start",
      },
    }),

    pathLink: css({ color: "#595959" }),

    listContact: css({
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      textAlign: "center",
      color: "#595959",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      alignItems: "center",

      "@media(min-width: 1024px)": {
        alignItems: "start",
      },
    }),

    listDisplay: css({
      display: "flex",
      alignItems: "center",
      gap: "18px",
    }),

    brLocation: css({ "@media(min-width: 1024px)": { display: "none" } }),

    copySection: css({
      padding: "32px 0",
      borderTop: "1px solid #E2E2E2",
      display: "flex",
      flexDirection: "column",
      gap: "24px",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    }),

    copyText: css({ textAlign: "center", color: "#595959" }),

    pattern: css({
      height: "136px",
      width: "100%",
      backgroundImage: "url('/images/footerPattern.svg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }),
  };

  const CONTACTANOS = [
    {
      text: (
        <>
          Villa Sandino, de la Iglesia{" "}
          <br className={footerStyles.brLocation} />
          Espíritu Santo 1c al norte
        </>
      ),
      icoSrc: "/images/locationIcon.svg",
      iconAlt: "Location icon in footer",
    },
    {
      text: "(+505) 8485 9914",
      icoSrc: "/images/phoneIcon.svg",
      iconAlt: "Phone icon in footer",
    },
    {
      text: "soporte@licoreriacociolca.com",
      icoSrc: "/images/emailIcon.svg",
      iconAlt: "Email icon in footer",
    },
  ];

  return (
    <footer id="footer" className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.containerInfo}>
          <div className={footerStyles.logoSection}>
            <div>
              <img src="/images/cocibolcaLogoFooter.svg" alt="" />
            </div>

            <div>
              <Paragraph
                variant="md"
                weight="semi-bold"
                classname={footerStyles.subtitleLogo}
              >
                Licorería Cocibolca: ¡De todo para vos!
              </Paragraph>
            </div>
          </div>

          <div className={footerStyles.contentSection}>
            <div className={footerStyles.containerNav}>
              <div>
                <H5
                  variant="sm"
                  weight="semi-bold"
                  classname={footerStyles.titleNavigation}
                >
                  Navega en el sitio
                </H5>
              </div>

              <ul className={footerStyles.listPaths}>
                {pathNames.map((path, i) => {
                  return (
                    <li key={i}>
                      <Link to={path.path}>
                        <Paragraph
                          variant="sm"
                          weight="semi-bold"
                          classname={footerStyles.pathLink}
                        >
                          {path.nombre}
                        </Paragraph>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={footerStyles.containerContact}>
              <div>
                <H5
                  variant="sm"
                  weight="semi-bold"
                  classname={footerStyles.titleNavigation}
                >
                  Contáctanos
                </H5>
              </div>

              <ul className={footerStyles.listContact}>
                {CONTACTANOS.map((contacto, i) => {
                  return (
                    <li key={i} className={footerStyles.listDisplay}>
                      <div>
                        <img src={contacto.icoSrc} alt={contacto.iconAlt} />
                      </div>
                      <Paragraph
                        variant="sm"
                        weight="semi-bold"
                        classname={footerStyles.pathLink}
                      >
                        {contacto.text}
                      </Paragraph>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className={footerStyles.copySection}>
          <div>
            <Paragraph variant="md" classname={footerStyles.copyText}>
              © 2024 Licorería cocibolca. All rights reserved.
            </Paragraph>
          </div>

          {/* Social medias */}
          <ul className="flex justify-center items-center gap-6">
            {contactMedia?.map((media, i) => {
              return (
                <li key={i}>
                  <Link to={media.url}>
                    <img src={media.srcDark} alt={media.alt} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Contact medio and copy */}
      </div>

      {/* Pattern */}
      <div className={footerStyles.pattern}></div>
    </footer>
  );
};
