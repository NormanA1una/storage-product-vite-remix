import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H2Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const H2: FC<PropsWithChildren & H2Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h2 className="secondary-h2-style" style={style}>
        {children}
      </h2>
    );

  return (
    <h2 className="primary-h2-style" style={style}>
      {children}
    </h2>
  );
};
