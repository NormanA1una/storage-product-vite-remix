import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  // color: "#101828",
};

const getH6Style = ({
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

const H6Styled = styled.h6<Typography>(getH6Style);

export const H6: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <H6Styled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </H6Styled>
  );
};
