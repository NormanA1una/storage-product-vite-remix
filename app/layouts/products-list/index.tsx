import "./style.css";

import { ProductCard } from "~/components/product-card";

export const ProductList = ({ results }: ProductListProps) => {
  return (
    <div className="product-list-container">
      {results.length === 0 ? (
        <div className="not-result-style">Sin coincidencias 😵</div>
      ) : (
        <>
          <div className="result-grid-style">
            {results.map((product, i) => {
              return (
                <ProductCard
                  key={product.id}
                  imgAlt={product.name}
                  product={product.name}
                  imgSrc={product.image}
                  normalPrice={product.price}
                  discountPrice={product.price}
                  stock={product.tag}
                  promo={false}
                  star={false}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
