import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";

export const Footer = ({ pathNames }: FooterProps) => {
  /* CSS IM JS */
  const footerStyles = {
    footer: css({ backgroundColor: "#EAF6F8" }),
    container: css({ padding: "24px" }),
    logoSection: css({
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      gap: "32px",
    }),
    subtitleLogo: css({ color: "#A74B3B", fontWeight: 600 }),
    pattern: css({
      height: "136px",
      width: "100%",
      backgroundImage: "url('/images/footerPattern.svg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }),
  };

  return (
    <footer className={footerStyles.footer}>
      {/* Text */}
      <div className={footerStyles.container}>
        {/* Info */}
        <div>
          {/* Logo section */}
          <div className={footerStyles.logoSection}>
            <div>
              <img src="/images/cocibolcaLogoFooter.svg" alt="" />
            </div>

            <div>
              <Paragraph classname={footerStyles.subtitleLogo}>
                Licorería Cocibolca: ¡De todo para vos!
              </Paragraph>
            </div>
          </div>

          {/* Content section */}
          <div>
            {/* Navegacion */}
            <div></div>

            {/* Contacto */}
            <div></div>
          </div>
        </div>

        {/* Separator */}
        <div></div>

        {/* Contact medio and copy */}
        <div>
          {/* Copy */}
          <div></div>

          {/* Social medias */}
          <ul></ul>
        </div>
      </div>

      {/* Pattern */}
      <div className={footerStyles.pattern}></div>
    </footer>
  );
};
