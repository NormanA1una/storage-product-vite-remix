import styled, { CSSObject } from "@emotion/styled";
import { CSSProperties, FC, PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "link" | "dark" | "warning";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  style?: CSSProperties;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  active?: boolean;
  nav?: boolean;
};

const paddingMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "8px 16px",
  md: "10px 18px",
  lg: "12px 20px",
  xl: "12px 24px",
  "2xl": "16px 32px",
};

const variantMap: Record<NonNullable<ButtonProps["variant"]>, CSSObject> = {
  primary: {
    backgroundColor: "#0E8499",
    color: "#FFFFFF",
    ":hover": { backgroundColor: "#0B6779" },
    ":focus": {
      backgroundColor: "#084A59",
      boxShadow: "0px 0px 0px 4px #E2E2E2",
    },
    ":disabled": {
      backgroundColor: "#C4E5E9",
    },
  },

  secondary: {
    backgroundColor: "#FFFFFF",
    color: "#2C2C2C",
    borderWidth: "1px",
    borderColor: "#C5C5C5",
    ":hover": { backgroundColor: "#EAF6F8" },
    ":focus": {
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 0px 0px 4px #CCF3F9",
    },
    ":disabled": {
      backgroundColor: "#E2E2E2",
      color: "#A9A9A9",
      borderColor: "#E2E2E2",
    },
  },

  link: {
    color: "#595959",
    ":hover": { backgroundColor: "#EAF6F8" },
  },

  dark: {
    backgroundColor: "#252c3b",
    color: "#FFFFFF",
    ":hover": { backgroundColor: "#2c323d" },
  },

  warning: {
    backgroundColor: "#db2626",
    color: "#FFFFFF",
    ":hover": { backgroundColor: "#a71d1d" },
  },
};

const baseStyles: CSSObject = {
  borderRadius: "12px",
  fontWeight: 600,
  height: "fit-content",
};

const getButtonStyles = ({
  variant = "primary",
  size = "sm",
  active,
  nav,
}: ButtonProps): CSSObject => {
  const variantStyles = variantMap[variant];
  variantStyles.padding = paddingMap[size];

  if (active) {
    return {
      ...baseStyles,
      ...(nav
        ? { color: "#0E8499", padding: paddingMap[size] }
        : {
            backgroundColor: "#0E8499",
            color: "#FFFFFF",
            padding: paddingMap[size],
          }),
    };
  }

  return {
    ...baseStyles,
    ...variantStyles,
  };
};

const StyleButton = styled.button<ButtonProps>(getButtonStyles);

export const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  className,
  style,
  type,
  onClick,
  disabled,
  variant,
  size,
  active,
  nav,
}) => {
  return (
    <StyleButton
      disabled={disabled}
      type={type}
      style={style}
      className={className}
      onClick={onClick}
      variant={variant}
      size={size}
      active={active}
      nav={nav}
    >
      {children}
    </StyleButton>
  );
};
