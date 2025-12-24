import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

type LivePageProps = {
  twitchParentHost?: string;
};

export const LivePage = ({ twitchParentHost = "" }: LivePageProps) => {
  const [hostname, setHostname] = useState<string>("localhost");

  useEffect(() => {
    // Use environment variable if available, otherwise use current hostname
    if (twitchParentHost) {
      setHostname(twitchParentHost);
    } else if (typeof window !== "undefined") {
      setHostname(window.location.hostname);
    }
  }, [twitchParentHost]);

  const liveStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
      minHeight: "100vh",
      paddingTop: "72px",
    }),

    heroSection: css({
      padding: "48px 24px 48px 24px",
      textAlign: "center",
      backgroundColor: "#FFFFFF",

      "@media(min-width: 1024px)": {
        padding: "72px 0 72px 0",
      },
    }),

    heroContent: css({
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    heroTitle: css({
      color: "#2C2C2C",
    }),

    heroSubtitle: css({
      color: "#706F6F",
    }),

    twitchSection: css({
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto 72px auto",
      padding: "0 24px",

      "@media(min-width: 1024px)": {
        padding: "0 96px",
      },

      "@media(min-width: 1280px)": {
        padding: "0",
      },
    }),

    twitchContainer: css({
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%", // 16:9 aspect ratio
      height: 0,
      overflow: "hidden",
      borderRadius: "12px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
      backgroundColor: "#000000",
    }),

    twitchIframe: css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
    }),
  };

  return (
    <div className={liveStyles.mainContainer}>
      {/* Hero Section */}
      <div className={liveStyles.heroSection}>
        <div className={liveStyles.heroContent}>
          <H1 variant="6xl" weight="bold" classname={liveStyles.heroTitle}>
            Rifa Navideña 🎄
          </H1>
          <H2 variant="lg" classname={liveStyles.heroSubtitle}>
            Disfruta de nuestras transmisiones en vivo. ¡Acompáñanos y el
            Ganador de la Rifa Navideña de la Licorería Cocibolca!
          </H2>
        </div>
      </div>

      {/* Twitch Live Section */}
      <div className={liveStyles.twitchSection}>
        <div className={liveStyles.twitchContainer}>
          <iframe
            src={`https://player.twitch.tv/?channel=licoreriacocibolca&parent=${hostname}`}
            className={liveStyles.twitchIframe}
            allowFullScreen
            title="Twitch Live Stream"
          />
        </div>
      </div>
    </div>
  );
};
