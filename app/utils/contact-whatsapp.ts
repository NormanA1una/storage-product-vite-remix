export const contactUs = (phoneNumber: string) => {
  const whatsappMessage = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola! Me gustaría saber más sobre sus productos 😎`;

  window.open(whatsappMessage, "_blank");
};
