import { css } from "@emotion/css";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  error?: string;
};

export const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  required,
  className,
  inputClassName,
  error,
}: TextInputProps) => {
  const styles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
    }),
    label: css({ color: "#2C2C2C" }),
    input: css({
      width: "100%",
      border: `1px solid ${error ? "#DC2626" : "#C5C5C5"}`,
      borderRadius: "12px",
      padding: "10px 16px",
      backgroundColor: "#FFFFFF",
      color: "#2C2C2C",
      outline: "none",
      ":focus": { borderColor: error ? "#DC2626" : "#0E8499" },
    }),
    error: css({ color: "#DC2626", fontSize: "12px" }),
  };

  return (
    <div className={css(styles.container, className || "")}>
      {" "}
      {/* Container for label + input */}
      {label && (
        <label className={styles.label}>
          {label}
          {required ? " *" : ""}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css(styles.input, inputClassName || "")}
        aria-invalid={!!error}
        aria-required={required}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
