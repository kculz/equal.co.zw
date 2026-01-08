import { Wifi, MapPin, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-300" />
              <span className="text-sm font-medium">Rapidly Expanding Across Zimbabwe</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fast, Reliable Wifi for Everyone
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Equal provides blazing-fast internet with hotspots across <span className="font-bold text-white">6+ locations in Manicaland and Gweru</span>, expanding quickly to connect every corner of Zimbabwe!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/263777928699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Connected Now
            </a>
            <button
              onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Check Coverage
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MapPin className="w-10 h-10 mb-4 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">6+ Locations</h3>
              <p className="text-blue-100">Active hotspots across Manicaland & Gweru</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Wifi className="w-10 h-10 mb-4 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-blue-100">High-speed connectivity you can rely on</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users className="w-10 h-10 mb-4 mx-auto text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">Growing Daily</h3>
              <p className="text-blue-100">Expanding to serve more communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;