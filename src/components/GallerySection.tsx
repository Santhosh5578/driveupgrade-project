import { useState } from 'react';
import ceramicImg from '@/assets/service-ceramic.jpg';
import interiorImg from '@/assets/service-interior.jpg';
import exteriorImg from '@/assets/service-exterior.jpg';
import seatCoversImg from '@/assets/service-seat-covers.jpg';
import audioImg from '@/assets/service-audio.jpg';
import ledImg from '@/assets/service-led.jpg';

const galleryImages = [
  { src: ceramicImg, alt: 'Ceramic Coating Work', category: 'Care' },
  { src: interiorImg, alt: 'Interior Care', category: 'Care' },
  { src: exteriorImg, alt: 'Exterior Care', category: 'Care' },
  { src: seatCoversImg, alt: 'Seat Cover Installation', category: 'Accessories' },
  { src: audioImg, alt: 'Audio System Installation', category: 'Accessories' },
  { src: ledImg, alt: 'LED Lighting Setup', category: 'Accessories' },
];

export const GallerySection = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section className="section-padding bg-secondary" id="gallery">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the quality of our work. Every project is completed with precision and care.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {['All', 'Care', 'Accessories'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-primary-foreground scale-105' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
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
  );
};
