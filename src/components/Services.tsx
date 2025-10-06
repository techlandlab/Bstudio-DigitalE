import React from 'react';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';
import CodeIcon from './icons/CodeIcon';
import MobileIcon from './icons/MobileIcon';
import DesignIcon from './icons/DesignIcon';
import StrategyIcon from './icons/StrategyIcon';
import CartIcon from './icons/CartIcon';

const servicesData: Service[] = [
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'We build fast, responsive, and secure websites that form the foundation of your digital presence.',
    icon: CodeIcon,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide a seamless and enjoyable user experience.',
    icon: DesignIcon,
  },
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'A solid plan is key. We help you define your goals and create a roadmap for digital success.',
    icon: StrategyIcon,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Building powerful online stores that drive sales and provide a smooth shopping experience for your customers.',
    icon: CartIcon,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;