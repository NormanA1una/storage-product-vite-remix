import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/button";
import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";
import { Paragraph } from "~/components/typography/paragraph";
import { useCart } from "~/context/cart-context";

export default function Cart() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleSendWhatsapp = () => {
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
    <div className="py-20 px-2 bg-[#EEE7D9] dark:bg-[#1E1D2B] h-[calc(100dvh-74px)] flex justify-center items-center">
      <div className="bg-[#fefefe] dark:bg-[#2D2D37] border border-gray-200 dark:border-[#2D2D37] rounded-lg shadow p-6 flex flex-col gap-6">
        <div>
          <H1>Carrito de compras</H1>
        </div>

        <div className="mb-6">
          <div className="mb-6">
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
                <li className="text-[#fff] flex justify-between gap-6">
                  <Paragraph>{product.name}</Paragraph>{" "}
                  <Paragraph>{product.amount}</Paragraph>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          {cart.length < 1 ? (
            <Button
              variant="primary"
              className="w-full"
              onClick={() => navigate({ pathname: "/" })}
            >
              Regresar al catálogo
            </Button>
          ) : (
            <Button
              variant="primary"
              className="w-full"
              onClick={handleSendWhatsapp}
            >
              Ordenar pedido
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
