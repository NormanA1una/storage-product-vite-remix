import { css } from "@emotion/css";
import { Button } from "~/components/button";
import { ProductCard } from "~/components/product-card";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

const STAR_PRODUCTS = [
  {
    imgSrc: "/images/ron5anios.webp",
    imgAlt: "Ron Flor de Caña 5 años",
    star: true,
    promo: true,
    stock: "disponible",
    product: "Flor de Caña Añejo Clásico 5 años Botella - 1L",
    normalPrice: "395",
    discountPrice: "299",
  },
  {
    imgSrc: "/images/mombachitoLicor.webp",
    imgAlt: "Licor Mombachito botella de plástico",
    star: true,
    promo: true,
    stock: "disponible",
    product: "Licor Mombachito, agua ardiente tradicional.",
    normalPrice: "299",
    discountPrice: "152",
  },
  {
    imgSrc: "/images/toniaDesechable.webp",
    imgAlt: "6 pack de cerveza Toña desechable en un empaque de la misma marca",
    star: true,
    promo: true,
    stock: "disponible",
    product: "6 Pack De Cerveza Tona De Botella- 350ml",
    normalPrice: "560",
    discountPrice: "299",
  },
  {
    imgSrc: "/images/cocaRet.webp",
    imgAlt: "Coca Cola botella retornable de 2L",
    star: true,
    promo: false,
    stock: "disponible",
    product: "Coca Cola - Botella 2 Litros Retornable",
    normalPrice: "45",
    discountPrice: "40",
  },
];

export const StarProducts = () => {
  const starProductsStyles = {
    mainContainer: css({ backgroundColor: "#FFFFFF" }),

    container: css({
      padding: "50px 24px",
      "@media(min-width: 1024px)": {
        padding: "196px 96px",
      },

      "@media(min-width: 1280px)": {
        padding: "196px 0",
      },

      "@media(min-width: 1440px)": {
        padding: "196px 56px",
      },
    }),

    contentText: css({
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto 52px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
    }),

    containerTitles: css({
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }),

    contentTitle: css({ color: "#2C2C2C" }),

    contentSubTitle: css({ color: "#706F6F" }),

    buttonDisplay: css({
      width: "100%",

      "@media(min-width: 1024px)": {
        width: "fit-content",
      },
    }),

    starProductsGrid: css({
      display: "grid",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      width: "fit-content",
      gap: "24px",
      margin: "0 auto",

      "@media(min-width: 768px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "48px",
      },

      "@media(min-width: 1024px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "48px",
      },

      "@media(min-width: 1280px)": {
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "24px",
      },

      "@media(min-width: 1440px)": {
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      },
    }),
  };
  return (
    <div className={starProductsStyles.mainContainer}>
      <div className={starProductsStyles.container}>
        <div className={starProductsStyles.contentText}>
          <div>
            <img src="/images/lataSvg.svg" alt="Dibujo de una lata golpeada" />
          </div>

          <div className={starProductsStyles.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={starProductsStyles.contentTitle}
              >
                Nuestros productos estrellas
              </H1>
            </div>

            <div>
              <H2 variant="md" classname={starProductsStyles.contentSubTitle}>
                Descubrí lo mejor de Licorería Cocibolca con nuestra selección
                de productos estrellas, favoritos de nuestros clientes por su
                calidad y sabor inigualable.
              </H2>
            </div>

            <div>
              <Button
                variant="primary"
                size="lg"
                className={starProductsStyles.buttonDisplay}
              >
                Ver catálogo
              </Button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={starProductsStyles.starProductsGrid}>
          {STAR_PRODUCTS.map((product, i) => {
            return (
              <ProductCard
                key={i}
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
                promo={product.promo}
                star={product.star}
                stock={product.stock}
                product={product.product}
                normalPrice={product.normalPrice}
                discountPrice={product.discountPrice}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
