import React, { useState } from 'react';
import type { MenuCategory } from '../types';
import MenuItem from './MenuItem';

const menuData: MenuCategory[] = [
  {
    id: 'espresso',
    name: 'Kawy Klasyczne',
    items: [
      { id: 1, name: 'Espresso', description: 'Intensywny shot kawy, serce każdego napoju.', price: '10zł', imageUrl: 'https://picsum.photos/seed/espresso/400/300' },
      { id: 2, name: 'Americano', description: 'Espresso połączone z gorącą wodą, delikatniejszy smak.', price: '12zł', imageUrl: 'https://picsum.photos/seed/americano/400/300' },
      { id: 3, name: 'Doppio', description: 'Podwójna porcja intensywnego espresso dla prawdziwych koneserów.', price: '14zł', imageUrl: 'https://picsum.photos/seed/doppio/400/300' },
    ],
  },
  {
    id: 'milk',
    name: 'Kawy Mleczne',
    items: [
      { id: 4, name: 'Cappuccino', description: 'Idealna harmonia espresso, spienionego mleka i mlecznej pianki.', price: '14zł', imageUrl: 'https://picsum.photos/seed/cappuccino/400/300' },
      { id: 5, name: 'Latte', description: 'Delikatne połączenie espresso z dużą ilością ciepłego mleka.', price: '15zł', imageUrl: 'https://picsum.photos/seed/latte/400/300' },
      { id: 6, name: 'Flat White', description: 'Podwójne espresso z kremowym, aksamitnym mlekiem.', price: '16zł', imageUrl: 'https://picsum.photos/seed/flatwhite/400/300' },
    ],
  },
  {
    id: 'alternatives',
    name: 'Alternatywy',
    items: [
      { id: 7, name: 'Chemex', description: 'Kawa parzona metodą przelewową, o czystym i delikatnym profilu.', price: '18zł', imageUrl: 'https://picsum.photos/seed/chemex/400/300' },
      { id: 8, name: 'Aeropress', description: 'Intensywna i pełna smaku kawa przygotowana pod ciśnieniem.', price: '17zł', imageUrl: 'https://picsum.photos/seed/aeropress/400/300' },
      { id: 9, name: 'Herbata Rzemieślnicza', description: 'Wybór najlepszych liściastych herbat z całego świata.', price: '12zł', imageUrl: 'https://picsum.photos/seed/tea/400/300' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desery',
    items: [
      { id: 10, name: 'Sernik Baskijski', description: 'Kremowy, karmelizowany sernik, który rozpływa się w ustach.', price: '18zł', imageUrl: 'https://picsum.photos/seed/cheesecake/400/300' },
      { id: 11, name: 'Czekoladowe Brownie', description: 'Intensywnie czekoladowe, z chrupiącą skórką i miękkim wnętrzem.', price: '15zł', imageUrl: 'https://picsum.photos/seed/brownie/400/300' },
      { id: 12, name: 'Croissant z masłem', description: 'Klasyczny, maślany rogalik, idealny do porannej kawy.', price: '10zł', imageUrl: 'https://picsum.photos/seed/croissant/400/300' },
    ],
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);

  const activeCategoryData = menuData.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4a2c2a] text-center mb-12">Nasze Menu</h2>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
                activeCategory === category.id 
                  ? 'bg-[#4a2c2a] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategoryData && activeCategoryData.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;