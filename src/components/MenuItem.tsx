import React from 'react';
import type { MenuItem as MenuItemType } from '../types';
import Card from './ui/Card';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Card className="flex flex-col h-full">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-[#4a2c2a]">{item.name}</h3>
          <p className="text-xl font-bold text-[#d4a373] whitespace-nowrap ml-4">{item.price}</p>
        </div>
        <p className="text-gray-600 flex-grow">{item.description}</p>
      </div>
    </Card>
  );
};

export default MenuItem;