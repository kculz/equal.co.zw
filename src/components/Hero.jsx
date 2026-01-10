import { Wifi, MapPin, Zap, Globe, Signal, Network, Antenna, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Grid background with purple and blue lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>
      
      {/* Subtle glow accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Professional badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-purple-600/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Enterprise-Grade Connectivity</span>
            </div>

            {/* Clean, professional headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="block text-white mb-3">
                Fast, Reliable Internet
              </span>
              <span className="block text-blue-500">
                For Everyone
              </span>
            </h1>

            {/* Professional description */}
            <p className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              Delivering high-performance connectivity across 6+ locations in Manicaland and Gweru. 
              Built for everyone that demand reliability and excellence.
            </p>

            {/* Key benefits */}
            <div className="space-y-3 pt-2">
              {[
                '99.9% uptime guarantee',
                'Dedicated 24/7 technical support',
                'Scalable bandwidth solutions',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              
              <a  href="https://wa.me/263773640984"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <button
                onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 border border-purple-600/30 hover:border-purple-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span>View Coverage</span>
              </button>
            </div>

            {/* Professional stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-800">
              {[
                { value: '6+', label: 'Locations', sublabel: 'and expanding' },
                { value: '99.9%', label: 'Uptime', sublabel: 'guaranteed' },
                { value: '24/7', label: 'Support', sublabel: 'available' },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-300">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - Professional network diagram with animations */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full h-[600px]">
              {/* Central hub with animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse-glow"></div>
                  <div className="relative bg-slate-800 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl border-2 border-purple-600">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-ping-slow"></div>
                    <Globe className="w-16 h-16 text-blue-500 animate-spin-very-slow" />
                  </div>
                </div>
              </div>

              {/* Connection lines with animation */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Primary lines */}
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                <line x1="50%" y1="50%" x2="88%" y2="50%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                
                {/* Diagonal lines */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-500" opacity="0.6" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-500" opacity="0.6" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-500" opacity="0.6" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-500" opacity="0.6" />
              </svg>

              {/* Network nodes - Animated */}
              <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
                {[
                  { Icon: Signal, position: 'top-[12%] left-1/2 -translate-x-1/2', delay: '0s', color: 'purple' },
                  { Icon: Wifi, position: 'bottom-[12%] left-1/2 -translate-x-1/2', delay: '0.2s', color: 'blue' },
                  { Icon: Network, position: 'top-1/2 left-[12%] -translate-y-1/2', delay: '0.4s', color: 'purple' },
                  { Icon: Antenna, position: 'top-1/2 right-[12%] -translate-y-1/2', delay: '0.6s', color: 'blue' },
                ].map(({ Icon, position, delay, color }, i) => (
                  <div key={i} className={`absolute ${position} animate-float`} style={{ animationDelay: delay }}>
                    <div className="relative group cursor-pointer">
                      <div className={`absolute inset-0 ${color === 'purple' ? 'bg-purple-600/30' : 'bg-blue-600/30'} rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className={`relative bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center border-2 ${color === 'purple' ? 'border-purple-600' : 'border-blue-600'} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <Icon className={`w-8 h-8 ${color === 'purple' ? 'text-purple-500' : 'text-blue-500'} transition-colors duration-300`} />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Corner accent nodes with pulse */}
                {[
                  { position: 'top-[25%] left-[25%]', delay: '0s', color: 'purple' },
                  { position: 'top-[25%] right-[25%]', delay: '0.3s', color: 'blue' },
                  { position: 'bottom-[25%] left-[25%]', delay: '0.6s', color: 'blue' },
                  { position: 'bottom-[25%] right-[25%]', delay: '0.9s', color: 'purple' },
                ].map((node, i) => (
                  <div key={i} className={`absolute ${node.position} -translate-x-1/2 -translate-y-1/2`}>
                    <div className="relative">
                      <div className={`absolute inset-0 ${node.color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'} rounded-full animate-ping`} style={{ animationDelay: node.delay }}></div>
                      <div className={`relative w-3 h-3 ${node.color === 'purple' ? 'bg-purple-600' : 'bg-blue-600'} rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated orbit rings */}
              <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow">
                <div className="absolute inset-0 border border-purple-600/30 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] transform -translate-x-1/2 -translate-y-1/2 animate-rotate-reverse">
                <div className="absolute inset-0 border border-blue-600/30 rounded-full"></div>
              </div>
              
              {/* Orbiting particles */}
              <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-600 rounded-full -translate-x-1/2"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 animate-rotate-reverse">
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-600 rounded-full -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700 py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-300">
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Secure Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Local Support Team</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Enterprise Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        .animate-rotate-reverse {
          animation: rotate-reverse 25s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
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

export default Hero;