export const contactUs = (phoneNumber: string) => {
  const whatsappMessage = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola! Me gustaría saber más sobre sus productos 😎`;

  window.open(whatsappMessage, "_blank");
};

export const openWhatsapp = ({
  getGreeting,
  cart,
  address,
  total,
  phoneNumber,
}: {
  getGreeting: () => "Buenos días" | "Buenas tardes" | "Buenas noches";
  cart: CartProduct[];
  address: string;
  total: number;
  phoneNumber: string;
}) => {
  const message = `${getGreeting()}, aquí está la lista de productos que me interesan:\n\n${cart
    .map(
      (producto) =>
        `🌋 ${producto.name} - ${producto.amount} ${
          producto.amount > 1 ? "Unidades" : "Unidad"
        }`
    )
    .join(
      "\n\n"
    )}\n\n📍 Dirección del envío: ${address}\n\n💵 Total a pagar: ${total}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};
