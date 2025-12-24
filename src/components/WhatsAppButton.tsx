import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi, I'm interested in your car accessories and detailing services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
};
