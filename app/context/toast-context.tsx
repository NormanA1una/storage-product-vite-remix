// context/toast-context.tsx
import { createContext, ReactNode, useContext, useState } from "react";

type ToastContextType = {
  isToastOpen: boolean;
  openToast: () => void;
  closeToast: () => void;
  setToastContent: (content: ReactNode) => void;
  toastContent: ReactNode;
  autoCloseTime?: number;
  setAutoCloseTime: (time: number) => void;
  enableIcon: () => void;
  disableIcon: () => void;
  iconClose: boolean;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState<ReactNode>(null);
  const [autoCloseTime, setAutoCloseTime] = useState<number | undefined>(
    undefined
  );
  const [iconClose, setIconClose] = useState(true);

  const openToast = () => setIsToastOpen(true);
  const closeToast = () => {
    setIsToastOpen(false);
    setIconClose(true);
  };

  const enableIcon = () => setIconClose(true);
  const disableIcon = () => setIconClose(false); //Esta probablemente se puede borrar

  return (
    <ToastContext.Provider
      value={{
        isToastOpen,
        openToast,
        closeToast,
        setToastContent,
        toastContent,
        autoCloseTime,
        setAutoCloseTime,
        iconClose,
        enableIcon,
        disableIcon,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
