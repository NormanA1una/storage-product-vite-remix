import { CSSObject } from "@emotion/styled";

export const variantWeights: Record<
  NonNullable<Typography["weight"]>,
  CSSObject
> = {
  regular: { fontWeight: 500 },
  "semi-bold": { fontWeight: 600 },
  bold: { fontWeight: 800 },
};

export const variantStyles: Record<
  NonNullable<Typography["variant"]>,
  CSSObject
> = {
  xs: { fontSize: "12px", lineHeight: "18px" },

  sm: { fontSize: "14px", lineHeight: "20px" },

  md: { fontSize: "16px", lineHeight: "24px" },

  lg: {
    fontSize: "16px",
    lineHeight: "24px",
    "@media(min-width: 1024px)": { fontSize: "18px", lineHeight: "28px" },
  },

  xl: { fontSize: "20px", lineHeight: "30px" },

  "2xl": { fontSize: "24px", lineHeight: "32px" },

  "3xl": { fontSize: "30px", lineHeight: "38px" },

  "4xl": { fontSize: "36px", lineHeight: "44px" },

  "5xl": {
    fontSize: "28px",
    lineHeight: "36px",
    "@media(min-width: 1024px)": { fontSize: "38px", lineHeight: "50px" },
    "@media(min-width: 1280px)": { fontSize: "48px", lineHeight: "60px" },
  },

  "6xl": {
    fontSize: "36px",
    lineHeight: "44px",
    "@media(min-width: 1024px)": { fontSize: "60px", lineHeight: "72px" },
  },

  "7xl": { fontSize: "72px", lineHeight: "90px" },
};
