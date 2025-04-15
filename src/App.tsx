import React, { useEffect } from 'react';
import { Code2, Cpu, Users, MessageSquare, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter, Check, Clock, Shield, Smartphone, Cloud, ArrowRight, ExternalLink } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      navigate('/' + (sectionId === 'home' ? '' : sectionId));
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
   useEffect(() => {
    // Handle initial load and browser back/forward
    const path = location.pathname.replace('/', '');
    const targetId = path || 'home';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-[#00D4FF]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text tracking-wider">HASANOVA</span>
                <span className="text-xs text-[#0A1647] tracking-[0.2em] font-medium">TECH LABS</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#0A1647] hover:text-[#00D4FF] transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-[#0A1647] hover:text-[#00D4FF] transition-colors">Services</button>
              <button onClick={() => scrollToSection('partner')} className="text-[#0A1647] hover:text-[#00D4FF] transition-colors">Partners</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#0A1647] hover:text-[#00D4FF] transition-colors">Contact</button>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-[#0A1647] to-[#00D4FF] p-[2px] rounded-md hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white px-6 py-2 rounded-[5px] hover:bg-transparent transition-colors duration-300">
                <span className="bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text group-hover:text-white font-semibold flex items-center">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>


         <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-[#0A1647]/5 to-white">
         <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between">
             <div className="md:w-1/2 mb-10 md:mb-0">
               <h1 className="text-5xl font-bold leading-tight mb-6 text-[#0A1647]">
                 Innovating Today for a
                 <span className="bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text"> Smarter Tomorrow</span>
               </h1>
               <p className="text-xl text-gray-600 mb-8">
                 At Hasanova Tech Labs, we empower businesses with cutting-edge technology solutions tailored to their unique needs. Your trusted partner in digital transformation.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                   href="contact" 
                   className="group bg-gradient-to-r from-[#0A1647] to-[#00D4FF] p-[2px] rounded-md hover:scale-105 transition-transform duration-300"
                 >
                   <div className="bg-white px-8 py-3 rounded-[5px] hover:bg-transparent transition-colors duration-300">
                     <span className="bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text group-hover:text-white font-semibold flex items-center">
                       Request Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                     </span>
                   </div>
                 </a>
                 <a 
                   href="services" 
                   className="group relative px-8 py-3 rounded-md border-2 border-[#0A1647] overflow-hidden"
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                   <span className="relative text-[#0A1647] group-hover:text-white font-semibold flex items-center">
                     Explore Services <ChevronRight className="ml-2 w-5 h-5" />
                   </span>
                 </a>
               </div>
             </div>
             <div className="md:w-1/2">
               <img 
                 src="/site_logo_1.jpg"
                 alt="Hasanova Tech Labs" 
                 className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
               />
             </div>
           </div>
         </div>
       </section>
 
      <section id="services" className="py-20 bg-white">
 <div className="container mx-auto px-6">
   <div className="text-center mb-16">
     <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">Our Services</h2>
     <p className="text-gray-600 max-w-2xl mx-auto">
       We combine affordability with top-tier expertise to deliver tailored solutions for startups, SMEs, and enterprises
     </p>
   </div>
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     <ServiceCard 
       icon={<Code2 size={32} className="text-[#00D4FF]" />}
       title="Web Development"
       description="Static & dynamic websites, custom CMS solutions, and affordable e-commerce platforms"
     />
     <ServiceCard 
       icon={<Cpu size={32} className="text-[#00D4FF]" />}
       title="IT Consulting"
       description="Expert advice and strategies to optimize your business processes and technology infrastructure"
     />
     <ServiceCard 
       icon={<Smartphone className="w-8 h-8 text-[#00D4FF]" />}
       title="Mobile App Development"
       description="Intuitive and scalable mobile applications to reach your audience effectively"
     />
     <ServiceCard 
       icon={<Cloud className="w-8 h-8 text-[#00D4FF]" />}
       title="Azure Cloud Consulting"
       description="Cost-effective Azure solutions, seamless migration, and secure infrastructure"
     />
   </div>
 </div>
</section>
    
      
     
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact us today to discuss how we can help your business achieve its goals!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email"
              info="info@hasanova.in"
            />
            <ContactCard 
              icon={<Phone size={24} />}
              title="Phone"
              info="+91 (888) 408-1427"
            />
            <ContactCard 
              icon={<MapPin size={24} />}
              title="Location"
              info="Chennai, India"
            />
          </div>
        </div>
      </section>
      
      <section id ="partner" className="py-20 bg-[#0A1647]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">
              Our Strategic Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together with Quadrate Tech Solutions, we deliver exceptional software development and IT services across India and Sri Lanka
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <img 
                  src="https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969"
                  alt="Quadrate Tech Solutions Logo" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-[#0A1647]">Quadrate Tech Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Leading software development company in Sri Lanka, specializing in cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/*  <a 
                    href="/partner"
                    className="group bg-gradient-to-r from-[#0A1647] to-[#00D4FF] p-[2px] rounded-md hover:scale-105 transition-transform duration-300"
                  >
                 Add a link to the partner page  <div className="bg-white px-6 py-2 rounded-[5px] hover:bg-transparent transition-colors duration-300">
                      <span className="bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text group-hover:text-white font-semibold flex items-center justify-center">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  
                  </a>
                    */} 
                  <a 
                    href="https://quadrate.lk/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group relative px-6 py-2 rounded-md border-2 border-[#0A1647] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative text-[#0A1647] group-hover:text-white font-semibold flex items-center justify-center">
                      Visit Website <ExternalLink className="ml-2 w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
     

   

      {/* Services Section */}
     
      {/* Features Section */}
      <section className="py-20 bg-[#0A1647]/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] text-transparent bg-clip-text">
                Why Choose Hasanova Tech Labs?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1647]">Affordable Excellence</h3>
                    <p className="text-gray-600">High-quality solutions that fit your budget without compromising on quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1647]">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support and maintenance for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0A1647] to-[#00D4FF] rounded-lg flex items-center justify-center text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A1647]">Certified Expertise</h3>
                    <p className="text-gray-600">Azure-certified professionals with years of industry experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-[#0A1647]">Web Development</h3>
                    <p className="text-sm text-gray-600">React, WordPress, Shopify</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-[#0A1647]">Cloud Solutions</h3>
                    <p className="text-sm text-gray-600">Azure DevOps, AI/ML, IoT</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-[#0A1647]">Mobile Apps</h3>
                    <p className="text-sm text-gray-600">iOS, Android, Cross-platform</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-semibold text-[#0A1647]">E-commerce</h3>
                    <p className="text-sm text-gray-600">Custom Solutions, Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
   {/* Partner Section */}
  
      {/* Footer */}
      <footer className="bg-[#0A1647] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/site_logo_1.jpg" alt="Hasanova Tech Labs Logo" className="h-16 mb-4 bg-white rounded-lg p-2" />
              <p className="text-gray-300">
                Empowering businesses through technology innovation
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
                <li><button onClick={() => scrollToSection('partner')} className="text-gray-400 hover:text-white">Partners</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Web Development</li>
                <li className="text-gray-400">IT Consulting</li>
                <li className="text-gray-400">Mobile App Development</li>
                <li className="text-gray-400">Azure Cloud Consulting</li>
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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A1647]/10">
      <div className="w-12 h-12 bg-gradient-to-r from-[#0A1647]/10 to-[#00D4FF]/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#0A1647]">{title}</h3>
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