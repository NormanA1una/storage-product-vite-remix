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
