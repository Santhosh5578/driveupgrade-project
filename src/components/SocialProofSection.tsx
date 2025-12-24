import { Star } from 'lucide-react';

export const SocialProofSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary/10 border-y border-primary/20">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">4.4+ Rating</div>
              <div className="text-muted-foreground text-sm">on Google Reviews</div>
            </div>
          </div>
          
          <div className="h-8 w-px bg-border hidden md:block" />
          
          <div className="text-center">
            <div className="font-bold text-2xl text-primary">1200+</div>
            <div className="text-muted-foreground text-sm">Happy Customers</div>
          </div>
          
          <div className="h-8 w-px bg-border hidden md:block" />
          
          <div className="text-center">
            <div className="font-bold text-2xl text-primary">10+</div>
            <div className="text-muted-foreground text-sm">Years in Business</div>
          </div>
        </div>
      </div>
    </section>
  );
};
