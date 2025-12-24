import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6 border border-primary/30 animate-pulse-glow">
              <Sparkles className="w-4 h-4" />
              Chennai's Trusted Auto Care Partner
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Premium Car
            <br />
            <span className="gradient-text">Accessories</span>
            <br />
            in Chennai
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up delay-200">
            Upgrade your drive with expert installation & professional services. 
            Quality materials, transparent pricing, exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="tel:+919876543210">
                <Calendar className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Book Appointment
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" className="group" asChild>
              <a href="https://wa.me/919876543210?text=Hi, I'm interested in your car accessories and services. Can you share more details?" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce-subtle" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in delay-500">
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">1200+</div>
              <div className="text-muted-foreground text-sm">Happy Customers</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">10+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">4.4★</div>
              <div className="text-muted-foreground text-sm">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
