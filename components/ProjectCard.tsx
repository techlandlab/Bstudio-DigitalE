import React from 'react';
import type { Project } from '../types';
import Card from './ui/Card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full group">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
