import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  color: "#101828",
};

const getH2Style = ({
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

const H2Styled = styled.h2<Typography>(getH2Style);

export const H2: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <H2Styled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </H2Styled>
  );
};
