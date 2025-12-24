import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Enquiry submitted successfully! We will contact you soon.');
    setFormData({ name: '', phone: '', service: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Ready to upgrade your car? Contact us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us an Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full h-12 px-4 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="seat-covers">Seat Covers</option>
                      <option value="audio-system">Car Audio System</option>
                      <option value="led-lighting">LED & Lighting</option>
                      <option value="ceramic-coating">Ceramic Coating</option>
                      <option value="interior-detailing">Interior Detailing</option>
                      <option value="exterior-detailing">Exterior Detailing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Store Address</h3>
                      <p className="text-muted-foreground">123 Anna Salai, T. Nagar, Chennai - 600017, Tamil Nadu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone Number</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Address</h3>
                      <a href="mailto:info@friendscar.in" className="text-muted-foreground hover:text-primary transition-colors">info@friendscar.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8326054839307!2d80.2340!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzMwLjUiTiA4MMKwMTQnMDIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
