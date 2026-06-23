import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const message = encodeURIComponent(
    `Hello New Global English School,

I would like to get admission information for my child.

Student Name:
Class Interested:
Parent Name:
Mobile Number:

Please share admission details and fee structure.

Thank You.`
  );

  return (
    <a
      href={`https://wa.me/919370671599?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp size={30} />
      
    </a>
  );
}

export default WhatsappButton;