import "./style.css";

import { useNavigate } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import { useCart } from "~/context/cart-context";

export const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleSendWhatsapp = () => {
    /* Make ENV this const */
    const phone = "50576907185";

    let message = "Hola, aquí está la lista de productos que me interesan:\n\n";

    cart.forEach((producto) => {
      message += `🌋 ${producto.name} - ${producto.amount} ${
        producto.amount > 1 ? "Unidades" : "Unidad"
      }\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    setCart([]);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-card">
        <div
          className={`${cart.length > 0 ? "spacing-title-cart" : undefined}`}
        >
          {cart.length > 0 ? (
            <div
              onClick={() => navigate({ pathname: "/" })}
              className="icon-cart-container"
            >
              <ArrowLeft color="#fff" />
            </div>
          ) : null}

          <H1>Carrito de compras</H1>
        </div>

        <div className="content-body-cart">
          <div className="no-content-cart-body">
            {cart.length < 1 ? (
              <H2 style={{ color: "#fff" }}>
                No hay productos en el carrito 😶‍🌫️
              </H2>
            ) : (
              <H2 style={{ color: "#fff" }}>Lista de productos:</H2>
            )}
          </div>

          <ul>
            {cart.map((product) => {
              return (
                <li className="product-cart-style">
                  <Paragraph>{product.name}</Paragraph>{" "}
                  <Paragraph>{product.amount}</Paragraph>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          {cart.length < 1 ? (
            <Button
              variant="primary"
              className="w-full"
              onClick={() => navigate({ pathname: "/" })}
            >
              Regresar al catálogo
            </Button>
          ) : (
            <div className="flex gap-4">
              <Button
                variant="warning"
                className="w-full"
                onClick={() => setCart([])}
              >
                Limpiar carrito
              </Button>

              <Button
                variant="primary"
                className="w-full"
                onClick={handleSendWhatsapp}
              >
                Ordenar pedido
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
