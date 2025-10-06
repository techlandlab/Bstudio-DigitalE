import React from 'react';
import Card from './ui/Card';
import MapPinIcon from './icons/MapPinIcon';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-6">Have a project brewing or just want to say hi? We'd love to hear from you.</p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPinIcon className="w-8 h-8 text-green-600 mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-600">123 Creative Ave, San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-8 h-8 text-green-600 mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-8 h-8 text-green-600 mr-4"/>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">hello@bean.studio</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="h-96 lg:h-full w-full rounded-lg shadow-lg overflow-hidden">
               <img src="https://picsum.photos/seed/sfmap/800/600" alt="Map location" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;