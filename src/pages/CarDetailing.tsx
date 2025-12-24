import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Check } from 'lucide-react';
import ceramicImg from '@/assets/service-ceramic.jpg';
import interiorImg from '@/assets/service-interior.jpg';
import exteriorImg from '@/assets/service-exterior.jpg';

const services = [
  {
    title: 'Ceramic Coating',
    description: 'Protect your car paint with our professional-grade ceramic coating. Long-lasting shine and protection against scratches, UV rays, and environmental damage.',
    image: ceramicImg,
    features: ['9H hardness protection', 'Hydrophobic water repellent', 'UV protection', '3-5 years durability', 'Enhanced gloss finish'],
    priceRange: '₹8,000 - ₹35,000',
  },
  {
    title: 'Interior Detailing',
    description: 'Complete interior restoration including deep cleaning, sanitization, and conditioning. We treat every surface to bring back that new car feel.',
    image: interiorImg,
    features: ['Deep vacuum cleaning', 'Leather conditioning', 'Dashboard restoration', 'AC vent cleaning', 'Odor elimination'],
    priceRange: '₹2,500 - ₹8,000',
  },
  {
    title: 'Exterior Detailing',
    description: 'Professional exterior care including foam wash, clay bar treatment, polishing, and waxing. Your car will look showroom-ready.',
    image: exteriorImg,
    features: ['Foam wash treatment', 'Clay bar decontamination', 'Paint correction', 'Hand polish & wax', 'Tire & rim cleaning'],
    priceRange: '₹1,500 - ₹6,000',
  },
];

const CarDetailing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                Car Detailing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional <span className="gradient-text">Car Detailing</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Give your car the premium treatment it deserves. Our expert detailers restore your vehicle to showroom condition.
              </p>
              <Button variant="cta" size="xl" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Book Detailing
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16 md:space-y-24">
              {services.map((item, index) => (
                <div 
                  key={item.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
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
                        Get Quote
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

export default CarDetailing;
