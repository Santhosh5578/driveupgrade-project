import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-car.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6 border border-primary/30">
              Chennai's Trusted Auto Care Partner
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Premium Car
            <br />
            <span className="gradient-text">Accessories & Detailing</span>
            <br />
            in Chennai
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up delay-200">
            Upgrade your drive with expert installation & professional detailing services. 
            Quality materials, transparent pricing, exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+919876543210">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in delay-500">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">1200+</div>
              <div className="text-muted-foreground text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">4.4★</div>
              <div className="text-muted-foreground text-sm">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
