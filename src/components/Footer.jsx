import { useNavigate, useLocation } from 'react-router-dom';
import { Wifi, MapPin, Mail, Phone, Clock, MessageCircle, Facebook, Twitter, Instagram, Zap, Globe } from 'lucide-react';
import logo from '../assets/equal.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Locations', id: 'locations' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Partners', id: 'partners' },
    { name: 'Testimonials', id: 'testimonials' }
  ];

  const locations = [
    'Mutare',
    'Gweru',
    'Chimanimani',
    'Chipinge',
    'Rusape',
    'Nyanga'
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img src={logo} alt="Equal Wifi Logo" className="w-20 h-8 relative z-10 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <span className="text-2xl font-bold text-white">Equal Wifi</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Fast, reliable internet connectivity across Zimbabwe. Serving 6+ locations in Manicaland and Gweru, expanding rapidly to connect everyone.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-blue-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              <a 
                href="#"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-blue-500"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              
              <a 
                href="#"
                className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-blue-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-500" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>Our Coverage</span>
            </h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
                  <MapPin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-400 group-hover:text-white transition-colors">+263 77 364 0984</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MessageCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <a 
                    href="https://wa.me/263773640984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-400 group-hover:text-white transition-colors">info@equal.co.zw</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-400">Mon - Sat: 8AM - 6PM</p>
                  <p className="text-slate-400">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Equal Wifi. All rights reserved. Connecting Zimbabwe to the Future.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button
                onClick={() => navigate('/legal')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Legal Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;