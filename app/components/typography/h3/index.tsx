import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  // color: "#101828",
};

const getH3Style = ({
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

const H3Styled = styled.h3<Typography>(getH3Style);

export const H3: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <H3Styled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </H3Styled>
  );
};
