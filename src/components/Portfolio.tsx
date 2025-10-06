import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'Artisan Coffee Roasters', 
    description: 'A complete branding and e-commerce solution for a local coffee brand, boosting their online sales by 200%.',
    imageUrl: 'https://picsum.photos/seed/project1/500/400',
    tags: ['Branding', 'E-commerce', 'UI/UX']
  },
  { 
    id: 2, 
    title: 'Fintech Mobile App', 
    description: 'Designed and developed a user-friendly mobile app for a startup, focusing on a clean UI and secure transactions.',
    imageUrl: 'https://picsum.photos/seed/project2/500/400',
    tags: ['Mobile App', 'UI/UX', 'React Native']
  },
  { 
    id: 3, 
    title: 'SaaS Platform Redesign', 
    description: 'Overhauled the user experience for a leading SaaS company, resulting in higher user engagement and retention.',
    imageUrl: 'https://picsum.photos/seed/project3/500/400',
    tags: ['UX Research', 'Web App', 'Figma']
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;