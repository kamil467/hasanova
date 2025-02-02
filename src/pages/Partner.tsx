import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Partner() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A1647]/5 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6 text-[#0A1647]">
                Strategic Partnership with
                <span className="block text-5xl mt-2 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">
                  Quadrate Tech Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Together with Quadrate Tech Solutions, we deliver exceptional software development and IT services across India and Sri Lanka.
              </p>
              <a 
                href="https://quadrate.lk/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-[#0A1647] to-[#00D4FF] p-[2px] rounded-md hover:scale-105 transition-transform duration-300 inline-block"
              >
                <div className="bg-white px-8 py-3 rounded-[5px] hover:bg-transparent transition-colors duration-300">
                  <span className="bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text group-hover:text-white font-semibold flex items-center">
                    Visit Partner Website <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </div>
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969"
                alt="Quadrate Tech Solutions Logo" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">
            Partnership Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Extended Service Coverage</h3>
                  <p className="text-gray-600">Seamless service delivery across India and Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Combined Expertise</h3>
                  <p className="text-gray-600">Access to a larger pool of skilled professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Comprehensive Solutions</h3>
                  <p className="text-gray-600">Enhanced service offerings through combined capabilities</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Local Presence</h3>
                  <p className="text-gray-600">Strong local support in both countries</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Faster Delivery</h3>
                  <p className="text-gray-600">Optimized project execution with distributed teams</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A1647] text-lg">Cost-Effective Solutions</h3>
                  <p className="text-gray-600">Competitive pricing through operational efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
