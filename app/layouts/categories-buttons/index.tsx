import { useState } from "react";
import { CategoryButton } from "./category-button";
import { Button } from "~/components/button";

type CategoriesButtonsProps = {
  categoryP: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setSearchParams: any;
};

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
    <div className="flex flex-wrap justify-center gap-4 my-2">
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
