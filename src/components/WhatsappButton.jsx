import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918805425262"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-4xl shadow-xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;