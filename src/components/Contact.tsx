import React from 'react';
import Card from './ui/Card';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4a2c2a] text-center mb-12">Odwiedź Nas</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-[#4a2c2a] mb-6">Informacje Kontaktowe</h3>
              <p className="text-gray-600 mb-6">Masz pytanie, chcesz zarezerwować stolik lub po prostu się przywitać? Czekamy na Ciebie!</p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPinIcon className="w-8 h-8 text-[#d4a373] mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Adres</h4>
                    <p className="text-gray-600">ul. Kawowa 12, 00-001 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-8 h-8 text-[#d4a373] mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-8 h-8 text-[#d4a373] mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">kontakt@beanstudiocafe.pl</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="h-96 lg:h-full w-full rounded-lg shadow-lg overflow-hidden">
               <img src="https://picsum.photos/seed/warsawmap/800/600" alt="Map location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;