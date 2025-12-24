import { Shield, Award, Banknote, Users, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Professionals',
    description: '10+ years of expertise in car accessories and detailing',
  },
  {
    icon: Shield,
    title: 'Quality Materials',
    description: 'Only premium brands and certified products used',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description: 'No hidden costs, clear upfront pricing for all services',
  },
  {
    icon: Users,
    title: 'Trusted by 1200+ Customers',
    description: 'Building relationships through exceptional service',
  },
  {
    icon: Clock,
    title: 'Fast Service & Support',
    description: 'Quick turnaround without compromising on quality',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction or we make it right',
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="gradient-text">Friends Car</span> Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just another car accessory shop. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/20 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
