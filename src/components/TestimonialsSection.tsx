import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'BMW Owner',
    rating: 5,
    review: 'Excellent ceramic coating work! My car looks brand new even after 6 months. The team was professional and delivered exactly what they promised.',
    avatar: 'RK',
  },
  {
    name: 'Priya Shankar',
    role: 'Honda City Owner',
    rating: 5,
    review: 'Got seat covers and audio system installed. Amazing quality and the price was very reasonable. Highly recommend Friends Car Accessories!',
    avatar: 'PS',
  },
  {
    name: 'Mohammed Arif',
    role: 'Hyundai Creta Owner',
    rating: 5,
    review: 'The interior care service was outstanding. They cleaned every corner of my car. It feels like driving a new car now!',
    avatar: 'MA',
  },
  {
    name: 'Sunita Devi',
    role: 'Maruti Swift Owner',
    rating: 4,
    review: 'Great experience with the LED lighting installation. The ambient lights look premium and the team was very helpful throughout.',
    avatar: 'SD',
  },
  {
    name: 'Karthik Rajan',
    role: 'Toyota Fortuner Owner',
    rating: 5,
    review: 'Best place in Chennai for car accessories. They have genuine products and the installation quality is top-notch. 10/10 recommend!',
    avatar: 'KR',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers.
          </p>
        </div>

        {/* Desktop: Show 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border relative hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.review}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile: Show 1 card */}
        <div className="lg:hidden">
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border relative mb-6">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-primary fill-primary' : 'text-muted'}`} 
                />
              ))}
            </div>
            <p className="text-muted-foreground">{testimonials[currentIndex].review}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
