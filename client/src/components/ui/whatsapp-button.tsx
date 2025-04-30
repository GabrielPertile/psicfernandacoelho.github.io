const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5511987654321" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg z-50 hover:bg-green-600 transition-all duration-300" 
      aria-label="Contato via WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
