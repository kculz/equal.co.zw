import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import logo from '../assets/equal.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    
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

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Locations', id: 'locations' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Partners', id: 'partners' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={logo} alt="Equal Wifi Logo" className="w-20 h-8 relative z-10 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="text-2xl font-bold text-white">Equal Wifi</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            <a 
              href="https://wa.me/263773640984"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center space-x-2"
            >
              <Zap className="w-4 h-4" />
              <span>Get Connected</span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-slate-800/80 rounded-lg p-4 backdrop-blur-sm border border-slate-700">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 font-medium text-left py-2.5 px-4 rounded-lg"
                >
                  {link.name}
                </button>
              ))}
              
              <a 
                href="https://wa.me/263773640984"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium text-center shadow-lg flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span>Get Connected</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;