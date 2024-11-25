import { css } from "@emotion/css";
import { Badges } from "../badges";
import { Paragraph } from "../typography/paragraph";
import { useState } from "react";
import { Button } from "../button";
import { useToast } from "~/context/toast-context";
import { Icons } from "../icons";
import { useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import { useCartActions } from "~/hooks/useCartActions";

export const ProductCard = ({
  promo,
  discountPrice,
  imgAlt,
  imgSrc,
  normalPrice,
  product,
  star,
  stock,
}: StarProduct) => {
  const [quantity, setQuantity] = useState(0);
  const { openToast, setToastContent, setAutoCloseTime, closeToast } =
    useToast();
  const { addItem } = useCartActions();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem({
        img: imgSrc,
        stock: stock,
        name: product,
        price: +normalPrice,
        amount: quantity,
        img_description: imgAlt,
      });
      setQuantity(0);
      handleShowToast();
    }
  };

  const handleShowToast = () => {
    setToastContent(
      <>
        <div>
          <img
            src="/images/cartAnimate.gif"
            alt="Carrito de compras en el modal del catálogo"
            className={css({ height: "40px", width: "40px" })}
            loading="lazy"
          />
        </div>

        <div>
          <Paragraph
            variant="sm"
            weight="semi-bold"
            classname={css({ color: "#344054", marginBottom: "4px" })}
          >
            Producto agregado éxitosamente
          </Paragraph>

          <Paragraph
            variant="sm"
            weight="regular"
            classname={css({ color: "#475467", marginBottom: "12px" })}
          >
            Consulta tu carrito de compra para ver los detalles y seguir con tu
            proceso de compra!
          </Paragraph>

          <Paragraph
            variant="sm"
            weight="regular"
            classname={css({ color: "#475467" })}
          >
            ¡Gracias por preferirnos!
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
              variant="secondary"
              size="sm"
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
              onClick={closeToast}
            >
              <Paragraph variant="sm" weight="semi-bold">
                Seguir viendo
              </Paragraph>
              <Icons.shoppingCart stroke="#2C2C2C" />
            </Button>
          </div>

          <div>
            <Button
              variant="primary"
              size="sm"
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
              onClick={() => navigate({ pathname: "/cart" })}
            >
              <Paragraph variant="sm" weight="semi-bold">
                Ir al carrito
              </Paragraph>
              <Icons.shoppingCart />
            </Button>
          </div>
        </div>
      </>
    );
    setAutoCloseTime(3000);
    openToast();
  };

  const productCardStyles = {
    cardBody: css({
      backgroundColor: "#FFFFFF",
      borderRadius: "24px",
      padding: "20px",
      boxShadow: "0px 4px 32px 0px #2C2C2C0F",
      maxWidth: "312px",
      width: "100%",
      minHeight: "496px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      position: "relative",
    }),

    promoDisplay: css({
      position: "absolute",
      right: 11,
      top: 11,
      zIndex: 2,
    }),

    titoDisplay: css({
      position: "absolute",
      right: 0,
      bottom: -32,
      zIndex: 3,
      overflow: "auto",
    }),

    imgTitoProduct: css({ position: "relative" }),

    imgContainer: css({
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: "1px solid #E2E2E2",
      borderRadius: "16px",
      width: "272px",
      height: "216px",

      "@media(max-width: 374px)": {
        width: "100%",
      },
    }),

    badgeCard: css({
      width: "fit-content",
    }),

    contentDisplay: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      justifyContent: "space-between",
      height: "100%",
    }),

    infoDisplay: css({
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }),

    priceDisplay: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
    }),

    discountPrice: css({
      color: "#A9A9A9",
      textDecorationLine: "line-through",
    }),

    normalPrice: css({
      color: "#0E8499",
    }),

    quantityControl: css({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "space-between",
    }),

    button: css({
      backgroundColor: "#0E8499",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "4px",
      padding: "8px",
      cursor: "pointer",
      fontSize: "16px",
      lineHeight: "24px",
    }),

    input: css({
      width: "50px",
      textAlign: "center",
      fontSize: "16px",
      border: "1px solid #E2E2E2",
      borderRadius: "4px",
    }),
  };

  return (
    <div className={productCardStyles.cardBody}>
      {promo && (
        <div className={productCardStyles.promoDisplay}>
          <img
            src="/images/promoImg.svg"
            alt="Imagen con la palabra PROMO referenciando un grito"
            loading="lazy"
          />
        </div>
      )}

      <div className={productCardStyles.imgTitoProduct}>
        {star && (
          <div className={productCardStyles.titoDisplay}>
            <img
              src="/images/titoAprueba.svg"
              alt="Mascota de la Licorería Cocibolca sosteniendo un trago y aprobando el producto"
              loading="lazy"
            />
          </div>
        )}

        <div className={productCardStyles.imgContainer} />
      </div>

      <div className={productCardStyles.contentDisplay}>
        <div className={productCardStyles.infoDisplay}>
          <Badges
            variant={stock === "Disponible" ? "success" : "error"}
            icon={true}
            classname={productCardStyles.badgeCard}
          >
            {stock.charAt(0).toUpperCase() + stock.slice(1)}
          </Badges>

          <div>
            <Paragraph variant="lg" weight="semi-bold">
              {product}
            </Paragraph>
          </div>

          <div className={productCardStyles.priceDisplay}>
            {promo ? (
              <>
                <Paragraph
                  variant="md"
                  weight="regular"
                  classname={productCardStyles.discountPrice}
                >
                  C${normalPrice}
                </Paragraph>

                <Paragraph
                  variant="xl"
                  weight="semi-bold"
                  classname={productCardStyles.normalPrice}
                >
                  C${discountPrice}
                </Paragraph>
              </>
            ) : (
              <Paragraph
                variant="xl"
                weight="semi-bold"
                classname={productCardStyles.normalPrice}
              >
                C${normalPrice}
              </Paragraph>
            )}
          </div>
        </div>

        {/* Quantity Control Buttons */}
        <div className={productCardStyles.quantityControl}>
          <div
            className={css({
              maxWidth: "109px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              border: "1px solid #C5C5C5",
              padding: "7px 16px",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            })}
          >
            <button onClick={handleDecrement}>
              <img
                src="/images/minusVector.svg"
                alt="Signo de resta"
                loading="lazy"
              />
            </button>
            <div>
              <Paragraph
                weight="regular"
                variant="md"
                classname={css({ color: "#706F6F" })}
              >
                {quantity}
              </Paragraph>
            </div>
            <button onClick={handleIncrement}>
              <img
                src="/images/plusVector.svg"
                alt="Signo de suma"
                loading="lazy"
              />
            </button>
          </div>

          <div>
            <Button
              disabled={quantity < 1}
              variant="primary"
              size="sm"
              type="button"
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "8px",
              })}
              onClick={() => {
                handleAddToCart();
              }}
            >
              Agregar
              <img
                src="/images/shoppingCartVector.svg"
                alt="Imagen de un carrito de comprar en la tarjeta de producto"
                loading="lazy"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
