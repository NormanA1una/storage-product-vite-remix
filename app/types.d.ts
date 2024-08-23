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

type Typography = {
  variant?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
  weight?: "regular" | "semi-bold" | "bold";
  style?: CSSProperties;
  classname?: string;
};

type StarProduct = {
  imgSrc: string;
  imgAlt: string;
  star: boolean;
  promo: boolean;
  stock: string;
  product: string;
  normalPrice: string;
  discountPrice: string;
};

type StarProducts = StarProduct[];

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

type Media = {
  src: string;
  srcDark: string;
  alt: string;
  url: string;
};

type ContactMedia = Media[];

type NavbarProps = {
  pathNames: PathName[];
  contactMedia?: Media[];
};
type NavigationProps = NavbarProps;
type SideNavProps = NavbarProps;
type FooterProps = SideNavProps;
