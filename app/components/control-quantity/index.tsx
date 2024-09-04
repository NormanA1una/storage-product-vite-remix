import { css } from "@emotion/css";
import { Paragraph } from "../typography/paragraph";
import { Icons } from "../icons";

type ControlQuantityProps = {
  product: {
    name: string;
    amount: number;
  };
  handleDecrement: (name: string) => void;
  handleIncrement: (name: string) => void;
};

export const ControlQuantity = ({
  product,
  handleDecrement,
  handleIncrement,
}: ControlQuantityProps) => {
  const controlQuantityStyles = {
    quantityContainer: css({
      maxWidth: "109px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      border: "1px solid #C5C5C5",
      padding: "7px 16px",
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",
    }),
  };
  return (
    <div className={controlQuantityStyles.quantityContainer}>
      <button onClick={() => handleDecrement(product.name)}>
        {product.amount > 1 ? (
          <Icons.minus width="16" height="16" fill="#2C2C2C" />
        ) : (
          <Icons.trash width="16" height="16" fill="#E13636" />
        )}
      </button>
      <div>
        <Paragraph
          weight="regular"
          variant="md"
          classname={css({ color: "#706F6F" })}
        >
          {product.amount}
        </Paragraph>
      </div>
      <button onClick={() => handleIncrement(product.name)}>
        <Icons.plus width="16" height="16" fill="#2C2C2C" />
      </button>
    </div>
  );
};
