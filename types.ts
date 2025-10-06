import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

// Fix: Add and export MenuItem interface to resolve missing type error in components/MenuItem.tsx.
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Fix: Add and export MenuCategory interface to resolve missing type error in components/Menu.tsx.
export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
