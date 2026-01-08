import { Shield, FileText, AlertCircle } from 'lucide-react';

const Legal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div id="privacy" className="mb-16 scroll-mt-20">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 2026
              </p>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h3>
                <p className="mb-3">
                  Equal Wifi collects minimal information necessary to provide our services. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (MAC address, device type)</li>
                  <li>Usage data (connection times, data usage)</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Payment information for service access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h3>
                <p className="mb-3">
                  We use collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our wifi services</li>
                  <li>Process payments and manage accounts</li>
                  <li>Improve our network performance and coverage</li>
                  <li>Communicate service updates and support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Sharing</h3>
                <p>
                  We do not sell your personal information. We may share data with our technology partners (Utande, Liquid Technologies) solely to provide services, and with authorities when required by law.
                </p>
              </div>
            </div>
          </div>

          <div id="terms" className="mb-16 scroll-mt-20">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Terms & Conditions</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 2026
              </p>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Agreement</h3>
                <p>
                  By using Equal Wifi services, you agree to these terms and conditions. These terms govern your access to and use of our wifi hotspot services across all our locations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Availability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services are provided "as is" and may be subject to interruptions</li>
                  <li>We strive for 99% uptime but cannot guarantee uninterrupted service</li>
                  <li>Coverage areas are subject to change and expansion</li>
                  <li>Speed and performance may vary based on location and network conditions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is required before service access</li>
                  <li>Packages are non-refundable unless service is unavailable</li>
                  <li>Prices may change with notice</li>
                  <li>Unused data or time does not roll over unless specified</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep your access credentials secure</li>
                  <li>Use services in compliance with all laws</li>
                  <li>Do not share your access with unauthorized users</li>
                  <li>Report any security vulnerabilities or issues immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
                <p>
                  Equal Wifi is not liable for any indirect, incidental, or consequential damages arising from use of our services. Our liability is limited to the amount paid for the service.
                </p>
              </div>
            </div>
          </div>

          <div id="acceptable-use" className="scroll-mt-20">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Acceptable Use Policy</h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Last Updated:</strong> January 2026
              </p>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Prohibited Activities</h3>
                <p className="mb-3">
                  The following activities are strictly prohibited when using Equal Wifi services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Illegal activities including but not limited to piracy, fraud, or harassment</li>
                  <li>Distributing malware, viruses, or other harmful software</li>
                  <li>Attempting to gain unauthorized access to other networks or systems</li>
                  <li>Excessive bandwidth consumption that impacts other users</li>
                  <li>Hosting servers or running commercial services without authorization</li>
                  <li>Sending spam or unsolicited bulk communications</li>
                  <li>Accessing or distributing illegal or harmful content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Network Conduct</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Do not attempt to bypass security measures or access restrictions</li>
                  <li>Respect other users' access and bandwidth</li>
                  <li>Do not use automated tools to create multiple accounts</li>
                  <li>Report any network abuse or security issues immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enforcement</h3>
                <p className="mb-3">
                  Violations of this policy may result in:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Immediate suspension or termination of service</li>
                  <li>Reporting to appropriate authorities</li>
                  <li>Legal action if necessary</li>
                  <li>No refund for paid services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Monitoring</h3>
                <p>
                  While we respect user privacy, Equal Wifi reserves the right to monitor network traffic to ensure compliance with this policy and to protect our network and users.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Policies?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about our legal policies, please contact us.
            </p>
            <a
              href="https://wa.me/263777928699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;