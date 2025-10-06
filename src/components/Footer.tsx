import React from 'react';

// Icons
import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import MapPinIcon from './icons/MapPinIcon';
import MoonIcon from './icons/MoonIcon';
import OpeningHours from './OpeningHours';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0e0b] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <a href="#" className="flex items-center text-2xl font-bold text-white">
               <MoonIcon className="h-7 w-7 mr-2 text-[#d4a373]"/>
              <span>Bean Studio Cafe</span>
            </a>
            <p className="max-w-xs text-gray-400">
              Miejsce, gdzie każda filiżanka kawy to małe dzieło sztuki. Zapraszamy na chwilę relaksu w sercu miasta.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-[#d4a373] p-2 rounded-full transition-colors"><TwitterIcon className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-[#d4a373] p-2 rounded-full transition-colors"><FacebookIcon className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-[#d4a373] p-2 rounded-full transition-colors"><InstagramIcon className="w-5 h-5 text-white" /></a>
            </div>
          </div>
          
          {/* Column 2: Nawigacja */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nawigacja</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Column 3: Godziny otwarcia */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Godziny Otwarcia</h3>
            <OpeningHours />
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bądź na bieżąco</h3>
            <p className="mb-4 text-gray-400">Zapisz się do naszego newslettera, aby otrzymywać informacje o nowościach i promocjach.</p>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Wpisz swój email" 
                aria-label="Email for newsletter"
                className="bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              />
              <button 
                type="submit" 
                className="bg-[#d4a373] hover:bg-[#c8935e] text-[#4a2c2a] font-bold py-2 px-4 rounded-md transition-colors"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800" />
        
        {/* Bottom section with contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-12">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-[#d4a373]/10 p-3 rounded-full mr-4">
              <MailIcon className="w-6 h-6 text-[#d4a373]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:kontakt@beanstudiocafe.pl" className="text-white font-semibold hover:underline">kontakt@beanstudiocafe.pl</a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-[#d4a373]/10 p-3 rounded-full mr-4">
              <PhoneIcon className="w-6 h-6 text-[#d4a373]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Telefon</p>
              <a href="tel:+48123456789" className="text-white font-semibold hover:underline">+48 123 456 789</a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-[#d4a373]/10 p-3 rounded-full mr-4">
              <MapPinIcon className="w-6 h-6 text-[#d4a373]" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Lokalizacja</p>
              <p className="text-white font-semibold">ul. Kawowa 12, Warszawa</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Bean Studio Cafe. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;