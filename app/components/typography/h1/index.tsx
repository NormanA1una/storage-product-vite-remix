import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  // color: "#101828",
};

const getH1Style = ({
  variant = "md",
  weight = "regular",
}: Typography): CSSObject => {
  const variantStyle = variantStyles[variant];
  const variantWeight = variantWeights[weight];
  return {
    ...baseStyles,
    ...variantStyle,
    ...variantWeight,
  };
};

const H1Styled = styled.h1<Typography>(getH1Style);

export const H1: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <H1Styled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </H1Styled>
  );
};
