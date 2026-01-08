import { Target, Users, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Equal
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Equal is a wifi hotspot provider offering fast and reliable connectivity across Zimbabwe. With locations in Mutare and Gweru, we pride ourselves in providing top-quality internet access through our partnerships with major providers like Utande and Liquid Technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are expanding rapidly to serve even more locations, bringing affordable and accessible internet to communities across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, high-quality internet connectivity to every community in Zimbabwe, bridging the digital divide and empowering people through connectivity.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h3>
              <p className="text-gray-700 leading-relaxed">
                Students, professionals, businesses, and communities who need reliable internet access. From cafes to shopping centers, we bring connectivity where you need it most.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast speeds, reliable connections, and growing coverage. We partner with Zimbabwe's leading internet providers to ensure you get the best service available.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Growth Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Currently serving 6+ locations with plans to expand into major cities across Zimbabwe. Our goal is to make Equal Wifi available wherever you go.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Growing Fast, Connecting More</h3>
            <p className="text-xl text-blue-100 mb-6">
              From Manicaland to Gweru and beyond, we're building Zimbabwe's most accessible wifi network.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <div className="text-4xl font-bold">6+</div>
                <div className="text-blue-200">Active Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold">2</div>
                <div className="text-blue-200">Major Regions</div>
              </div>
              <div>
                <div className="text-4xl font-bold">∞</div>
                <div className="text-blue-200">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;