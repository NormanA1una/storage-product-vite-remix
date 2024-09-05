import "./style.css";

import { css } from "@emotion/css";
import { useState } from "react";
import { CategoryButton } from "./category-button";
import { Button } from "~/components/button";

const CATEGORIES = [
  "Consumo",
  "Uso personal",
  "Jugos",
  "Agua",
  "Cerveza",
  "Gaseosas",
  "Licor",
  "Limpieza y Hogar",
  "Energizantes",
  "Plásticos y Descartables",
  "Cigarros",
  "Helados",
  "Snacks",
];

export const CategoriesButtons = ({
  categoryP,
  currentPage,
  setCategory,
  setSearchParams,
  scrollPosition,
}: CategoriesButtonsProps) => {
  const [page, setPage] = useState(currentPage);

  const categoriesButtonsStyles = {
    container: css({
      display: "none",
      flexDirection: "column",
      justifyContent: "center",
      gap: "8px",
      width: "280px",
      backgroundColor: "#FDF8ED",
      borderRadius: "24px",
      padding: "32px",

      position: (scrollPosition as number) < 2500 ? "sticky" : "relative",
      zIndex: 5,
      top: 74.14,

      "@media(min-width: 1024px)": {
        position: (scrollPosition as number) < 5120 ? "sticky" : "relative",
        display: "flex",
      },

      "@media(min-width: 1280px)": {
        position: (scrollPosition as number) < 3600 ? "sticky" : "relative",
      },

      "@media(min-width: 1440px)": {
        position: (scrollPosition as number) < 3400 ? "sticky" : "relative",
      },

      "@media(min-width: 1720px)": {
        position: (scrollPosition as number) < 2550 ? "sticky" : "relative",
      },
    }),

    buttonCategory: css({ width: "100%", textAlign: "start" }),
  };

  const paramHandlerReset = (currentPage: number) => {
    const params = new URLSearchParams();
    params.set("page", `${currentPage}`);

    setSearchParams(params);
  };

  const resetPageHandler = () => {
    setPage(1);
    paramHandlerReset(1);
    setCategory("");
  };

  const paramHandler = (category: string) => {
    setSearchParams((prev: URLSearchParams) => {
      prev.set("category", category);
      prev.set("page", "1");
      return prev;
    });
  };

  return (
    <div className={categoriesButtonsStyles.container}>
      <Button
        onClick={resetPageHandler}
        variant="link"
        className={categoriesButtonsStyles.buttonCategory}
        active={!categoryP}
      >
        Todos los productos
      </Button>
      {CATEGORIES.map((category, i) => {
        return (
          <Button
            onClick={() => {
              setCategory(category);
              paramHandler(category);
            }}
            key={i}
            variant="link"
            className={categoriesButtonsStyles.buttonCategory}
            active={categoryP === category}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

/* {CATEGORIES.map((category, i) => {
  return (
    <CategoryButton
      category={category}
      categoryP={categoryP}
      key={i}
      setCategory={setCategory}
    />
  );
})}

<Button
  variant="primary"
  onClick={() => {
    resetPageHandler();
  }}
>
  Todos los productos
</Button> */
