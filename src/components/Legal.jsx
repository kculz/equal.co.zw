import { Shield, FileText, AlertCircle, Lock, Users, Globe, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Legal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-slate-900 text-white py-20">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-10"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-blue-600/30 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-200">Legal & Compliance</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">Policies &</span>
              <span className="block text-blue-500">Guidelines</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transparent policies that protect your privacy and ensure fair usage for all our customers.
            </p>
          </div>

          {/* Legal Sections */}
          <div className="space-y-16">
            {/* Privacy Policy */}
            <div id="privacy" className={`scroll-mt-24 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                  <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Privacy Policy</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Last Updated: January 2026</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-blue-400">Information We Collect</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Device information and MAC addresses</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Usage statistics and connection data</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Contact information for support</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-blue-400">Data Protection</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Enterprise-grade encryption</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Regular security audits</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300">Strict access controls</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div id="terms" className={`scroll-mt-24 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Terms & Conditions</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Service Agreement</h3>
                  <p className="text-slate-300 mb-4">
                    By using Equal WiFi services, you agree to our terms of service which ensure fair usage and quality service for all customers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">99.9% uptime commitment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">Fair usage policies apply</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-300 text-sm">24/7 customer support</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">User Responsibilities</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Keep access credentials secure and confidential</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Use services responsibly and legally</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Report any security concerns immediately</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptable Use Policy */}
            <div id="acceptable-use" className={`scroll-mt-24 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                  <AlertCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold">Acceptable Use Policy</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Permitted Uses</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Educational research and learning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Business communications and work</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Personal communication and entertainment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">E-commerce and online transactions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-xl font-bold mb-4 text-rose-400">Prohibited Activities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Illegal activities and copyright infringement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Network attacks and unauthorized access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Spamming and bulk unsolicited communications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">Excessive bandwidth consumption</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className={`mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 text-center border border-blue-600/30 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 mx-auto">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Questions About Our Policies?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our team is here to help clarify any questions you may have about our legal policies and terms of service.
            </p>
            <a
              href="https://wa.me/263773640984"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              <span>Contact Our Legal Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;