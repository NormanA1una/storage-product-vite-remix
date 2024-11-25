import { css } from "@emotion/css";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Badges } from "~/components/badges";
import { Button } from "~/components/button";
import { ControlQuantity } from "~/components/control-quantity";
import { Checkbox } from "~/components/inputs/checkbox";
import { H1 } from "~/components/typography/h1";
import { Paragraph } from "~/components/typography/paragraph";
import { useToast } from "~/context/toast-context";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";
import { openWhatsapp } from "~/utils/contact-whatsapp";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "~/store/store";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "~/store/features/cartSlice";

type CartProps = {
  phoneNumber: string;
};

export const Cart = ({ phoneNumber }: CartProps) => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const {
    openToast,
    setToastContent,
    closeToast,
    disableIcon,
    setAutoCloseTime,
  } = useToast();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [pickupChecked, setPickupChecked] = useState(true);
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [mobilePurchase, setMobilePurchase] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleIsDesktop = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );
    };
    setIsDesktop(handleIsDesktop());
  }, []);

  /* const fetcher = useRemixFetcher({
    onSuccess: () => {
      if (isDesktop) {
        setPurchase(true);
        navigate({ hash: "#shopping-cart" });
        setTimeout(() => {
          openWhatsapp({
            cart,
            getGreeting,
            pickupChecked,
            total,
            phoneNumber,
          });
          setPurchase(false);
          setCart([]);
          setSubtotal(0);
          setTotal(0);
          setPickupChecked(true);
          setDeliveryChecked(false);
        }, 3000);
      }
    },
    onError: () => {},
  }); */

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

    const pickUp = pickupChecked ? 15 : deliveryChecked ? 50 : 15;
    const newTotal = pickUp + newSubtotal;
    setTotal(newTotal);
  }, [cart, pickupChecked, deliveryChecked]);

  const handleIncrement = (productName: string) => {
    const product = cart.find((p) => p.name === productName);
    if (product) {
      dispatch(
        updateQuantity({
          name: productName,
          amount: product.amount + 1,
        })
      );
    }
  };

  const handleShowToast = (onConfirm: () => void) => {
    disableIcon();
    setAutoCloseTime(undefined);
    setToastContent(
      <>
        <div>
          <Paragraph
            variant="sm"
            weight="semi-bold"
            classname={css({ color: "#344054", marginBottom: "4px" })}
          >
            ¿Quieres eliminar este producto?
          </Paragraph>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <div>
            <Button
              variant="primary"
              size="sm"
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
              onClick={() => {
                closeToast();
                onConfirm();
              }}
            >
              <Paragraph variant="sm" weight="semi-bold">
                Confirmar
              </Paragraph>
            </Button>
          </div>

          <div>
            <Button
              variant="warning"
              size="sm"
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
              onClick={closeToast}
            >
              <Paragraph variant="sm" weight="semi-bold">
                Cancelar
              </Paragraph>
            </Button>
          </div>
        </div>
      </>
    );
    openToast();
  };

  const handleDecrement = (productName: string) => {
    const product = cart.find((p) => p.name === productName);
    if (product) {
      if (product.amount === 1) {
        handleShowToast(() => {
          dispatch(removeFromCart(productName));
        });
      } else {
        dispatch(
          updateQuantity({
            name: productName,
            amount: product.amount - 1,
          })
        );
      }
    }
  };

  const handlePickupChange = () => {
    setPickupChecked(true);
    setDeliveryChecked(false);
  };

  const handleDeliveryChange = () => {
    setDeliveryChecked(true);
    setPickupChecked(false);
  };

  const handleBackToCatalog = () => {
    navigate({ pathname: "/catalog" });
    setMobilePurchase(false);
    dispatch(clearCart());
    setSubtotal(0);
    setTotal(0);
    setPickupChecked(true);
    setDeliveryChecked(false);
  };

  const handleWhatsappDesktop = () => {
    setPurchase(true);
    navigate({ hash: "#shopping-cart" });
    setTimeout(() => {
      openWhatsapp({
        cart,
        getGreeting,
        pickupChecked,
        total,
        phoneNumber,
      });
      setPurchase(false);
      dispatch(clearCart());
      setSubtotal(0);
      setTotal(0);
      setPickupChecked(true);
      setDeliveryChecked(false);
    }, 3000);
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
      borderRadius: "20px",
      maxWidth: "876px",
      margin: "0px auto",
      position: "relative",
    }),

    containerPurchase: css({
      padding: "192px 0px 100px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      textAlign: "center",

      "@media(min-width: 1024px)": {
        padding: "192px 0px 140px 0px",
      },
    }),

    titlePurchase: css({ color: "#2C2C2C" }),

    textPurchase: css({ color: "#706F6F" }),

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

    title: css({
      padding: "20px 24px",
      backgroundColor: "#FEF6F2",
      borderRadius: "20px 20px 0px 0px",

      "@media(min-width: 768px)": {
        backgroundColor: "#FFFFFF",
      },
    }),

    tableWrapper: css({
      width: "100%",
      display: "none",

      "@media(min-width: 768px)": {
        display: "block",
      },
    }),

    tableScroll: css({
      overflowY: "auto",
      maxHeight: cart.length <= 3 ? "374px" : "350px",

      "&::-webkit-scrollbar": {
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
      borderCollapse: "separate",
      borderSpacing: 0,
    }),

    tableHead: css({
      position: "sticky",
      top: 0,
      backgroundColor: "#FEF6F2",
      zIndex: 1,
    }),

    cellHeader: css({
      textAlign: "left",
      padding: "12px 0px 12px 24px",
      fontWeight: 400,
      color: "#706F6F",
      borderTop: "1px solid #E2E2E2",
      borderBottom: "1px solid #E2E2E2",
    }),

    cellHeaderAmount: css({
      textAlign: "right",
      padding: "12px 24px 12px 0px",
      fontWeight: 400,
      color: "#706F6F",
      borderTop: "1px solid #E2E2E2",
      borderBottom: "1px solid #E2E2E2",
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

    cardMobileWrapper: css({
      overflowY: "auto",
      width: "100%",
      maxHeight: "376px",

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

      "@media(min-width: 768px)": {
        display: "none",
      },
    }),

    cartMobileContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      padding: "24px",
    }),

    imgProductMobile: (src: string): string => {
      return css({
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minWidth: "50px",
        height: "50px",
        border: "1px solid #C5C5C5",
        borderRadius: "12px",
      });
    },

    cartMobileCard: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
    }),

    cardImgMobile: css({
      display: "flex",
      alignItems: "center",
      gap: "6px",
    }),
  };

  return (
    <div id="shopping-cart" className={cartStyles.mainContainer}>
      {/* container */}
      <div className={cartStyles.container}>
        {/* card */}
        {cart.length > 0 ? (
          <>
            {purchase || mobilePurchase ? (
              <div className={cartStyles.cardPurchase}>
                {/* container */}
                <div className={cartStyles.containerPurchase}>
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
                      classname={cartStyles.titlePurchase}
                    >
                      ¡Muchas gracias por preferirnos!{" "}
                    </H1>
                  </div>

                  {/* text */}
                  <div>
                    <Paragraph
                      variant="md"
                      weight="regular"
                      classname={cartStyles.textPurchase}
                    >
                      En unos momentos serás re-dirigido a nuestro
                      <br />
                      WhatsApp para continuar tu compra
                    </Paragraph>
                  </div>

                  {/* Botón de volver al catálogo solo para móvil */}
                  {!isDesktop && mobilePurchase && (
                    <div>
                      <Button
                        variant="primary"
                        size="xl"
                        onClick={handleBackToCatalog}
                      >
                        Volver al catálogo
                      </Button>
                    </div>
                  )}
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
                  </table>
                  <div className={cartStyles.tableScroll}>
                    <table className={cartStyles.table}>
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
                                  <ControlQuantity
                                    handleDecrement={handleDecrement}
                                    handleIncrement={handleIncrement}
                                    product={product}
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={cartStyles.cardMobileWrapper}>
                  <div className={cartStyles.cartMobileContainer}>
                    {cart.map((product, i) => {
                      return (
                        <div
                          key={product.name}
                          className={cartStyles.cartMobileCard}
                        >
                          {/* img + name */}
                          <div className={cartStyles.cardImgMobile}>
                            <div
                              className={cartStyles.imgProductMobile(
                                product.img
                              )}
                            />
                            <div>
                              <Paragraph variant="sm" weight="semi-bold">
                                {product.name}
                              </Paragraph>
                            </div>
                          </div>

                          {/* amount + quantity controls */}
                          <div
                            className={css({
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              alignItems: "end",
                            })}
                          >
                            <div
                              className={css({
                                marginRight: "12px",
                              })}
                            >
                              <Paragraph variant="sm" weight="semi-bold">
                                C${product.amount * product.price}
                              </Paragraph>
                            </div>
                            <ControlQuantity
                              handleDecrement={handleDecrement}
                              handleIncrement={handleIncrement}
                              product={product}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
                        onClick={handlePickupChange}
                      >
                        Recoger en tienda{" "}
                        <Checkbox
                          checked={pickupChecked}
                          onChange={handlePickupChange}
                        />
                      </div>
                      <div
                        className={cartStyles.buttonOption(deliveryChecked)}
                        onClick={handleDeliveryChange}
                      >
                        Delivery en Granada{" "}
                        <Checkbox
                          checked={deliveryChecked}
                          onChange={handleDeliveryChange}
                        />
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
                        : "C$15"}
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

                  {/* <fetcher.Form
                    method="post"
                    className={cartStyles.actionButton}
                  >
                    <Button
                      variant="primary"
                      size="xl"
                      type="submit"
                      className={cartStyles.actionButton}
                    >
                      Realizar pedido
                    </Button>
                  </fetcher.Form> */}

                  <div className={cartStyles.actionButton}>
                    <Button
                      variant="primary"
                      size="xl"
                      type="submit"
                      className={cartStyles.actionButton}
                      onClick={() => {
                        if (!isDesktop) {
                          setMobilePurchase(true);
                          navigate({ hash: "#shopping-cart" });
                          openWhatsapp({
                            getGreeting,
                            cart,
                            pickupChecked,
                            total,
                            phoneNumber,
                          });
                        } else {
                          handleWhatsappDesktop();
                        }
                      }}
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
