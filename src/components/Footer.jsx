import { useNavigate, useLocation } from 'react-router-dom';
import { Wifi, MapPin, Mail, Phone, Clock, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
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
    { name: 'Partners', id: 'partners' }
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Equal Wifi Logo" className="w-20 h-8" />
              
              <span className="text-2xl font-bold">Equal Wifi</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fast, reliable internet connectivity across Zimbabwe. Serving 6+ locations in Manicaland and Gweru, expanding rapidly to connect everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Coverage</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+263 77 792 8699</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/263777928699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    WhatsApp Support
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@equal.co.zw</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 8AM - 6PM</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Equal Wifi. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button
                onClick={() => navigate('/legal')}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
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