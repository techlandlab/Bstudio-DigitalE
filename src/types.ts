import React from 'react';

// MenuItem interface for individual menu items.
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

// MenuCategory interface for grouping menu items.
export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// FIX: Define and export Service type to resolve import errors in ServiceCard.tsx and Services.tsx.
// Service interface for what-we-do items.
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// FIX: Define and export Project type to resolve import errors in ProjectCard.tsx and Portfolio.tsx.
// Project interface for portfolio items.
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}