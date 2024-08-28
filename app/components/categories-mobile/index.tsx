import { useState } from "react";
import { css } from "@emotion/css";
import { Paragraph } from "../typography/paragraph";

import Select, {
  ActionMeta,
  DropdownIndicatorProps,
  OptionProps,
  SingleValue,
  components,
} from "react-select";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  { value: "", label: "Todas las categorías" },
  { value: "Consumo", label: "Consumo" },
  { value: "Uso personal", label: "Uso personal" },
  { value: "Jugos", label: "Jugos" },
  { value: "Agua", label: "Agua" },
  { value: "Cerveza", label: "Cerveza" },
  { value: "Gaseosas", label: "Gaseosas" },
  { value: "Licor", label: "Licor" },
  { value: "Limpieza y Hogar", label: "Limpieza y Hogar" },
  { value: "Energizantes", label: "Energizantes" },
  { value: "Plásticos y Descartables", label: "Plásticos y Descartables" },
  { value: "Cigarros", label: "Cigarros" },
  { value: "Helados", label: "Helados" },
  { value: "Snacks", label: "Snacks" },
];

const DropdownIndicator = (props: DropdownIndicatorProps<any, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown
        size={20}
        className={css({
          transition: "transform 0.2s ease",
          transform: props.selectProps.menuIsOpen
            ? "rotate(180deg)"
            : "rotate(0deg)",
        })}
      />
    </components.DropdownIndicator>
  );
};

const CustomOption = (props: OptionProps<any, false>) => {
  return (
    <components.Option {...props}>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          cursor: "pointer",
        })}
      >
        <span>{props.label}</span>
        <div
          className={css({
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            backgroundColor: props.isSelected ? "#0E8499" : "#ffffff",
            border: "1px solid #E2E2E2",
            position: "relative",
            cursor: "pointer",
            ":hover": {
              boxShadow: "0px 0px 0px 4px #98A2B324",
            },
            "&::before": {
              content: '""',
              display: props.isSelected ? "block" : "none",
              width: "7px",
              height: "7px",
              backgroundColor: "#ffffff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "100%",
            },
          })}
        />
      </div>
    </components.Option>
  );
};

export const CategoriesMobile = ({
  currentPage,
  setCategory,
  setSearchParams,
}: CategoriesButtonsProps) => {
  const [page, setPage] = useState(currentPage);

  const categoriesStyles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      gap: "6px",

      "@media(min-width: 1024px)": {
        display: "none",
      },
    }),
  };

  const paramHandlerReset = (currentPage: number) => {
    const params = new URLSearchParams();
    params.set("page", `${currentPage}`);

    setSearchParams(params);
  };

  const paramHandler = (category: string) => {
    setSearchParams((prev: URLSearchParams) => {
      prev.set("category", category);
      prev.set("page", "1");
      return prev;
    });
  };

  const resetPageHandler = () => {
    setPage(1);
    paramHandlerReset(1);
    setCategory("");
  };

  const handleSelectChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    if (!selectedOption) return null;

    if (selectedOption.value === "") return resetPageHandler();

    return paramHandler(selectedOption.value);
  };

  return (
    <div className={categoriesStyles.container}>
      <div>
        <Paragraph variant="sm" weight="semi-bold">
          Filtrar por categorías
        </Paragraph>
      </div>

      <div>
        <Select
          instanceId="categories-select"
          components={{ DropdownIndicator, Option: CustomOption }}
          styles={{
            control: (baseStyle, state) => ({
              ...baseStyle,
              borderRadius: "8px",
              padding: "4px 5px",
              border: !state.isFocused
                ? "1px solid #E2E2E2"
                : "1px solid #0E8499",
              outline: "none",
              boxShadow: !state.isFocused
                ? "0px 1px 2px 0px #1018280D"
                : "0px 0px 0px 4px #0E84993D",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            option: (baseStyle, state) => ({
              ...baseStyle,
              backgroundColor: "#FFFFFF",
              color: "#2C2C2C",
            }),
          }}
          options={CATEGORIES}
          placeholder="Selecciona una categoria"
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};
