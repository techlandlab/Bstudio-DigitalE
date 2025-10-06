import React from 'react';

// Icons
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import MapPinIcon from './icons/MapPinIcon';
import MoonIcon from './icons/MoonIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1221] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <a href="#" className="flex items-center text-2xl font-bold text-white">
               <MoonIcon className="h-7 w-7 mr-2 text-green-500"/>
              <span>Bean Studio</span>
            </a>
            <p className="max-w-xs text-gray-400">
              Crafting exceptional digital experiences with the precision of a master barista and the creativity of an artist.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition-colors"><TwitterIcon className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition-colors"><FacebookIcon className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition-colors"><LinkedInIcon className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition-colors"><InstagramIcon className="w-5 h-5 text-white" /></a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter to get the latest news and insights.</p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email for newsletter"
                className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800" />
        
        {/* Bottom section with contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-12">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-green-500/10 p-3 rounded-full mr-4">
              <MailIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:hello@bean.studio" className="text-white font-semibold hover:underline">hello@bean.studio</a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-green-500/10 p-3 rounded-full mr-4">
              <PhoneIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a href="tel:+15551234567" className="text-white font-semibold hover:underline">+1 (555) 123-4567</a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-green-500/10 p-3 rounded-full mr-4">
              <MapPinIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-semibold">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;