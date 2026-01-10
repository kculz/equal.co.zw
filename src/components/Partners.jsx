import { Shield, Handshake, Network, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import utande_logo from "../assets/utande-logo.png";
import zol from "../assets/zol.png";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      name: 'Utande',
      description: 'Leading telecommunications provider delivering high-speed connectivity and innovative solutions across Zimbabwe.',
      color: 'blue',
      features: ['High-speed backbone', 'National coverage', 'Enterprise solutions'],
      logo: utande_logo
    },
    {
      name: 'Liquid Technologies',
      description: 'Pan-African technology group providing world-class internet infrastructure and cutting-edge services.',
      color: 'purple',
      features: ['Fiber-optic network', 'Data center services', 'Cloud solutions'],
      logo: zol
    }
  ];

  return (
    <section id="partners" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-purple-600/30 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Strategic Alliances</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">Our Technology</span>
              <span className="block text-blue-500">Partners</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We collaborate with Zimbabwe's leading internet infrastructure providers to deliver reliable, high-performance connectivity.
            </p>
          </div>

          {/* Partners Grid with Normal Logo Display */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${partner.color === 'blue' ? 'bg-blue-600/5' : 'bg-purple-600/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Partner Logo - Normal Display */}
                  <div className={`rounded-xl p-8 mb-6 flex items-center justify-center h-48 ${partner.color === 'blue' ? 'bg-blue-900/30' : 'bg-purple-900/30'} border ${partner.color === 'blue' ? 'border-blue-500/20' : 'border-purple-500/20'} group-hover:border-blue-500/40 transition-colors duration-300`}>
                    <div className="text-center">
                      <div className={`w-48 h-32 ${partner.color === 'blue' ? 'bg-blue-600/10' : 'bg-purple-600/10'} rounded-xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg border ${partner.color === 'blue' ? 'border-blue-500/20' : 'border-purple-500/20'}`}>
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner Info */}
                  <h3 className="text-2xl font-bold mb-4 text-center">{partner.name}</h3>
                  <p className="text-slate-300 leading-relaxed text-center mb-6">
                    {partner.description}
                  </p>
                  
                  {/* Partner Features */}
                  <div className="space-y-2">
                    {partner.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${partner.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Assurance */}
          <div className={`relative rounded-2xl overflow-hidden border border-blue-600/30 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoNTksIDExMywgMjU1LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                    <Shield className="w-20 h-20 text-blue-400" />
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="text-3xl font-bold mb-4">Quality You Can Trust</h3>
                  <p className="text-xl text-blue-200 mb-4">
                    By partnering with Zimbabwe's leading infrastructure providers, we ensure every Equal WiFi hotspot delivers enterprise-grade performance and reliability.
                  </p>
                  <p className="text-lg text-slate-300">
                    Our strategic alliances allow us to rapidly expand coverage while maintaining the highest standards of service quality across all locations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership CTA with Background Image */}
          <div className={`relative rounded-2xl overflow-hidden border border-blue-600/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-purple-900/70 z-10"></div>
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
                }}
              >
                {/* Animated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
              </div>
            </div>
            
            <div className="relative z-20 p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 mx-auto">
                <Handshake className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Partner With Us</h3>
              <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
                Join our mission to connect Zimbabwe. Whether you're a venue owner, business, or investor, there's a place for you in our network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/263716409412?text=I'm%20interested%20in%20partnering%20with%20Equal%20Wifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
                >
                  <Handshake className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Become a Partner</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <button
                  onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 border border-purple-600/30 hover:border-purple-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  <span>View Coverage Areas</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Partners;