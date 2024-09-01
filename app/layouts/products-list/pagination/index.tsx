import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { Paragraph } from "~/components/typography/paragraph";
import { css } from "@emotion/css";

type PaginationProductsProps = {
  dataLenght: number;
  itemPage: number;
  currentPage: number;
  totalPages: number;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const PaginationProducts = ({
  currentPage,
  dataLenght,
  itemPage,
  totalPages,
  setCategory,
  setQuery,
}: PaginationProductsProps) => {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(currentPage);
  const totalPagesCeil = Math.ceil(totalPages);

  const paginationStyles = {
    container: css({
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      borderTop: "1px solid #E2E2E2",
      paddingTop: "16px",
    }),

    buttonDisplay: css({
      display: "flex",
      alignItems: "center",
      "@media(min-width: 1024px)": {
        gap: "8px",
      },
    }),

    paragraphDisplayPrev: css({
      display: "none",
      color: page <= 1 ? "#A9A9A9" : "",

      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    arrowPrev: css({
      opacity: page <= 1 ? 0.5 : 1,
    }),

    paragraphDisplayNext: css({
      display: "none",
      color: itemPage >= dataLenght ? "#A9A9A9" : "",

      "@media(min-width: 1024px)": {
        display: "block",
      },
    }),

    arrowNext: css({
      opacity: itemPage >= dataLenght ? 0.5 : 1,
    }),

    pageGuideMobile: css({
      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),

    paginationNumbers: css({
      display: "none",

      "@media(min-width: 1024px)": {
        display: "flex",
        alignItems: "center",
        gap: "4px",
      },
    }),

    pageNumberDots: css({
      cursor: "default",
      "&:hover": {
        backgroundColor: "transparent",
      },
    }),
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const paramHandler = (currentPageF: number) => {
    setSearchParams((prev) => {
      prev.set("page", `${currentPageF}`);
      return prev;
    });
  };

  const nextPageHandler = () => {
    setPage(page + 1);
    paramHandler(page + 1);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
    paramHandler(page - 1);
  };

  const getPageRange = () => {
    const range = [];
    const delta = 1;

    const left = Math.max(2, page - delta);
    const right = Math.min(totalPagesCeil - 1, page + delta);

    range.push(1);

    if (totalPagesCeil <= 1) return range;

    if (left > 2) {
      range.push("...");
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPagesCeil - 1) {
      range.push("...");
    }

    range.push(totalPagesCeil);

    return range;
  };

  return (
    <div className={paginationStyles.container}>
      <div>
        <Button
          className={paginationStyles.buttonDisplay}
          type="button"
          variant="secondary"
          size="icon"
          disabled={page <= 1}
          onClick={prevPageHandler}
        >
          <Paragraph
            variant="sm"
            weight="semi-bold"
            classname={paginationStyles.paragraphDisplayPrev}
          >
            Siguiente página
          </Paragraph>
          <img
            src="/images/arrowLeft.svg"
            alt="Flecha señalando a la izquierda"
            className={paginationStyles.arrowPrev}
          />
        </Button>
      </div>

      <div className={paginationStyles.pageGuideMobile}>
        <Paragraph weight="semi-bold" variant="sm">
          página {currentPage} de {totalPagesCeil}
        </Paragraph>
      </div>

      <div className={paginationStyles.paginationNumbers}>
        {getPageRange().map((pageNum, i) =>
          typeof pageNum === "number" ? (
            <Button
              key={i}
              variant="link"
              size="sm"
              onClick={() =>
                typeof pageNum === "number" && paramHandler(pageNum)
              }
              active={page === pageNum}
            >
              {pageNum}
            </Button>
          ) : (
            <Button
              variant="link"
              size="sm"
              key={i}
              className={paginationStyles.pageNumberDots}
            >
              {pageNum}
            </Button>
          )
        )}
      </div>

      <div>
        <Button
          className={paginationStyles.buttonDisplay}
          type="button"
          variant="secondary"
          size="icon"
          disabled={itemPage >= dataLenght}
          onClick={nextPageHandler}
        >
          <Paragraph
            variant="sm"
            weight="semi-bold"
            classname={paginationStyles.paragraphDisplayNext}
          >
            Siguiente página
          </Paragraph>
          <img
            src="/images/arrowRight.svg"
            alt="Flecha señalando a la derecho"
            className={paginationStyles.arrowNext}
          />
        </Button>
      </div>
    </div>
  );
};
