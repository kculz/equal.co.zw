import { Star, Quote, User, MapPin, ChevronLeft, ChevronRight, ThumbsUp, Zap, Users as UsersIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Tinashe M.',
      location: 'Mutare',
      role: 'University Student',
      content: 'Equal WiFi has been a game-changer for my studies. The connection is fast and reliable, even during peak hours. I can now access online resources and attend virtual classes without any issues.',
      rating: 5,
      imageColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30',
      icon: User,
      stats: { speed: '95 Mbps', uptime: '99%' }
    },
    {
      id: 2,
      name: 'Sarah K.',
      location: 'Gweru',
      role: 'Small Business Owner',
      content: "As a small business owner, I rely on stable internet for my operations. Equal WiFi hasn't let me down. Their customer support is responsive and the service is consistently good.",
      rating: 5,
      imageColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30',
      icon: UsersIcon,
      stats: { speed: '85 Mbps', uptime: '98%' }
    },
    {
      id: 3,
      name: 'Blessing C.',
      location: 'Chimanimani',
      role: 'Remote Worker',
      content: 'Working remotely from Chimanimani was challenging until I found Equal WiFi. The connection is stable enough for video calls and large file transfers. It has transformed my work life.',
      rating: 4,
      imageColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30',
      icon: Zap,
      stats: { speed: '80 Mbps', uptime: '97%' }
    },
    {
      id: 4,
      name: 'Takudzwa M.',
      location: 'Mutare',
      role: 'Gaming Enthusiast',
      content: 'Low latency and high speeds make Equal WiFi perfect for gaming. I no longer experience lag during online matches. The packages are affordable for the quality provided.',
      rating: 5,
      imageColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30',
      icon: ThumbsUp,
      stats: { speed: '90 Mbps', uptime: '99%' }
    },
    {
      id: 5,
      name: 'Grace N.',
      location: 'Chipinge',
      role: 'Digital Content Creator',
      content: 'Uploading videos used to take hours. With Equal WiFi, my uploads complete in minutes. The reliability has allowed me to grow my online presence significantly.',
      rating: 5,
      imageColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30',
      icon: User,
      stats: { speed: '88 Mbps', uptime: '98%' }
    },
    {
      id: 6,
      name: 'Robert T.',
      location: 'Rusape',
      role: 'Hotel Manager',
      content: 'We provide Equal WiFi to our hotel guests and the feedback has been overwhelmingly positive. It has become one of our key amenities that guests specifically ask for.',
      rating: 4,
      imageColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30',
      icon: UsersIcon,
      stats: { speed: '75 Mbps', uptime: '96%' }
    }
  ];

  const stats = [
    { value: '4.8/5', label: 'Average Rating', icon: Star, color: 'text-yellow-400' },
    { value: '500+', label: 'Happy Customers', icon: UsersIcon, color: 'text-blue-400' },
    { value: '99%', label: 'Satisfaction Rate', icon: ThumbsUp, color: 'text-emerald-400' },
    { value: '24/7', label: 'Active Support', icon: Zap, color: 'text-purple-400' }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-yellow-600/30 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Customer Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">What Our</span>
              <span className="block text-blue-500">Customers Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied users across Zimbabwe who trust Equal WiFi for reliable, high-speed internet.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-')}/20 rounded-lg flex items-center justify-center border ${stat.color.replace('text-', 'border-')}/30 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonials Slider */}
          <div className={`relative mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Quote icon background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
              <Quote className="w-full h-full text-blue-400" />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700/50 hover:border-blue-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700/50 hover:border-blue-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-4xl mx-auto">
                      <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border ${testimonial.borderColor} transition-all duration-300 hover:scale-[1.02]`}>
                        {/* Rating */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                              />
                            ))}
                          </div>
                          <div className={testimonial.imageColor + " w-12 h-12 rounded-lg flex items-center justify-center border " + testimonial.borderColor}>
                            <Quote className="w-6 h-6 text-slate-300" />
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <p className="text-lg md:text-xl text-slate-300 italic mb-8 leading-relaxed">
                          "{testimonial.content}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center justify-between pt-8 border-t border-slate-700/50">
                          <div className="flex items-center space-x-4">
                            <div className={`${testimonial.imageColor} w-16 h-16 rounded-full flex items-center justify-center border ${testimonial.borderColor}`}>
                              <testimonial.icon className="w-8 h-8 text-slate-300" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold">{testimonial.name}</h4>
                              <div className="flex items-center space-x-2 text-slate-400">
                                <MapPin className="w-4 h-4" />
                                <span>{testimonial.location}</span>
                                <span className="text-slate-600">•</span>
                                <span>{testimonial.role}</span>
                              </div>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="hidden md:block text-right">
                            <div className="text-sm text-slate-400 mb-2">Connection Quality</div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-end space-x-2">
                                <Zap className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-slate-300">{testimonial.stats.speed}</span>
                              </div>
                              <div className="flex items-center justify-end space-x-2">
                                <div className="w-4 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                </div>
                                <span className="text-sm text-slate-300">{testimonial.stats.uptime} Uptime</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Testimonials Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                      />
                    ))}
                  </div>
                  <div className={testimonial.imageColor + " w-10 h-10 rounded-lg flex items-center justify-center border " + testimonial.borderColor}>
                    <Quote className="w-5 h-5 text-slate-300" />
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-700/50">
                  <div className={testimonial.imageColor + " w-10 h-10 rounded-full flex items-center justify-center border " + testimonial.borderColor}>
                    <testimonial.icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-400">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`relative rounded-2xl overflow-hidden border border-blue-600/30 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0 lg:mr-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Happy Customers</h3>
                  <p className="text-xl text-blue-200">
                    Experience the difference that reliable, high-speed internet can make.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/263716409412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
                  >
                    <span>Get Started Now</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <button
                    onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 border border-purple-600/30 hover:border-purple-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Find Your Location</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;