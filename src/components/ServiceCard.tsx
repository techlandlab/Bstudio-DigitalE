import React from 'react';
import type { Service } from '../types';
import Card from './ui/Card';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  return (
    <Card className="text-center p-8 flex flex-col items-center h-full">
      <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 flex-grow">{service.description}</p>
    </Card>
  );
};

export default ServiceCard;