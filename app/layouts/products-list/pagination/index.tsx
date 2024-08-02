import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";

type PaginationProductsProps = {
  dataLenght: number;
  itemPage: number;
  currentPage: number;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const PaginationProducts = ({
  currentPage,
  dataLenght,
  itemPage,
  setCategory,
  setQuery,
}: PaginationProductsProps) => {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const paramHandler = (currentPageF: number) => {
    setSearchParams((prev) => {
      prev.set("page", `${currentPageF}`);
      return prev;
    });
  };

  const paramHandlerReset = (currentPage: number) => {
    const params = new URLSearchParams();
    params.set("page", `${currentPage}`);

    setSearchParams(params);
  };

  const nextPageHandler = () => {
    setPage(page + 1);
    paramHandler(page + 1);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
    paramHandler(page - 1);
  };

  const resetPageHandler = () => {
    setPage(1);
    paramHandlerReset(1);
    setCategory("");
    setQuery("");
  };

  return (
    <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
      <Button
        disabled={page <= 1}
        onClick={() => {
          prevPageHandler();
        }}
        variant="dark"
      >
        ⬅️ Página anterior
      </Button>

      <Button
        disabled={itemPage >= dataLenght}
        onClick={() => {
          nextPageHandler();
        }}
        variant="dark"
      >
        Página siguiente ➡️
      </Button>

      <Button
        type="button"
        onClick={() => {
          resetPageHandler();
        }}
        variant="dark"
      >
        Regresar al inicio 🏠
      </Button>
    </div>
  );
};
