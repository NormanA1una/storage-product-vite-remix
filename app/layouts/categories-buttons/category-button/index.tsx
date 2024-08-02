import { useSearchParams } from "@remix-run/react";
import { CSSProperties } from "react";
import { Button } from "~/components/button";

type CategoryButtonProps = {
  category: string;
  categoryP: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const CategoryButton = ({
  category,
  categoryP,
  setCategory,
}: CategoryButtonProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onFilterHandler = () => {
    if (categoryP === category) {
      return true;
    }

    return false;
  };

  const activeFilterStyle: CSSProperties = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  };

  const paramHandler = (category: string) => {
    setSearchParams((prev) => {
      prev.set("category", category);
      prev.set("page", "1");
      return prev;
    });
  };
  return (
    <Button
      variant="primary"
      onClick={() => {
        setCategory(category);
        paramHandler(category);
      }}
      style={onFilterHandler() ? activeFilterStyle : undefined}
    >
      {category}
    </Button>
  );
};
