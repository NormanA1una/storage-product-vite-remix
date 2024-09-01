import {
  Await,
  useLocation,
  useNavigate,
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
import { Button } from "~/components/button";
import { useCart } from "~/context/cart-context";

const ITEM_PER_PAGE = 19;

export const Products = ({ dataLoader, queryPage, q }: ProductsProps) => {
  const [category, setCategory] = useState("");
  let [page, setPage] = useState(queryPage);
  const [_searchParams, setSearchParams] = useSearchParams();

  let [query, setQuery] = useState(q || "");
  let [debouncedQuery, isDeboucing] = useDebounce(query, 1000);

  let location = useLocation();
  let submit = useSubmit();
  const navigate = useNavigate();
  const { cart } = useCart();

  const productsStyles = {
    mainContainer: css({
      backgroundColor: "#FFFFFF",
    }),

    container: css({
      padding: "32px 24px 100px 24px",
    }),

    containerWithCategories: css({
      display: "flex",
      justifyContent: "center",
      maxWidth: "1335px",
      margin: "0px auto",

      "@media(min-width: 1024px)": {
        justifyContent: "space-around",
        gap: "32px",
      },

      "@media(min-width: 1720px)": {
        maxWidth: "1655px",
      },
    }),

    mobileFiltersDisplay: css({
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "35px",
    }),

    searchDisplay: css({
      display: "flex",
      alignItems: "end",
      justifyContent: "space-between",
    }),

    buttonContainerDisplay: css({
      display: "none",
      position: "relative",

      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    buttonContaineMobile: css({
      position: "relative",

      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),

    badgeCart: css({
      backgroundColor: "#E13636",
      border: "2px solid #FFFFFF",
      padding: "2px 6px",
      borderRadius: "9999px",
      position: "absolute",
      color: "#FFFFFF",
      fontSize: "10px",
      lineHeight: "18px",
      textAlign: "center",
      fontWeight: 600,
      right: -14,
      top: -12,
      pointerEvents: "none",
    }),

    buttonCart: css({
      display: "flex",
      alignItems: "center",
      gap: "4px",
    }),

    buttonCartMobile: css({
      display: "flex",
      alignItems: "center",
      gap: "4px",
      width: "100%",
      justifyContent: "center",
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
        <div className={productsStyles.containerWithCategories}>
          {/* categories */}
          <div>
            <CategoriesButtons
              categoryP={category}
              currentPage={+page}
              setCategory={setCategory}
              setSearchParams={setSearchParams}
            />
          </div>

          {/* filter + catalog */}
          <div className="w-full">
            <div className={productsStyles.mobileFiltersDisplay}>
              <div className={productsStyles.searchDisplay}>
                <SearchBar query={query} setQuery={setQuery} />
                <div className={productsStyles.buttonContainerDisplay}>
                  {cart.length > 0 && (
                    <div className={productsStyles.badgeCart}>
                      {cart.length <= 9 && 0}
                      {cart.length}
                    </div>
                  )}

                  <Button
                    className={productsStyles.buttonCart}
                    variant="primary"
                    size="lg"
                    onClick={() => navigate({ pathname: "/cart" })}
                  >
                    Ver mi carrito{" "}
                    <img
                      src="/images/shoppingCartVector.svg"
                      alt="Carrito de comprar a la par de la barra de busqueda"
                    />
                  </Button>
                </div>
              </div>

              <CategoriesMobile
                currentPage={+page}
                setCategory={setCategory}
                setSearchParams={setSearchParams}
              />

              <div className={productsStyles.buttonContaineMobile}>
                {cart.length > 0 && (
                  <div className={productsStyles.badgeCart}>
                    {cart.length <= 9 && 0}
                    {cart.length}
                  </div>
                )}

                <Button
                  className={productsStyles.buttonCartMobile}
                  variant="primary"
                  size="lg"
                  onClick={() => navigate({ pathname: "/cart" })}
                >
                  Ver mi carrito{" "}
                  <img
                    src="/images/shoppingCartVector.svg"
                    alt="Carrito de comprar a la par de la barra de busqueda"
                  />
                </Button>
              </div>
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
                        totalPages={dataLoader.count / 19}
                      />
                    </>
                  );
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
