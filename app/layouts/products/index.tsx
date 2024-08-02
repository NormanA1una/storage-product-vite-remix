import {
  Await,
  useLocation,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "~/hooks/useDebounce";
import { FallBackIndex } from "../fallback";
import { H1 } from "~/components/typography/h1";
import { CategoriesButtons } from "../categories-buttons";
import { ProductList } from "../products-list";
import { PaginationProducts } from "../products-list/pagination";

type ProductsProps = {
  dataLoader: PostgrestSingleResponse<any[]>;
  queryPage: string;
  q: string;
};

const ITEM_PER_PAGE = 19;

export const Products = ({ dataLoader, queryPage, q }: ProductsProps) => {
  const [category, setCategory] = useState("");
  let [page, setPage] = useState(queryPage);
  const [_searchParams, setSearchParams] = useSearchParams();

  let [query, setQuery] = useState(q);
  let [debouncedQuery, isDeboucing] = useDebounce(query, 1000);

  let location = useLocation();
  let submit = useSubmit();

  useEffect(() => {
    setPage(queryPage);
    let searchParams = new URLSearchParams(location.search);

    if (debouncedQuery) {
      searchParams.set("q", debouncedQuery);
    } else {
      searchParams.delete("q");
    }
    submit(searchParams);
  }, [debouncedQuery, queryPage]);

  return (
    <div className="py-20 px-2 bg-[#EEE7D9] dark:bg-[#1E1D2B]">
      {/* Title */}
      <div className="text-center mb-10">
        <H1>Catálogo de productos</H1>
      </div>

      {/* Categories */}
      <CategoriesButtons
        categoryP={category}
        currentPage={+page}
        setCategory={setCategory}
        setSearchParams={setSearchParams}
      />

      <Suspense fallback={<FallBackIndex />}>
        <Await resolve={dataLoader}>
          {(dataLoader) => {
            const { data } = dataLoader;

            return (
              <>
                <ProductList
                  isDebouncing={isDeboucing}
                  query={query}
                  setQuery={setQuery}
                  results={data as Product[]}
                />

                <PaginationProducts
                  currentPage={+page}
                  dataLenght={data?.length as number}
                  itemPage={ITEM_PER_PAGE}
                  setCategory={setCategory}
                  setQuery={setQuery}
                />
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
