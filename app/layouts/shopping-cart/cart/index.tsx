import { css } from "@emotion/css";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Badges } from "~/components/badges";
import { Paragraph } from "~/components/typography/paragraph";
import { useCart } from "~/context/cart-context";

type CartProps = {
  phoneNumber: string;
};

export const Cart = ({ phoneNumber }: CartProps) => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const cartStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
    }),

    container: css({
      padding: "60px 24px 132px 24px",
    }),

    cardWithProducts: css({
      backgroundColor: "#FFFFFF",
      border: "1px solid #E2E2E2",
      borderRadius: "20px",
      maxWidth: "876px",
      margin: "0px auto",
    }),

    title: css({ padding: "20px 24px" }),

    tableWrapper: css({
      overflowX: "auto", // Permitir scroll horizontal
      width: "100%",
    }),

    table: css({
      width: "100%",
      color: "#706F6F",
      marginBottom: "24px",
      minWidth: "600px", // Establecer un ancho mínimo para la tabla
    }),

    tableHead: css({
      borderTop: "1px solid #E2E2E2",
      borderBottom: "1px solid #E2E2E2",
      backgroundColor: "#FEF6F2",
    }),

    cellHeader: css({
      textAlign: "left",
      padding: "12px 0px 12px 24px",
      fontWeight: 400,
      color: "#706F6F",
    }),

    cellHeaderAmount: css({
      textAlign: "right",
      padding: "12px 24px 12px 0px",
      fontWeight: 400,
      color: "#706F6F",
    }),

    cellProduct: (i: number): string => {
      return css({
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: i === 0 ? "24px 0px 12px 24px" : "12px 0px 12px 24px",
      });
    },

    badgeProduct: css({ width: "fit-content" }),

    imgProduct: (src: string): string => {
      return css({
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "72px",
        height: "72px",
      });
    },

    cellPrice: (i: number): string => {
      return css({
        padding: i === 0 ? "24px 0px 12px 24px" : "12px 0px 12px 24px",
      });
    },

    price: css({ color: "#706F6F" }),

    cellQuantity: (i: number): string => {
      return css({
        padding: i === 0 ? "24px 24px 12px 0px" : "12px 24px 12px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      });
    },

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

  const handleIncrement = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName
          ? { ...product, amount: product.amount + 1 }
          : product
      )
    );
  };

  const handleDecrement = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName && product.amount > 0
          ? { ...product, amount: product.amount - 1 }
          : product
      )
    );
  };

  const handleSendWhatsapp = () => {
    let message = "Hola, aquí está la lista de productos que me interesan:\n\n";

    cart.forEach((producto) => {
      message += `🌋 ${producto.name} - ${producto.amount} ${
        producto.amount > 1 ? "Unidades" : "Unidad"
      }\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    setCart([]);
  };

  return (
    <div className={cartStyles.mainContainer}>
      {/* container */}
      <div className={cartStyles.container}>
        {/* card */}
        <div className={cartStyles.cardWithProducts}>
          {/* title */}
          <div className={cartStyles.title}>
            <Paragraph variant="lg" weight="semi-bold">
              Mi carrito de compra
            </Paragraph>
          </div>

          {/* table */}
          <div className={cartStyles.tableWrapper}>
            <table className={cartStyles.table}>
              <thead className={cartStyles.tableHead}>
                <tr>
                  <th className={cartStyles.cellHeader}>Productos</th>
                  <th className={cartStyles.cellHeader}>Precio</th>
                  <th className={cartStyles.cellHeaderAmount}>
                    Cantidad de producto
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, i) => {
                  return (
                    <tr key={product.name}>
                      <td className={cartStyles.cellProduct(i)}>
                        <Badges
                          icon={true}
                          variant={
                            product.stock === "Disponible" ? "success" : "error"
                          }
                          classname={cartStyles.badgeProduct}
                        >
                          {product.stock}
                        </Badges>{" "}
                        <div className={cartStyles.imgProduct(product.img)} />
                        <Paragraph variant="sm" weight="semi-bold">
                          {product.name}
                        </Paragraph>
                      </td>
                      <td className={cartStyles.cellPrice(i)}>
                        <Paragraph
                          variant="sm"
                          weight="semi-bold"
                          classname={cartStyles.price}
                        >
                          C${product.price}
                        </Paragraph>
                      </td>
                      <td className={cartStyles.cellQuantity(i)}>
                        <div>
                          {/* Make quantity setter a component */}
                          <div className={cartStyles.quantityContainer}>
                            <button
                              onClick={() => handleDecrement(product.name)}
                            >
                              <img
                                src="/images/minusVector.svg"
                                alt="Signo de resta"
                              />
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
                            <button
                              onClick={() => handleIncrement(product.name)}
                            >
                              <img
                                src="/images/plusVector.svg"
                                alt="Signo de suma"
                              />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* calcs */}
          <div></div>

          {/* buttons */}
          <div></div>
        </div>
      </div>
    </div>
  );
};
