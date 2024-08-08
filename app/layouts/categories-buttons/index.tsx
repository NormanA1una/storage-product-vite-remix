import "./style.css";

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
}: CategoriesButtonsProps) => {
  const [page, setPage] = useState(currentPage);

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

  return (
    <div className="container-category-btn">
      {CATEGORIES.map((category, i) => {
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
      </Button>
    </div>
  );
};
