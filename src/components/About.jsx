import { Target, Users, Zap, TrendingUp, Wifi, Network, MapPin, Shield, Handshake, FileText, AlertCircle, ChevronRight, Globe, CheckCircle2, ArrowRight, Users as UsersIcon, Shield as ShieldIcon, Building, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-blue-600/30 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">About Equal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">Connecting</span>
              <span className="block text-blue-500">Zimbabwe's Future</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're building Zimbabwe's most accessible WiFi network, bringing high-speed internet to communities across the nation.
            </p>
          </div>

          {/* Hero Image Section - Enhanced with Image */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-600/30 h-full min-h-[400px]">
                {/* Image Background with Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-purple-900/70 z-10"></div>
                <div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
                  }}
                >
                  {/* Animated grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
                  
                  {/* Animated connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <line x1="20%" y1="40%" x2="80%" y2="60%" stroke="url(#hero-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
                    <line x1="80%" y1="40%" x2="20%" y2="60%" stroke="url(#hero-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-200" />
                  </svg>
                </div>
                
                {/* Content over image */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center p-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse-glow"></div>
                    <Globe className="w-24 h-24 md:w-32 md:h-32 text-blue-400 animate-spin-very-slow" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Digital Transformation Hub</h3>
                    <p className="text-blue-200 mb-6">Empowering communities through reliable connectivity</p>
                    
                    {/* Stats overlay */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">6+</div>
                        <div className="text-xs text-blue-300">Cities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">99.9%</div>
                        <div className="text-xs text-blue-300">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">24/7</div>
                        <div className="text-xs text-blue-300">Support</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 left-6">
                    <div className="relative group/element">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                      <div className="relative w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 group-hover/element:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="relative group/element">
                      <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
                      <div className="relative w-3 h-3 bg-purple-500 rounded-full border-2 border-slate-900 group-hover/element:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background glow */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-emerald-600/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Trusted by Thousands</span>
              </div>
              <h3 className="text-3xl font-bold">Building Digital Bridges</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Equal is a WiFi hotspot provider delivering fast, reliable connectivity across Zimbabwe. 
                With strategic locations in Mutare and Gweru, we leverage partnerships with industry 
                leaders like Utande and Liquid Technologies to provide exceptional internet access.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our mission extends beyond connectivity—we're creating opportunities for education, 
                business, and innovation by making quality internet accessible to all.
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">2018</div>
                  <div className="text-sm text-slate-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">6+</div>
                  <div className="text-sm text-slate-400">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">2</div>
                  <div className="text-sm text-slate-400">Regions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To bridge the digital divide by providing accessible, high-quality internet connectivity to every community in Zimbabwe.',
                color: 'blue',
                imageColor: 'from-blue-600/20 to-blue-900/20'
              },
              {
                icon: Users,
                title: 'Who We Serve',
                description: 'Students, professionals, businesses, and communities across Zimbabwe who need reliable, fast internet access.',
                color: 'purple',
                imageColor: 'from-purple-600/20 to-purple-900/20'
              },
              {
                icon: Zap,
                title: 'Why Choose Us',
                description: 'Lightning-fast speeds, 99.9% uptime, and growing coverage across multiple locations.',
                color: 'blue',
                imageColor: 'from-blue-600/20 to-blue-900/20'
              },
              {
                icon: TrendingUp,
                title: 'Growth Vision',
                description: 'Currently in 6+ locations with rapid expansion plans to major cities across Zimbabwe.',
                color: 'purple',
                imageColor: 'from-purple-600/20 to-purple-900/20'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${item.imageColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${item.color === 'blue' ? 'bg-blue-600/20' : 'bg-purple-600/20'} border ${item.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${item.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section - Enhanced with Image Background */}
          <div className={`relative rounded-2xl overflow-hidden border border-blue-600/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Image Background with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-purple-900/70 z-10"></div>
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
              }}
            >
              {/* Animated circuit pattern overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="growth-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M40 0V80M0 40H80" stroke="rgba(59,130,246,0.2)" strokeWidth="1" fill="none"/>
                    <circle cx="40" cy="40" r="3" fill="rgba(168,85,247,0.3)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#growth-pattern)"/>
              </svg>
            </div>
            
            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="growth-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="url(#growth-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
              <line x1="80%" y1="30%" x2="60%" y2="50%" stroke="url(#growth-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-200" />
              <line x1="50%" y1="70%" x2="50%" y2="50%" stroke="url(#growth-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-400" />
            </svg>
            
            {/* Floating growth elements */}
            <div className="absolute top-6 left-6">
              <div className="relative group/element animate-float">
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-6 h-6 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-blue-400" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="relative group/element animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20 animation-delay-500"></div>
                <div className="relative w-6 h-6 bg-purple-600/30 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center">
                  <Building className="w-3 h-3 text-purple-400" />
                </div>
              </div>
            </div>
            
            <div className="relative z-20 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 mb-4 mx-auto">
                  <Cloud className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Growing Fast, Connecting More</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Expanding Our Reach Every Day</h3>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  From Manicaland to Gweru and beyond, we're building Zimbabwe's most accessible WiFi network.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    value: '6+', 
                    label: 'Active Locations', 
                    sublabel: 'and expanding', 
                    icon: Wifi, 
                    color: 'blue',
                    description: 'Multiple strategic hotspots across Zimbabwe'
                  },
                  { 
                    value: '2', 
                    label: 'Major Regions', 
                    sublabel: 'served', 
                    icon: MapPin, 
                    color: 'purple',
                    description: 'Manicaland and Midlands coverage'
                  },
                  { 
                    value: '∞', 
                    label: 'Growth Potential', 
                    sublabel: 'unlimited', 
                    icon: TrendingUp, 
                    color: 'blue',
                    description: 'Expanding to major cities nationwide'
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-20 h-20 ${stat.color === 'blue' ? 'bg-blue-600/20' : 'bg-purple-600/20'} backdrop-blur-sm rounded-full mb-6 border ${stat.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'} group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <stat.icon className={`w-10 h-10 ${stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                    <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xl font-medium text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-blue-300 mb-2">{stat.sublabel}</div>
                    <div className="text-xs text-blue-200 opacity-80">{stat.description}</div>
                  </div>
                ))}
              </div>
              
              {/* Future expansion info */}
              <div className="mt-12 pt-8 border-t border-blue-500/30">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Coming Soon to More Cities</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Harare', 'Bulawayo', 'Masvingo', 'Kariba', 'Victoria Falls'].map((city, index) => (
                      <div key={index} className="bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30">
                        <span className="text-sm text-blue-300">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;