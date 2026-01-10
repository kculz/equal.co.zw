import { Search, Wifi, CreditCard, Headphones, ArrowRight, Smartphone, Router, Globe, ChevronRight, Smartphone as PhoneIcon, Wifi as WifiIcon, CreditCard as CardIcon, Headphones as SupportIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Find a Hotspot',
      description: 'Locate Equal WiFi hotspots in popular venues across our coverage areas. Use our coverage map or contact us for the nearest location.',
      color: 'blue',
      image: 'step1'
    },
    {
      icon: Smartphone,
      number: '02',
      title: 'Connect Device',
      description: 'Select the Equal WiFi network on your smartphone, laptop, or tablet. Our hotspots are optimized for all modern devices.',
      color: 'purple',
      image: 'step2'
    },
    {
      icon: CreditCard,
      number: '03',
      title: 'Purchase Access',
      description: 'Choose from flexible daily, weekly, or monthly packages. Secure payments with multiple options available.',
      color: 'blue',
      image: 'step3'
    },
    {
      icon: Headphones,
      number: '04',
      title: '24/7 Support',
      description: 'Need assistance? Our dedicated support team is available via WhatsApp for instant help and troubleshooting.',
      color: 'purple',
      image: 'step4'
    }
  ];

  return (
    <section id="how-it-works" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-purple-600/30 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Simple & Fast</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">How to Get</span>
              <span className="block text-blue-500">Connected</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Getting high-speed internet with Equal WiFi is quick and easy. Follow these simple steps to start browsing in minutes.
            </p>
          </div>

          {/* Steps with Visual Timeline */}
          <div className="relative mb-16">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative transition-all duration-1000 delay-${(index + 1) * 300} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  >
                    <div className={`flex flex-col lg:flex-row items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Step Visual */}
                      <div className={`relative mb-8 lg:mb-0 ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-slate-700/50 group hover:border-blue-500/50 transition-all duration-300">
                          <div className={`absolute inset-0 ${step.color === 'blue' ? 'bg-blue-900/40' : 'bg-purple-900/40'} flex items-center justify-center`}>
                            <div className="relative">
                              <div className={`absolute inset-0 ${step.color === 'blue' ? 'bg-blue-600/20' : 'bg-purple-600/20'} rounded-full blur-2xl animate-pulse-glow`}></div>
                              <Icon className={`w-20 h-20 ${step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'} animate-float`} />
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className={`flex-1 ${isEven ? 'lg:text-right' : ''}`}>
                        <div className={`inline-flex items-center space-x-2 ${step.color === 'blue' ? 'bg-blue-600/20' : 'bg-purple-600/20'} backdrop-blur-sm rounded-full px-4 py-2 mb-4`}>
                          <div className={`w-2 h-2 rounded-full ${step.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                          <span className="text-sm font-medium">Step {step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{step.description}</p>
                        
                        {/* Timeline dot for desktop */}
                        <div className="hidden lg:block absolute top-1/2 left-1/2 w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section with Image Background */}
          <div className={`relative rounded-2xl overflow-hidden border border-blue-600/30 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Image Background with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-purple-900/70 z-10"></div>
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
              }}
            >
              {/* Animated pattern overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M0 0L80 80M80 0L0 80" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none"/>
                    <circle cx="40" cy="40" r="2" fill="rgba(168,85,247,0.3)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
              </svg>
              
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#cta-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
                <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="url(#cta-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-200" />
                <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="url(#cta-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-400" />
              </svg>
            </div>
            
            <div className="relative z-20 p-8 md:p-12 text-center">
              {/* Animated center element */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse-glow"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                  <Globe className="w-12 h-12 text-blue-400 animate-spin-very-slow" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Fast Internet?</h3>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied users across Zimbabwe who trust Equal WiFi for their connectivity needs.
              </p>
              
              {/* Process icons */}
              <div className="flex justify-center items-center space-x-6 mb-8">
                {[PhoneIcon, WifiIcon, CardIcon, SupportIcon].map((Icon, index) => (
                  <div key={index} className="relative group/icon">
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" style={{ animationDelay: `${index * 0.3}s` }}></div>
                    <div className="relative w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center justify-center group-hover/icon:scale-125 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    {index < 3 && (
                      <div className="absolute top-1/2 right-0 w-12 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transform translate-x-full -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/263716409412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
                >
                  <Headphones className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <button
                  onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 border border-purple-600/30 hover:border-purple-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Wifi className="w-5 h-5" />
                  <span>Find Hotspots</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Stats overlay */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-500/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">5 min</div>
                  <div className="text-sm text-blue-300">Average Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-blue-300">Active Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99%</div>
                  <div className="text-sm text-blue-300">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 left-6">
              <div className="relative group/element animate-float">
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-6 h-6 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-500/30"></div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="relative group/element animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20 animation-delay-500"></div>
                <div className="relative w-6 h-6 bg-purple-600/30 backdrop-blur-sm rounded-full border border-purple-500/30"></div>
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
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;