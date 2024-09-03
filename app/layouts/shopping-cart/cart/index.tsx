import { css } from "@emotion/css";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Badges } from "~/components/badges";
import { Button } from "~/components/button";
import { Checkbox } from "~/components/inputs/checkbox";
import { H1 } from "~/components/typography/h1";
import { Paragraph } from "~/components/typography/paragraph";
import { useCart } from "~/context/cart-context";

type CartProps = {
  phoneNumber: string;
};

export const Cart = ({ phoneNumber }: CartProps) => {
  const { cart, setCart } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [pickupChecked, setPickupChecked] = useState(false);
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const navigate = useNavigate();

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return "Buenos días";

    if (currentHour >= 12 && currentHour < 18) return "Buenas tardes";

    return "Buenas noches";
  };

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (acc, product) => acc + product.amount * product.price,
      0
    );
    setSubtotal(newSubtotal);

    const pickUp = pickupChecked ? 15 : deliveryChecked ? 50 : 0;
    const newTotal = pickUp + newSubtotal;
    setTotal(newTotal);
  }, [cart, pickupChecked, deliveryChecked]);

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
      prevCart
        .map((product) =>
          product.name === productName && product.amount > 0
            ? { ...product, amount: product.amount - 1 }
            : product
        )
        .filter((product) => product.amount > 0)
    );
  };

  const handleSendWhatsapp = () => {
    setPurchase(true);
    let message = `${getGreeting()}, aquí está la lista de productos que me interesan:\n\n`;

    cart.forEach((producto) => {
      message += `🌋 ${producto.name} - ${producto.amount} ${
        producto.amount > 1 ? "Unidades" : "Unidad"
      }\n\n`;
    });

    message += `🛵 Tipo de pedido: ${
      pickupChecked ? "Pick-up" : "Delivery"
    }\n\n 💵 Total a pagar: ${total}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    navigate({ hash: "#shopping-cart" });
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setPurchase(false);
      setCart([]);
      setSubtotal(0);
      setTotal(0);
      setPickupChecked(false);
      setDeliveryChecked(false);
    }, 5000);
  };

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

    cardPurchase: css({
      backgroundColor: "#FFFFFF",
      border: "1px solid #E2E2E2",
      borderRadius: "20px",
      maxWidth: "876px",
      margin: "0px auto",
      position: "relative",
    }),

    card: css({
      backgroundColor: "#FFFFFF",
      border: "1px solid #E2E2E2",
      borderRadius: "20px",
      maxWidth: "876px",
      margin: "0px auto",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "center",
    }),

    cardTito: css({
      backgroundColor: "#FFFFFF",
      borderRadius: "20px",
      maxWidth: "700px",
      margin: "0px auto",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      alignItems: "center",
    }),

    title: css({ padding: "20px 24px" }),

    tableWrapper: css({
      overflowX: "auto",
      overflowY: "auto",
      width: "100%",
      maxHeight: cart.length <= 3 ? "374px" : "350px",

      "&::-webkit-scrollbar": {
        height: "10px",
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#2C2C2C",
        borderRadius: "2px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#0e8499",
        borderRadius: "2px",
      },
    }),

    table: css({
      width: "100%",
      color: "#706F6F",
      marginBottom: "24px",
      minWidth: "600px",
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

    subtotalContainer: css({
      padding: "0px 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    }),

    subtotalDisplay: css({
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      borderTop: "1px solid #E2E2E2",
      padding: "12px 0px 0px 0px",
    }),

    subtotalLabel: css({
      color: "#2C2C2C",
    }),

    subtotal: css({ color: "#706F6F" }),

    buttonsSection: css({
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "8px",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
        alignItems: "center",
        gap: "0px",
      },
    }),

    buttonsContainer: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexDirection: "column",
      width: "100%",

      "@media(min-width: 1024px)": {
        width: "fit-content",
        flexDirection: "row",
      },
    }),

    buttonOption: (checked: boolean) =>
      css({
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        border: checked ? "1px solid #0E8499" : "1px solid #C5C5C5",
        cursor: "pointer",
        width: "100%",
        justifyContent: "space-around",

        "@media(min-width: 1024px)": {
          width: "fit-content",
          justifyContent: "space-between",
        },
      }),

    pickUpContainer: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),

    totalContainer: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),

    totalText: css({
      color: "#0E8499",
    }),

    actionButtons: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px",
      borderTop: "1px solid #E4E7E9",
      flexDirection: "column",
      gap: "12px",

      "@media(min-width: 1024px)": {
        flexDirection: "row",
      },
    }),

    actionButton: css({
      width: "100%",

      "@media(min-width: 1024px)": {
        width: "fit-content",
      },
    }),
  };

  return (
    <div id="shopping-cart" className={cartStyles.mainContainer}>
      {/* container */}
      <div className={cartStyles.container}>
        {/* card */}
        {cart.length > 0 ? (
          <>
            {purchase ? (
              <div className={cartStyles.cardPurchase}>
                {/* pattern */}
                <div
                  className={css({
                    position: "absolute",
                    backgroundImage: "url(/images/patronGrueso.svg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                    top: 440,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    pointerEvents: "none",

                    "@media(min-width: 1024px)": {
                      top: 465,
                    },
                  })}
                />
                {/* container */}
                <div
                  className={css({
                    padding: "100px 0px 192px 0px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "24px",
                    textAlign: "center",

                    "@media(min-width: 1024px)": {
                      padding: "140px 0px 192px 0px",
                    },
                  })}
                >
                  {/* img */}
                  <div>
                    <img
                      src="/images/titoAlegre.svg"
                      alt="Mascota de la Licorería Cocibolca alegre por la compra"
                    />
                  </div>

                  {/* title */}
                  <div>
                    <H1
                      variant="4xl"
                      weight="bold"
                      classname={css({ color: "#2C2C2C" })}
                    >
                      ¡Muchas gracias por preferirnos!{" "}
                    </H1>
                  </div>

                  {/* text */}
                  <div>
                    <Paragraph
                      variant="md"
                      weight="regular"
                      classname={css({ color: "#706F6F" })}
                    >
                      En unos momentos serás re-dirigido a nuestro
                      <br />
                      WhatsApp para continuar tu compra
                    </Paragraph>
                  </div>
                </div>
              </div>
            ) : (
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
                                  product.stock === "Disponible"
                                    ? "success"
                                    : "error"
                                }
                                classname={cartStyles.badgeProduct}
                              >
                                {product.stock}
                              </Badges>{" "}
                              <div
                                className={cartStyles.imgProduct(product.img)}
                              />
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
                                    onClick={() =>
                                      handleDecrement(product.name)
                                    }
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
                                    onClick={() =>
                                      handleIncrement(product.name)
                                    }
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
                <div className={cartStyles.subtotalContainer}>
                  {/* subtotal */}
                  <div className={cartStyles.subtotalDisplay}>
                    <Paragraph
                      variant="sm"
                      weight="regular"
                      classname={cartStyles.subtotalLabel}
                    >
                      Sub-total
                    </Paragraph>
                    <Paragraph
                      variant="sm"
                      weight="semi-bold"
                      classname={cartStyles.subtotal}
                    >
                      C${subtotal}
                    </Paragraph>
                  </div>

                  {/* buttons */}
                  <div className={cartStyles.buttonsSection}>
                    <Paragraph
                      variant="sm"
                      weight="regular"
                      classname={cartStyles.subtotalLabel}
                    >
                      ¿Cómo te gustaría realizar tu compra?
                    </Paragraph>

                    <div className={cartStyles.buttonsContainer}>
                      <div
                        className={cartStyles.buttonOption(pickupChecked)}
                        onClick={() => {
                          setPickupChecked(!pickupChecked);
                          setDeliveryChecked(false);
                        }}
                      >
                        Recoger en tienda <Checkbox checked={pickupChecked} />
                      </div>
                      <div
                        className={cartStyles.buttonOption(deliveryChecked)}
                        onClick={() => {
                          setDeliveryChecked(!deliveryChecked);
                          setPickupChecked(false);
                        }}
                      >
                        Delivery en Granada{" "}
                        <Checkbox checked={deliveryChecked} />
                      </div>
                    </div>
                  </div>

                  {/* tarifa delivery */}
                  <div className={cartStyles.pickUpContainer}>
                    <Paragraph variant="sm" weight="regular">
                      Tarifa por {deliveryChecked ? "delivery" : "pick-Up"}
                    </Paragraph>

                    <Paragraph
                      weight="semi-bold"
                      variant="sm"
                      classname={cartStyles.subtotal}
                    >
                      {pickupChecked
                        ? "C$15"
                        : deliveryChecked
                        ? "C$50"
                        : "C$0"}
                    </Paragraph>
                  </div>

                  {/* total a pagar */}
                  <div className={cartStyles.totalContainer}>
                    <Paragraph weight="semi-bold" variant="sm">
                      Total a pagar
                    </Paragraph>

                    <Paragraph
                      variant="xl"
                      weight="semi-bold"
                      classname={cartStyles.totalText}
                    >
                      C${total}
                    </Paragraph>
                  </div>
                </div>

                {/* buttons */}
                <div className={cartStyles.actionButtons}>
                  <div className={cartStyles.actionButton}>
                    <Button
                      variant="secondary"
                      size="xl"
                      onClick={() => navigate({ pathname: "/catalog" })}
                      className={cartStyles.actionButton}
                    >
                      Seguir viendo el catálogo
                    </Button>
                  </div>
                  <div className={cartStyles.actionButton}>
                    <Button
                      variant="primary"
                      size="xl"
                      onClick={handleSendWhatsapp}
                      className={cartStyles.actionButton}
                    >
                      Realizar pedido
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={cartStyles.cardTito}>
            {/* img */}
            <div className={css({ width: "fit-content" })}>
              <img
                src="/images/titoSorpresa.svg"
                alt="Mascota de la Licorería Cocibolca sorprendido"
              />
            </div>

            {/* title */}
            <div>
              <H1
                variant="4xl"
                weight="bold"
                classname={css({ textAlign: "center" })}
              >
                ¡Parece que aún no has agregado productos a tu carrito!
              </H1>
            </div>

            {/* text */}
            <div>
              <Paragraph
                variant="md"
                weight="regular"
                classname={css({ textAlign: "center", color: "#706F6F" })}
              >
                ¡Agrega tus productos favoritos y procede con tu compra!
              </Paragraph>
            </div>

            {/* button */}
            <div>
              <Button
                variant="primary"
                size="2xl"
                onClick={() => navigate({ pathname: "/catalog" })}
              >
                Seguir viendo el catálogo
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
