import { useState } from "react";
import { SearchBar } from "./search-bar";
import { ProductCard } from "./product-card";

type ProductListProps = {
  query: string;
  results: Product[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isDebouncing: boolean;
};

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
    <div className="flex flex-col items-center w-full mb-10">
      <SearchBar
        isDebouncing={isDebouncing}
        query={query}
        setQuery={setQuery}
      />

      {filteredResults.length === 0 ? (
        <div className="h-16 w-full p-2 flex items-center justify-center text-xl rounded-lg">
          Sin coincidencias 😵
        </div>
      ) : (
        <>
          <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
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
