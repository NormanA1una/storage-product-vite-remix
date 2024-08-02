import { useSearchParams } from "@remix-run/react";
import { Loader } from "lucide-react";

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isDebouncing: boolean;
};

export const SearchBar = ({
  isDebouncing,
  query,
  setQuery,
}: SearchBarProps) => {
  const [_searchParams, setSearchParams] = useSearchParams();

  const paramHandler = (currentPageF: number) => {
    setSearchParams((prev) => {
      prev.set("page", `${currentPageF}`);
      return prev;
    });
  };
  return (
    <div className="min-w-[full] max-w-[400px] w-full my-4 h-10 rounded-lg shadow-md mt-2 mb-4 px-2 bg-white flex items-center border border-gray-200 dark:bg-[#2D2D37] dark:border-[#2D2D37]">
      <input
        type="text"
        value={query}
        className="md:w-[400px] w-full appearance-none outline-none dark:bg-[#2D2D37] dark:text-[#FFFF]"
        placeholder="Buscar un producto"
        onChange={(e) => (setQuery(e.target.value), paramHandler(1))}
      />
      <span>
        {isDebouncing ? (
          <span>
            <Loader className="animate-spin" />
          </span>
        ) : (
          <span>🔍</span>
        )}
      </span>
    </div>
  );
};
