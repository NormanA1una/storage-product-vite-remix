import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H5Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const H5: FC<PropsWithChildren & H5Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h5 className="secondary-h5-style" style={style}>
        {children}
      </h5>
    );

  return (
    <h5 className="primary-h5-style" style={style}>
      {children}
    </h5>
  );
};
