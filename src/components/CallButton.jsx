import { FaPhoneAlt } from "react-icons/fa";

function CallButton() {
  return (
    <a
      href="tel:8805425262"
      className="fixed bottom-24 right-5 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition z-50"
    >
      <FaPhoneAlt />
    </a>
  );
}

export default CallButton;