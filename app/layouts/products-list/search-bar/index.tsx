import { useSearchParams } from "@remix-run/react";
import { Loader } from "lucide-react";
import { css } from "@emotion/css";
import { Paragraph } from "~/components/typography/paragraph";

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  // isDebouncing: boolean;
};

export const SearchBar = ({
  // isDebouncing,
  query,
  setQuery,
}: SearchBarProps) => {
  const [_searchParams, setSearchParams] = useSearchParams();

  const searchBarStyles = {
    container: css({
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    }),

    inputDisplay: css({
      position: "relative",
      display: "flex",
      alignItems: "center",
    }),

    inputStyle: css({
      padding: "10px 14px 10px 46px",
      borderRadius: "8px",
      border: "1px solid #E2E2E2",
      width: "100%",
      outline: "none",

      "::placeholder": {
        color: "#A9A9A9",
      },
    }),

    displayImg: css({ position: "absolute", left: 13 }),

    displayCircle: css({ position: "absolute", right: 13 }),
  };

  const paramHandler = (currentPageF: number) => {
    setSearchParams((prev) => {
      prev.set("page", `${currentPageF}`);
      return prev;
    });
  };
  return (
    <div className={searchBarStyles.container}>
      <div>
        <Paragraph variant="sm" weight="semi-bold">
          ¿Qué te gustaría buscar hoy?
        </Paragraph>
      </div>
      <div className={searchBarStyles.inputDisplay}>
        <div className={searchBarStyles.displayImg}>
          <img
            src="/images/searchIcon.svg"
            alt="Imagen de una lupa dentro de la barra de busqueda"
          />
        </div>

        <input
          className={searchBarStyles.inputStyle}
          type="text"
          value={query}
          placeholder="Busca tu producto"
          onChange={(e) => (setQuery(e.target.value), paramHandler(1))}
        />

        {query && (
          <div
            className={searchBarStyles.displayCircle}
            onClick={() => setQuery("")}
          >
            <img
              src="/images/cancelCircle.svg"
              alt="Equis encerrada en un circulo"
            />
          </div>
        )}
      </div>
    </div>
  );
};
