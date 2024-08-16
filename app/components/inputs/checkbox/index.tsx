import styled, { CSSObject } from "@emotion/styled";
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
} from "react";

type CheckboxProps = {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  onChange?:
    | (InputHTMLAttributes<HTMLInputElement> &
        ChangeEventHandler<HTMLInputElement>)
    | undefined;
};

const StyleCheckbox = styled.input<CheckboxProps>({
  appearance: "none",
  width: "20px",
  height: "20px",
  borderRadius: "100%",
  backgroundColor: "#ffffff",
  border: "1px solid #E2E2E2",
  position: "relative",
  cursor: "pointer",
  ":hover": {
    boxShadow: "0px 0px 0px 4px #98A2B324",
  },

  // Estilos para el estado "checked"
  "&:checked": {
    backgroundColor: "#0E8499",
    ":hover": {
      boxShadow: "0px 0px 0px 4px #0E84993D",
    },
    "&::before": {
      content: '""',
      display: "block",
      width: "7px",
      height: "7px",
      backgroundColor: "#ffffff",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "100%",
    },
  },
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, onClick, onChange, defaultChecked, ...props }, ref) => {
    return (
      <StyleCheckbox
        {...props}
        ref={ref}
        type="checkbox"
        id={id}
        checked={checked}
        onClick={onClick}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
    );
  }
);
