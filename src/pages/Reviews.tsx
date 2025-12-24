import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CTASection } from '@/components/CTASection';
import { Star, Quote, Sparkles } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'BMW 5 Series Owner',
    rating: 5,
    review: 'Excellent ceramic coating work! My car looks brand new even after 6 months. The team was professional and delivered exactly what they promised. Highly recommend their services to everyone.',
    avatar: 'RK',
    date: 'November 2024',
  },
  {
    name: 'Priya Shankar',
    role: 'Honda City Owner',
    rating: 5,
    review: 'Got seat covers and audio system installed. Amazing quality and the price was very reasonable. The installation was perfect and they even helped me choose the best options for my budget.',
    avatar: 'PS',
    date: 'October 2024',
  },
  {
    name: 'Mohammed Arif',
    role: 'Hyundai Creta Owner',
    rating: 5,
    review: 'The interior care service was outstanding. They cleaned every corner of my car including the AC vents. It feels like driving a new car now! Will definitely come back.',
    avatar: 'MA',
    date: 'October 2024',
  },
  {
    name: 'Sunita Devi',
    role: 'Maruti Swift Owner',
    rating: 4,
    review: 'Great experience with the LED lighting installation. The ambient lights look premium and give my car a luxurious feel. The team was very helpful and patient with my queries.',
    avatar: 'SD',
    date: 'September 2024',
  },
  {
    name: 'Karthik Rajan',
    role: 'Toyota Fortuner Owner',
    rating: 5,
    review: 'Best place in Chennai for car accessories. They have genuine products and the installation quality is top-notch. I got ceramic coating and it exceeded my expectations. 10/10 recommend!',
    avatar: 'KR',
    date: 'September 2024',
  },
  {
    name: 'Anand Krishnan',
    role: 'Tata Nexon Owner',
    rating: 5,
    review: 'Fantastic service! Got my car cleaned and the results were amazing. The staff is knowledgeable and they take pride in their work. Fair pricing with no hidden charges.',
    avatar: 'AK',
    date: 'August 2024',
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Mahindra XUV700 Owner',
    rating: 5,
    review: 'Installed premium audio system and seat covers. The sound quality is incredible and the seats look like they came from the factory. Professional team and great after-service support.',
    avatar: 'LN',
    date: 'August 2024',
  },
  {
    name: 'Deepak Sharma',
    role: 'Kia Seltos Owner',
    rating: 5,
    review: 'Got exterior care and paint protection done. My car literally shines like new! Water just beads off the surface. Worth every rupee spent. Thank you Friends Car!',
    avatar: 'DS',
    date: 'July 2024',
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow" />
          </div>
          <div className="container-custom relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                Customer Reviews
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                What Our <span className="gradient-text">Customers Say</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Real reviews from real customers. Your trust is our biggest achievement.
              </p>
            </div>
          </div>
        </section>

        {/* Rating Summary */}
        <section className="py-12 bg-primary/10 border-y border-primary/20">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">4.4</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-primary fill-primary' : 'text-primary/50 fill-primary/50'}`} />
                  ))}
                </div>
                <div className="text-muted-foreground">Based on 1200+ reviews</div>
              </div>
              <div className="h-16 w-px bg-border hidden md:block" />
              <div className="text-center">
                <div className="text-muted-foreground mb-2">Verified on</div>
                <div className="text-2xl font-bold">Google Reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 md:p-8 border border-border relative hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-muted-foreground text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground text-sm">• {review.date}</span>
                  </div>
                  <p className="text-muted-foreground">{review.review}</p>
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

export default Reviews;
