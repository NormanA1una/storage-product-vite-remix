type Category =
  | "Consumo"
  | "Uso personal"
  | "Jugos"
  | "Agua"
  | "Cerveza"
  | "Gaseosas"
  | "Licor"
  | "Limpieza y Hogar"
  | "Energizantes"
  | "Plásticos y Descartables"
  | "Cigarros"
  | "Helados"
  | "Snacks"
  | "";

type Product = {
  id: string;
  image: string;
  name: string;
  price: string;
  tag: string;
};

type CartProduct = {
  name: string;
  amount: number;
};

type ProductsProps = {
  dataLoader: PostgrestSingleResponse<any[]>;
  queryPage: string;
  q: string;
};

type CategoriesButtonsProps = {
  categoryP: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setSearchParams: any;
};

type CategoryButtonProps = {
  category: string;
  categoryP: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

type ProductListProps = {
  query: string;
  results: Product[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isDebouncing: boolean;
};

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  tag: string;
};

type PathName = {
  name: string;
  nombre: string;
  path: string;
};

type MainLayoutProps = {
  pathNames: PathName[];
};

type NavbarProps = MainLayoutProps;
type NavigationProps = NavbarProps;
type SideNavProps = NavbarProps;
type FooterProps = SideNavProps;
