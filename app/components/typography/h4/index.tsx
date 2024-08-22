import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  color: "#101828",
};

const getH4Style = ({
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

const H4Styled = styled.h4<Typography>(getH4Style);

export const H4: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <H4Styled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </H4Styled>
  );
};
