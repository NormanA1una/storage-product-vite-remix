import { css } from "@emotion/css";
import { ProductCard } from "~/components/product-card";
import { H1 } from "~/components/typography/h1";

type SuggestedProps = {
  products: Product[];
};

export const Suggested = ({ products }: SuggestedProps) => {
  const suggestedStyles = {
    mainContainer: css({ backgroundColor: "#F8EED8" }),

    container: css({
      padding: "50px 24px",
      "@media(min-width: 1024px)": {
        padding: "150px 96px",
      },

      "@media(min-width: 1280px)": {
        padding: "150px 0",
      },

      "@media(min-width: 1440px)": {
        padding: "150px 56px",
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
    <div className={suggestedStyles.mainContainer}>
      <div className={suggestedStyles.container}>
        <div className={suggestedStyles.contentText}>
          <div>
            <img src="/images/lataSvg.svg" alt="Dibujo de una lata golpeada" />
          </div>

          <div className={suggestedStyles.containerTitles}>
            <div>
              <H1
                variant="5xl"
                weight="bold"
                classname={suggestedStyles.contentTitle}
              >
                También podría interesarte
              </H1>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={suggestedStyles.starProductsGrid}>
          {products.map((product, i) => {
            return (
              <ProductCard
                key={i}
                imgSrc={product.image}
                imgAlt={product.image_description}
                promo={product.price_discount > 0}
                star={product.start_product}
                stock={product.tag}
                product={product.name}
                normalPrice={product.price}
                discountPrice={product.price_discount.toString()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
