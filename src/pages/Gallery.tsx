import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CTASection } from '@/components/CTASection';
import ceramicImg from '@/assets/service-ceramic.jpg';
import interiorImg from '@/assets/service-interior.jpg';
import exteriorImg from '@/assets/service-exterior.jpg';
import seatCoversImg from '@/assets/service-seat-covers.jpg';
import audioImg from '@/assets/service-audio.jpg';
import ledImg from '@/assets/service-led.jpg';

const galleryImages = [
  { src: ceramicImg, alt: 'Ceramic Coating Work', category: 'Detailing' },
  { src: interiorImg, alt: 'Interior Detailing', category: 'Detailing' },
  { src: exteriorImg, alt: 'Exterior Detailing', category: 'Detailing' },
  { src: seatCoversImg, alt: 'Seat Cover Installation', category: 'Accessories' },
  { src: audioImg, alt: 'Audio System Installation', category: 'Accessories' },
  { src: ledImg, alt: 'LED Lighting Setup', category: 'Accessories' },
  { src: ceramicImg, alt: 'Paint Protection', category: 'Detailing' },
  { src: audioImg, alt: 'Premium Audio Setup', category: 'Accessories' },
  { src: ledImg, alt: 'Ambient Lighting', category: 'Accessories' },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Project <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Browse through our portfolio of completed projects. Quality work that speaks for itself.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Filter Buttons */}
            <div className="flex justify-center gap-2 mb-12">
              {['All', 'Detailing', 'Accessories'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    filter === category 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
                        {image.category}
                      </span>
                      <h4 className="font-bold text-foreground">{image.alt}</h4>
                    </div>
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

export default Gallery;
