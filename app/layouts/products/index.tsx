import {
  Await,
  useLocation,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "~/hooks/useDebounce";
import { FallBackIndex } from "../fallback";
import { CategoriesButtons } from "../categories-buttons";
import { ProductList } from "../products-list";
import { PaginationProducts } from "../products-list/pagination";
import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";
import { SearchBar } from "../products-list/search-bar";
import { CategoriesMobile } from "~/components/categories-mobile";

const ITEM_PER_PAGE = 19;

export const Products = ({ dataLoader, queryPage, q }: ProductsProps) => {
  const [category, setCategory] = useState("");
  let [page, setPage] = useState(queryPage);
  const [_searchParams, setSearchParams] = useSearchParams();

  let [query, setQuery] = useState(q || "");
  let [debouncedQuery, isDeboucing] = useDebounce(query, 1000);

  let location = useLocation();
  let submit = useSubmit();

  const productsStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
    }),

    container: css({
      padding: "32px 24px 100px 24px",
    }),

    mobileFiltersDisplay: css({
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "35px",
    }),
  };

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
    <div className={productsStyles.mainContainer}>
      <div className={productsStyles.container}>
        <div className={productsStyles.mobileFiltersDisplay}>
          <SearchBar
            // isDebouncing={isDeboucing}
            query={query}
            setQuery={setQuery}
          />

          <CategoriesMobile
            currentPage={+page}
            setCategory={setCategory}
            setSearchParams={setSearchParams}
          />

          {/* Categories */}
          {/* <CategoriesButtons
            categoryP={category}
            currentPage={+page}
            setCategory={setCategory}
            setSearchParams={setSearchParams}
          /> */}
        </div>
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
                    results={data}
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
    </div>
  );
};
