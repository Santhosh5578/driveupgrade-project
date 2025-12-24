import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'Oswald, sans-serif' }}>
                FRIENDS
              </span>
              <span className="text-2xl font-bold tracking-tight text-primary" style={{ fontFamily: 'Oswald, sans-serif' }}>
                CAR
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Premium car accessories & professional detailing services in Chennai. Your trusted partner for automotive excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/car-accessories" className="text-muted-foreground hover:text-primary transition-colors">Car Accessories</Link></li>
              <li><Link to="/car-detailing" className="text-muted-foreground hover:text-primary transition-colors">Car Detailing</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Seat Covers</span></li>
              <li><span className="text-muted-foreground">Car Audio Systems</span></li>
              <li><span className="text-muted-foreground">Ceramic Coating</span></li>
              <li><span className="text-muted-foreground">Interior Detailing</span></li>
              <li><span className="text-muted-foreground">Exterior Detailing</span></li>
              <li><span className="text-muted-foreground">LED Lighting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Anna Salai, T. Nagar, Chennai - 600017</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@friendscar.in" className="text-muted-foreground hover:text-primary transition-colors text-sm">info@friendscar.in</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Friends Car Accessories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
