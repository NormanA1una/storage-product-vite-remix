import { css } from "@emotion/css";

import { ProductCard } from "~/components/product-card";
import { H1 } from "~/components/typography/h1";

export const ProductList = ({ results }: ProductListProps) => {
  const productListStyles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginBottom: "40px",

      "@media(min-width: 1024px)": {
        padding: "0px 0px 32px 32px",
      },
    }),

    noResultStyle: css({
      height: "auto",
      width: "100%",
      padding: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      lineHeight: "28px",
      borderRadius: "8px",
    }),

    resultsGrid: css({
      display: "grid",
      justifyContent: "center",
      gap: "16px",
      width: "100%",
      justifyItems: "center",

      "@media(min-width: 640px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
      "@media(min-width: 768px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
      "@media(min-width: 1024px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
      "@media(min-width: 1280px)": {
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      },
      "@media(min-width: 1720px)": {
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      },
    }),
  };
  return (
    <div className={productListStyles.container}>
      {results.length === 0 ? (
        <div className={productListStyles.noResultStyle}>
          {/* img */}
          <div className={css({ width: "fit-content" })}>
            <img
              src="/images/titoNoFound.svg"
              alt="Mascota de la Licorería Cocibolca sorprendido"
              height={100}
              width={100}
            />
          </div>

          {/* title */}
          <div>
            <H1
              variant="4xl"
              weight="bold"
              classname={css({ textAlign: "center" })}
            >
              ¡No hay coincidencias con tu busqueda!
            </H1>
          </div>
        </div>
      ) : (
        <>
          <div className={productListStyles.resultsGrid}>
            {results.map((product, i) => {
              return (
                <ProductCard
                  key={product.id}
                  imgAlt={product.image_description}
                  product={product.name}
                  imgSrc={product.image}
                  normalPrice={product.price}
                  discountPrice={product.price_discount.toString()}
                  stock={product.tag}
                  promo={product.price_discount > 1}
                  star={product.start_product}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
