import "./style.css";

import { useState } from "react";
import { SearchBar } from "./search-bar";
import { ProductCard } from "./product-card";

export const ProductList = ({
  isDebouncing,
  query,
  results,
  setQuery,
}: ProductListProps) => {
  const [search, setSearch] = useState("");

  const filteredResults = results.filter(
    (item: any) =>
      search.toLowerCase() === "" ||
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <SearchBar
        isDebouncing={isDebouncing}
        query={query}
        setQuery={setQuery}
      />

      {filteredResults.length === 0 ? (
        <div className="not-result-style">Sin coincidencias 😵</div>
      ) : (
        <>
          <div className="result-grid-style">
            {filteredResults.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  image={product.image}
                  name={product.name}
                  price={+product.price}
                  tag={product.tag}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
