import styled, { CSSObject } from "@emotion/styled";
import { FC, PropsWithChildren } from "react";
import { variantStyles, variantWeights } from "~/utils/variant-styles";

const baseStyles: CSSObject = {
  // color: "#101828",
};

const getParagraphStyle = ({
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

const ParagraphStyled = styled.p<Typography>(getParagraphStyle);

export const Paragraph: FC<PropsWithChildren & Typography> = ({
  children,
  variant,
  style,
  classname,
  weight,
}) => {
  return (
    <ParagraphStyled
      className={classname}
      style={style}
      variant={variant}
      weight={weight}
    >
      {children}
    </ParagraphStyled>
  );
};
