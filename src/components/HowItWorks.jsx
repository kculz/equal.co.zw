import { Search, Wifi, CreditCard, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Find an Equal Hotspot',
      description: 'Look for Equal Wifi hotspots in popular locations across Mutare, Gweru, and other cities we serve. Check our locations page or contact us to find the nearest hotspot.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wifi,
      number: '02',
      title: 'Connect to the Network',
      description: 'Select the Equal Wifi network on your device. Our hotspots are easy to identify and connect to from any smartphone, laptop, or tablet.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      number: '03',
      title: 'Purchase Access',
      description: 'Choose a package that suits your needs and make payment. We offer flexible options for daily, weekly, or extended access. Affordable packages available for everyone.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Headphones,
      number: '04',
      title: 'Get Support Anytime',
      description: 'Need help? Our support team is available via WhatsApp to assist you with connections, payments, or any questions you may have.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting connected with Equal Wifi is simple and fast. Follow these easy steps to start enjoying high-speed internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start mb-6">
                      <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-4 mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-gray-200">{step.number}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Connected?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users across Zimbabwe enjoying fast, reliable internet with Equal Wifi. Contact us today to get started!
            </p>
            <a
              href="https://wa.me/263777928699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Contact Us on WhatsApp</span>
              <Headphones className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;