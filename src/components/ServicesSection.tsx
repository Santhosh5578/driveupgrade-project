import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import seatCoversImg from '@/assets/service-seat-covers.jpg';
import audioImg from '@/assets/service-audio.jpg';
import ceramicImg from '@/assets/service-ceramic.jpg';
import interiorImg from '@/assets/service-interior.jpg';
import exteriorImg from '@/assets/service-exterior.jpg';
import ledImg from '@/assets/service-led.jpg';

const services = [
  {
    title: 'Seat Covers',
    description: 'Premium leather & fabric seat covers with perfect fit and expert installation.',
    image: seatCoversImg,
    link: '/car-accessories',
  },
  {
    title: 'Car Audio Systems',
    description: 'High-quality speakers, subwoofers & complete audio upgrades for immersive sound.',
    image: audioImg,
    link: '/car-accessories',
  },
  {
    title: 'Ceramic Coating',
    description: 'Long-lasting paint protection with hydrophobic ceramic coating technology.',
    image: ceramicImg,
    link: '/car-detailing',
  },
  {
    title: 'Interior Detailing',
    description: 'Deep cleaning & restoration of your car interior to showroom condition.',
    image: interiorImg,
    link: '/car-detailing',
  },
  {
    title: 'Exterior Detailing',
    description: 'Complete exterior care including wash, polish, and paint correction.',
    image: exteriorImg,
    link: '/car-detailing',
  },
  {
    title: 'LED & Lighting',
    description: 'Modern LED upgrades including ambient lighting and headlight enhancements.',
    image: ledImg,
    link: '/car-accessories',
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From premium car accessories to professional detailing, we provide complete automotive care solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={service.link}>
                    Get Price
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
