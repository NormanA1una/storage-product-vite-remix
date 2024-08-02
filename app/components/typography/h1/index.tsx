import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H1Props = {
  variant?: "primary" | "secondary" | "hero" | "nav";
  style?: CSSProperties;
};

export const H1: FC<PropsWithChildren & H1Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h1 className="secondary-h1-style" style={style}>
        {children}
      </h1>
    );

  if (variant === "hero")
    return (
      <h1 className="hero-h1-style" style={style}>
        {children}
      </h1>
    );

  if (variant === "nav")
    return (
      <h1 className="nav-h1-style" style={style}>
        {children}
      </h1>
    );

  return (
    <h1 className="primary-h1-style" style={style}>
      {children}
    </h1>
  );
};
