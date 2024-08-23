import styled, { CSSObject } from "@emotion/styled";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

type BadgesProps = {
  variant: "base" | "info" | "error" | "warning" | "success";
  icon?: boolean;
  classname?: string;
};

const variantMap: Record<NonNullable<BadgesProps["variant"]>, CSSObject> = {
  base: {
    color: "#2C2C2C",
    backgroundColor: "#F9FAFB",
    border: "1px solid #EAECF0",
  },
  info: {
    color: "#0E8499",
    backgroundColor: "#EAF6F8",
    border: "1px solid #76C2CB",
  },
  error: {
    color: "#E13636",
    backgroundColor: "#FCF3F3",
    border: "1px solid #EDA7A7",
  },
  warning: {
    color: "#BF7007",
    backgroundColor: "#FEF6F2",
    border: "1px solid #FAC4A1",
  },
  success: {
    color: "#128A52",
    backgroundColor: "#F2F8F4",
    border: "1px solid #A2D4B5",
  },
};

const variantDot: Record<NonNullable<BadgesProps["variant"]>, CSSObject> = {
  base: {
    backgroundColor: "#2C2C2C",
  },
  info: {
    backgroundColor: "#0E8499",
  },
  error: {
    backgroundColor: "#E13636",
  },
  warning: {
    backgroundColor: "#BF7007",
  },
  success: {
    backgroundColor: "#128A52",
  },
};

const baseStylesDiv: CSSObject = {
  borderRadius: "9.999px",
  fontWeight: 600,
  height: "fit-content",
  padding: "4px 12px",
};

const baseStyleDot: CSSObject = {
  height: "6px",
  width: "6px",
  borderRadius: "100%",
};

const withIcon: CSSObject = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

const getDivStyle = ({ variant, icon }: BadgesProps): CSSObject => {
  const variantStyles = variantMap[variant];

  if (icon)
    return {
      ...baseStylesDiv,
      ...variantStyles,
      ...withIcon,
    };

  return {
    ...baseStylesDiv,
    ...variantStyles,
  };
};

const getDotStyle = ({ variant }: BadgesProps): CSSObject => {
  const variantStyles = variantDot[variant];
  return {
    ...baseStyleDot,
    ...variantStyles,
  };
};

const StyleDiv = styled.div<BadgesProps>(getDivStyle);
const StyleDot = styled.div<BadgesProps>(getDotStyle);

export const Badges: FC<PropsWithChildren & BadgesProps> = ({
  children,
  variant,
  icon,
  classname,
}) => {
  return (
    <StyleDiv variant={variant} icon={icon} className={classname}>
      {icon && <StyleDot variant={variant} />} {children}
    </StyleDiv>
  );
};
