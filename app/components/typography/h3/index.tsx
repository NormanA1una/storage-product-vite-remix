import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H3Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const H3: FC<PropsWithChildren & H3Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h3 className="secondary-h3-style" style={style}>
        {children}
      </h3>
    );

  return (
    <h3 className="primary-h3-style" style={style}>
      {children}
    </h3>
  );
};
