import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H5Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
  classname?: string;
};

export const H5: FC<PropsWithChildren & H5Props> = ({
  children,
  variant,
  style,
  classname,
}) => {
  if (variant === "secondary")
    return (
      <h5 className={`"s${classname} condary-h5-style`} style={style}>
        {children}
      </h5>
    );

  return (
    <h5 className={`${classname} primary-h5-style`} style={style}>
      {children}
    </h5>
  );
};
