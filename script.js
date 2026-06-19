const phoneNumber = "5591988369983";
const message =
  "Olá, Nazaré! Tenho interesse em participar da Travessia Essencial — O caminho de volta para mim. Gostaria de receber mais informações.";

const whatsappLink = document.querySelector("#whatsapp-link");

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
