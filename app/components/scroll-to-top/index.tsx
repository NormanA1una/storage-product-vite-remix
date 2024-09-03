import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { Button } from "../button";

type ScrollToTopButtonProps = {
  targetPosition?: number;
  showAfterScroll?: number;
};

export const ScrollTop = ({
  targetPosition = 0,
  showAfterScroll = 700,
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfterScroll]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollTopStyle = {
    buttonScroll: css({
      position: "fixed",
      bottom: "10px",
      right: "10px",
      zIndex: 30,
      display: isVisible ? "flex" : "none",
      opacity: 0.7,
    }),
  };
  return (
    <Button
      size="icon"
      variant="secondary"
      className={scrollTopStyle.buttonScroll}
      onClick={handleScrollToTop}
    >
      <img
        src="/images/chevronTop.svg"
        alt="Flecha sin cuerpo que apunta hacia arriba"
      />
    </Button>
  );
};
