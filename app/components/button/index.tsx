import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "primary" | "dark" | "warning";
  style?: CSSProperties;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
};

export const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  className,
  style,
  type,
  variant,
  onClick,
  disabled,
}) => {
  if (variant === "dark")
    return (
      <button
        disabled={disabled}
        type={type}
        style={style}
        className={`${className} button-dark-style`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (variant === "warning")
    return (
      <button
        disabled={disabled}
        type={type}
        style={style}
        className={`${className} button-warning-style`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      type={type}
      style={style}
      className={`${className} button-primary-style`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
