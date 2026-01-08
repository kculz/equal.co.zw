import { Shield, Handshake } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Utande',
      logo: '/partners/utande-logo.png',
      description: 'Leading telecommunications provider delivering high-speed connectivity across Zimbabwe.',
      alt: 'Utande Logo'
    },
    {
      name: 'Liquid Technologies',
      logo: '/partners/liquid-logo.png',
      description: 'Pan-African technology group providing world-class internet infrastructure and services.',
      alt: 'Liquid Technologies Logo'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Handshake className="w-5 h-5" />
              <span className="font-semibold">Trusted Partnerships</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with Zimbabwe's leading internet providers to deliver top-quality connectivity you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="bg-gray-50 rounded-2xl p-8 mb-6 flex items-center justify-center h-48">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-400">{partner.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {partner.name}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <Shield className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-3xl font-bold mb-4">Quality You Can Trust</h3>
                <p className="text-xl text-blue-100 mb-4">
                  By partnering with major providers like Utande and Liquid Technologies, we ensure that every Equal Wifi hotspot delivers the speed, reliability, and performance you expect.
                </p>
                <p className="text-lg text-blue-200">
                  Our partnerships allow us to expand rapidly while maintaining the highest standards of service across all our locations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              Interested in partnering with Equal Wifi to bring connectivity to your location?
            </p>
            <a
              href="https://wa.me/263777928699?text=I'm%20interested%20in%20partnering%20with%20Equal%20Wifi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <Handshake className="w-5 h-5" />
              <span>Become a Partner</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;