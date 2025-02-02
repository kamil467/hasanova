import React from 'react';
import { Code2, Cpu, Users, MessageSquare, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://i.imgur.com/YEK4Lw0.png" alt="Hasanova Tech Labs Logo" className="h-10" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Transforming Ideas into
                <span className="text-blue-600"> Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hasanova Tech Labs provides cutting-edge IT solutions and consultancy services to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
                  Get Started <ChevronRight className="ml-2" size={20} />
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="IT Services" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code2 size={32} />}
              title="Software Development"
              description="Custom software solutions built with cutting-edge technologies"
            />
            <ServiceCard 
              icon={<Cpu size={32} />}
              title="IT Consulting"
              description="Strategic technology consulting to drive business growth"
            />
            <ServiceCard 
              icon={<Users size={32} />}
              title="Team Augmentation"
              description="Skilled IT professionals to strengthen your team"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">About Hasanova Tech Labs</h2>
              <p className="text-gray-600 mb-6">
                We are a dynamic IT services and consultancy company committed to delivering innovative solutions that drive digital transformation. Our team of experts combines technical excellence with industry insights to help businesses succeed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Team</h3>
                    <p className="text-gray-600">Skilled professionals</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">24/7 Support</h3>
                    <p className="text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">Ready to start your digital transformation journey?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email"
              info="contact@hasanova.in"
            />
            <ContactCard 
              icon={<Phone size={24} />}
              title="Phone"
              info="+91 (XXX) XXX-XXXX"
            />
            <ContactCard 
              icon={<MapPin size={24} />}
              title="Location"
              info="Bangalore, India"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="https://i.imgur.com/YEK4Lw0.png" alt="Hasanova Tech Labs Logo" className="h-10 mb-4" />
              <p className="text-gray-400">
                Empowering businesses through technology innovation
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Software Development</li>
                <li className="text-gray-400">IT Consulting</li>
                <li className="text-gray-400">Team Augmentation</li>
                <li className="text-gray-400">Digital Transformation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hasanova Tech Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 border rounded-lg hover:shadow-lg transition duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactCard({ icon, title, info }) {
  return (
    <div className="text-center p-8 border rounded-lg hover:shadow-lg transition duration-300">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}

export default App;