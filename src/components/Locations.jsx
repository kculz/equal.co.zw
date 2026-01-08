import { MapPin, Navigation, TrendingUp } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      city: 'Mutare',
      region: 'Manicaland',
      description: 'Providing fast and stable internet across the city, with easy access in popular areas and growing coverage.',
      hotspots: 'Multiple hotspots',
      status: 'Active'
    },
    {
      city: 'Gweru',
      region: 'Midlands',
      description: 'Expanding our reach with reliable hotspots in Gweru, connecting you wherever you need it most.',
      hotspots: 'Growing coverage',
      status: 'Active'
    },
    {
      city: 'Chimanimani',
      region: 'Manicaland',
      description: 'Bringing connectivity to Chimanimani with reliable internet access for the community.',
      hotspots: 'Available',
      status: 'Active'
    },
    {
      city: 'Chipinge',
      region: 'Manicaland',
      description: 'Serving Chipinge with fast wifi hotspots in key locations across the town.',
      hotspots: 'Available',
      status: 'Active'
    },
    {
      city: 'Rusape',
      region: 'Manicaland',
      description: 'Expanding connectivity in Rusape with growing hotspot locations.',
      hotspots: 'Available',
      status: 'Active'
    },
    {
      city: 'Nyanga',
      region: 'Manicaland',
      description: 'Bringing internet access to Nyanga and surrounding areas.',
      hotspots: 'Available',
      status: 'Active'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Rapidly Expanding</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Locations
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Currently serving <span className="font-bold text-blue-600">6+ locations</span> across Manicaland and Gweru, with plans to expand into more cities across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {location.city}
                    </h3>
                    <p className="text-sm text-gray-500">{location.region}</p>
                  </div>
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{location.hotspots}</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {location.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-bold mb-4">Coming to Your City Soon</h3>
                <p className="text-xl text-blue-100 mb-2">
                  We're expanding into Harare, Bulawayo, and other major cities across Zimbabwe.
                </p>
                <p className="text-blue-200">
                  Request Equal Wifi in your area and be the first to know when we arrive.
                </p>
              </div>
              <a
                href="https://wa.me/263777928699?text=I'd%20like%20to%20request%20Equal%20Wifi%20in%20my%20area"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg flex items-center space-x-2 whitespace-nowrap"
              >
                <Navigation className="w-5 h-5" />
                <span>Request Coverage</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;