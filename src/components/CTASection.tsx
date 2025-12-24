import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/20 via-background to-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow delay-500" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Transform Your Ride
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get Your Car <span className="gradient-text">Upgraded Today</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Ready to transform your ride? Contact us now for a free consultation and quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" className="group" asChild>
              <a href="https://wa.me/919876543210?text=Hi, I want to get a quote for car accessories. Can you help?" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce-subtle" />
                WhatsApp Us
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="group" asChild>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Visit Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
