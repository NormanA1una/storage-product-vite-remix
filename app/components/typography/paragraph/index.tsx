import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type ParagraphProps = {
  variant?: "primary" | "secondary" | "form";
  style?: CSSProperties;
  classname?: string;
};

export const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({
  children,
  variant,
  style,
  classname,
}) => {
  if (variant === "form")
    return (
      <p className={`${classname} form-p-style`} style={style}>
        {children}
      </p>
    );

  if (variant === "secondary")
    return (
      <p className={`${classname} secondary-p-style`} style={style}>
        {children}
      </p>
    );

  return (
    <p className={`${classname} primary-p-style`} style={style}>
      {children}
    </p>
  );
};
