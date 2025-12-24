import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Check } from 'lucide-react';
import seatCoversImg from '@/assets/service-seat-covers.jpg';
import audioImg from '@/assets/service-audio.jpg';
import ledImg from '@/assets/service-led.jpg';

const accessories = [
  {
    title: 'Premium Seat Covers',
    description: 'Transform your car interior with our premium leather and fabric seat covers. Custom-fitted for your specific vehicle model.',
    image: seatCoversImg,
    features: ['Custom fit for all car models', 'Premium leather & fabric options', 'Waterproof & easy to clean', '2-year warranty included'],
    priceRange: '₹5,000 - ₹25,000',
  },
  {
    title: 'Car Audio Systems',
    description: 'Experience crystal clear sound with our professional audio system installations. From speakers to complete setups.',
    image: audioImg,
    features: ['JBL, Sony, Pioneer brands', 'Subwoofers & amplifiers', 'Touchscreen head units', 'Professional installation'],
    priceRange: '₹3,000 - ₹50,000',
  },
  {
    title: 'LED & Lighting Accessories',
    description: 'Enhance your car with modern LED lighting solutions including ambient lights, headlight upgrades, and more.',
    image: ledImg,
    features: ['Ambient interior lighting', 'LED headlight upgrades', 'Underglow kits', 'DRL installations'],
    priceRange: '₹2,000 - ₹15,000',
  },
];

const CarAccessories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                Car Accessories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Car <span className="gradient-text">Accessories</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Upgrade your vehicle with top-quality accessories. Professional installation with warranty on all products.
              </p>
              <Button variant="cta" size="xl" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Get Free Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16 md:space-y-24">
              {accessories.map((item, index) => (
                <div 
                  key={item.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{item.description}</p>
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="text-xl font-bold text-primary">{item.priceRange}</span>
                    </div>
                    <Button variant="hero" size="lg" asChild>
                      <a href="tel:+919876543210">
                        Enquire Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CarAccessories;
