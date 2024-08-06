import { useState } from "react";
import { useCart } from "~/context/cart-context";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  tag: string;
};

export const ProductCard = ({ image, name, price, tag }: ProductCardProps) => {
  const tagsEmojis = { disponible: "🟢", agotado: "🔴", promo: "🤯" };

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ name, amount: quantity });
    setQuantity(1);
  };

  return (
    <div className="w-full bg-[#fefefe] border border-gray-200 rounded-lg shadow dark:bg-[#2D2D37] dark:border-[#2D2D37]">
      <div className="p-2">
        <div className="flex justify-center">
          {!image ? (
            <div className="max-h-[328px] max-w-[438px]">
              <img
                src={"/img/noImageLico.jpg"}
                width={438}
                height={328}
                alt="Imagen del producto"
                className="p-8! mx-auto! rounded-md!"
                style={{
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          ) : (
            <div className="max-h-[328px] max-w-[438px]">
              <img
                src={image}
                width={438}
                height={328}
                alt="Imagen del producto"
                className="p-8! mx-auto! rounded-md!"
                style={{
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          )}
        </div>

        <h3 className="text-lg flex items-center h-[56px] font-semibold tracking-tight text-[#10171D] dark:text-[#fefefe]">
          {name}
        </h3>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-[#3f7d20] dark:text-[#7BDDD7]">
            💵 C${price}
          </p>

          <span className="bg-[#AF503B] px-3 py-1 rounded-xl dark:font-bold text-[#fefefe] text-sm dark:bg-[#38344B] dark:text-[#BC8BEC]">
            {tag === "Disponible"
              ? tagsEmojis.disponible
              : tag === "Promo"
              ? tagsEmojis.promo
              : tagsEmojis.agotado}{" "}
            {tag}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 text-center border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={handleAddToCart}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
