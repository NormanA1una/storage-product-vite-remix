import { css } from "@emotion/css";

import { ProductCard } from "~/components/product-card";

export const ProductList = ({ results }: ProductListProps) => {
  const productListStyles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginBottom: "40px",
    }),

    noResultStyle: css({
      height: "64px",
      width: "100%",
      padding: "8px",
      display: "flex",
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
          Sin coincidencias 😵
        </div>
      ) : (
        <>
          <div className={productListStyles.resultsGrid}>
            {results.map((product, i) => {
              return (
                <ProductCard
                  key={product.id}
                  imgAlt={product.name}
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
