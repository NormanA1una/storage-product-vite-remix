import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H6Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const H6: FC<PropsWithChildren & H6Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h6 className="secondary-h6-style" style={style}>
        {children}
      </h6>
    );

  return (
    <h6 className="primary-h6-style" style={style}>
      {children}
    </h6>
  );
};
