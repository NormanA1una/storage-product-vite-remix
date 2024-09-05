import { ReactNode, useEffect } from "react";
import { css, keyframes } from "@emotion/css";
import { Button } from "../button";

type ToastProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  autoCloseTime?: number;
  iconClose?: boolean;
};

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Toast = ({
  isOpen,
  onClose,
  children,
  autoCloseTime,
  iconClose,
}: ToastProps) => {
  useEffect(() => {
    if (isOpen && autoCloseTime) {
      const timer = setTimeout(onClose, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseTime, onClose]);

  const toastStyles = {
    toastContainer: css({
      position: "fixed",
      top: "100px",
      right: "10px",
      backgroundColor: "#FFFFFF",
      padding: "16px",
      borderRadius: "12px",
      boxShadow: "0px 4px 32px 0px #2C2C2C0F",
      zIndex: 50,
      border: "1px solid #17B26A",
      transform: isOpen ? "translateX(0)" : "translateX(100%)",
      opacity: isOpen ? 1 : 0,
      animation: `${isOpen ? slideIn : slideOut} 0.3s ease forwards`,
      transition: "transform 0.3s ease, opacity 0.3s ease",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "343px",

      "@media(min-width: 1024px)": {
        right: "20px",
      },
    }),

    closeButton: css({
      position: "absolute",
      top: "15px",
      right: "15px",
    }),
  };

  return (
    <div className={toastStyles.toastContainer}>
      {iconClose && (
        <Button
          variant="secondary"
          size="icon"
          onClick={onClose}
          className={toastStyles.closeButton}
        >
          <div>
            <img src="/images/cancelX.svg" alt="Ícono de X en el toast" />
          </div>
        </Button>
      )}
      {children}
    </div>
  );
};

export default Toast;
