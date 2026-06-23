import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const message = encodeURIComponent(
  `*नमस्कार 👋*
मला माझ्या मुलाच्या *New Global English School* मधील प्रवेशाबाबत माहिती हवी आहे.
कृपया प्रवेश प्रक्रिया व फीची माहिती पाठवा.
*धन्यवाद...🙏*`
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