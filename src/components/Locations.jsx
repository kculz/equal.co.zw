import { MapPin, Navigation, TrendingUp, Wifi, Globe, ChevronRight, RadioTower, Satellite, Router } from 'lucide-react';
import { useState, useEffect } from 'react';

const Locations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate map image loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const locations = [
    {
      city: 'Mutare',
      region: 'Manicaland',
      description: 'Multiple high-speed hotspots across the city with excellent coverage in CBD, residential and business areas.',
      hotspots: 'Premium coverage',
      status: 'Active',
      color: 'blue',
      icon: Router,
      signalStrength: 5
    },
    {
      city: 'Gweru',
      region: 'Midlands',
      description: 'Expanding network with strategic locations in commercial centers and residential neighborhoods.',
      hotspots: 'Growing network',
      status: 'Active',
      color: 'purple',
      icon: Satellite,
      signalStrength: 4
    },
    {
      city: 'Chimanimani',
      region: 'Manicaland',
      description: 'Reliable connectivity bringing internet access to this beautiful mountainous region.',
      hotspots: 'Community coverage',
      status: 'Active',
      color: 'blue',
      icon: RadioTower,
      signalStrength: 4
    },
    {
      city: 'Chipinge',
      region: 'Manicaland',
      description: 'Serving key locations with fast WiFi for businesses and residents alike.',
      hotspots: 'Multiple hotspots',
      status: 'Active',
      color: 'purple',
      icon: Router,
      signalStrength: 3
    },
    {
      city: 'Rusape',
      region: 'Manicaland',
      description: 'Connecting Rusape with quality internet in strategic commercial locations.',
      hotspots: 'Expanding coverage',
      status: 'Active',
      color: 'blue',
      icon: Satellite,
      signalStrength: 3
    },
    {
      city: 'Nyanga',
      region: 'Manicaland',
      description: 'Bringing reliable internet to tourist destinations and local communities.',
      hotspots: 'Tourist coverage',
      status: 'Active',
      color: 'purple',
      icon: RadioTower,
      signalStrength: 4
    }
  ];

  return (
    <section id="locations" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-blue-600/30 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Nationwide Coverage</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">Our Growing</span>
              <span className="block text-blue-500">Network</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Currently serving <span className="font-bold text-blue-400">6+ strategic locations</span> across Zimbabwe, with rapid expansion plans underway.
            </p>
          </div>

          {/* Locations Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 ${location.color === 'blue' ? 'bg-blue-600/5' : 'bg-purple-600/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-3 h-3 rounded-full ${location.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                          <span className="text-sm text-slate-400 font-medium">{location.region}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{location.city}</h3>
                      </div>
                      <div className={`w-12 h-12 ${location.color === 'blue' ? 'bg-blue-600/20' : 'bg-purple-600/20'} rounded-lg flex items-center justify-center border ${location.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${location.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {location.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-1.5 h-4 rounded-sm ${i < location.signalStrength ? 'bg-emerald-400' : 'bg-slate-600'}`}
                              style={{ 
                                height: `${(i + 1) * 0.4 + 0.8}rem`,
                                opacity: i < location.signalStrength ? 1 : 0.3
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-300 font-medium">{location.hotspots}</span>
                      </div>
                      <span className={`${location.color === 'blue' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'} px-3 py-1 rounded-full text-xs font-semibold border ${location.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'}`}>
                        {location.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coverage Map Visual */}
          <div className={`relative mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-2xl overflow-hidden border border-blue-600/30 h-64 md:h-96 group">
              {/* Map Image Background with Animated Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-purple-900/70 z-10"></div>
                <div 
                  className={`absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-cover bg-center transition-all duration-1000 ${
                    mapLoaded ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1194&q=80')`
                  }}
                >
                  {/* Animated grid overlay on map */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>
                </div>
                
                {/* Animated connection lines overlay */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="connection-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Connection network lines */}
                  <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="url(#connection-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
                  <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="url(#connection-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-200" />
                  <line x1="50%" y1="50%" x2="40%" y2="70%" stroke="url(#connection-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-400" />
                  <line x1="50%" y1="50%" x2="65%" y2="65%" stroke="url(#connection-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash animation-delay-600" />
                </svg>
              </div>

              {/* Content over the map */}
              <div className="relative z-20 h-full flex flex-col items-center justify-center p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl animate-pulse-glow"></div>
                  <Globe className="w-20 h-20 md:w-24 md:h-24 text-blue-400 animate-spin-very-slow" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Zimbabwe Coverage Map</h3>
                <p className="text-blue-200 text-center mb-6">Live network visualization with real-time connectivity</p>
                
                {/* Network nodes on map */}
                <div className="absolute inset-0 pointer-events-none">
                  {locations.slice(0, 6).map((location, index) => {
                    const positions = [
                      { x: '25%', y: '35%' }, // Mutare
                      { x: '45%', y: '60%' }, // Gweru
                      { x: '65%', y: '30%' }, // Chimanimani
                      { x: '75%', y: '45%' }, // Chipinge
                      { x: '55%', y: '45%' }, // Rusape
                      { x: '35%', y: '25%' }  // Nyanga
                    ];
                    
                    return (
                      <div 
                        key={index}
                        className="absolute group/node"
                        style={{
                          left: positions[index].x,
                          top: positions[index].y,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className="relative">
                          {/* Pulsing ring effect */}
                          <div className={`absolute inset-0 ${location.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'} rounded-full animate-ping opacity-30`}></div>
                          
                          {/* Connection line to center */}
                          <div className="absolute top-1/2 left-1/2 w-16 h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-50"></div>
                          
                          {/* Node with hover effect */}
                          <div className={`relative w-8 h-8 ${location.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'} rounded-full border-2 border-slate-900 group-hover/node:scale-150 transition-transform duration-300 flex items-center justify-center`}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          
                          {/* Location label on hover */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-auto">
                            {location.city}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Center Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-xl animate-pulse-slow"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-slate-900 flex items-center justify-center">
                        <Wifi className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Network status */}
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-blue-500/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Network Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expansion CTA */}
          <div className={`relative rounded-2xl overflow-hidden border border-purple-600/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoMTY4LCA4NSwgMjQ3LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0 lg:mr-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Coming to Your City Soon</h3>
                  <p className="text-xl text-blue-200 mb-4">
                    We're expanding into Harare, Bulawayo, and other major cities across Zimbabwe.
                  </p>
                  <p className="text-slate-300">
                    Request Equal WiFi in your area and be notified when we launch.
                  </p>
                </div>
                
                <a 
                  href="https://wa.me/263773640984?text=I'd%20like%20to%20request%20Equal%20Wifi%20in%20my%20area"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 whitespace-nowrap"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Request Coverage</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
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
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Locations;