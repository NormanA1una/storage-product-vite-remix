import "./style.css";

import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/button";
import { useCart } from "~/context/cart-context";

import * as Toast from "@radix-ui/react-toast";

export const ProductCard = ({ image, name, price, tag }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  const timerRef = useRef(0);

  const tagsEmojis = { disponible: "🟢", agotado: "🔴", promo: "🤯" };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleAddToCart = () => {
    addToCart({ name, amount: quantity, img, img_description, price, stock });
    setQuantity(1);
  };

  return (
    <div className="product-card-container">
      <div className="product-card-spacing">
        <div className="image-card-spacing">
          {!image ? (
            <div className="image-constrain-card">
              <img
                src={"/img/noImageLico.jpg"}
                width={438}
                height={328}
                alt="Imagen del producto"
                className="image-card-style"
                style={{
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          ) : (
            <div className="image-constrain-card">
              <img
                src={image}
                width={438}
                height={328}
                alt="Imagen del producto"
                className="image-card-style"
                style={{
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          )}
        </div>

        <h3 className="product-name-style">{name}</h3>

        <div className="price-status-container">
          <p className="product-price-style">💵 C${price}</p>

          <span className="product-status-style">
            {tag === "Disponible"
              ? tagsEmojis.disponible
              : tag === "Promo"
              ? tagsEmojis.promo
              : tagsEmojis.agotado}{" "}
            {tag}
          </span>
        </div>

        <div className="input-card-container">
          <div className="input-flex-spacing">
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input-number-cart"
            />
          </div>

          <Toast.Provider swipeDirection="right" duration={2500}>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                handleAddToCart();
                setOpen(false);
                window.clearTimeout(timerRef.current);
                timerRef.current = window.setTimeout(() => {
                  setOpen(true);
                }, 100);
              }}
            >
              Agregar al carrito
            </Button>

            <Toast.Root
              open={open}
              onOpenChange={setOpen}
              className="toast-root-custom"
            >
              <Toast.Title className="font-bold">Producto agregado</Toast.Title>
              <Toast.Description>{`${name} agregado al carrito`}</Toast.Description>

              <Toast.Close className="toast-close-custom">Cerrar</Toast.Close>
            </Toast.Root>
            <Toast.Viewport className="toast-viewport-custom" />
          </Toast.Provider>
        </div>
      </div>
    </div>
  );
};
