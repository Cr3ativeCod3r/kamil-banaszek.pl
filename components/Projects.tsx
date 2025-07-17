import React from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  url?: string; 
}

const projectsData: Project[] = [
  {
    id: 1,
    name: 'chorobymozgu.pl',
    description: 'A medical blog maintained by a foundation, featuring articles on brain health and research.',
    image: '/fchm.png',
    url: 'https://chorobymozgu.pl'
  },
  {
    id: 2,
    name: 'korbank',
    description: 'An inventory web app for a telecom company to manage equipment and fiber network infrastructure. ( inside project )',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'swiatnews.pl',
    description: 'A news portal built with Next.js SSR, featuring dynamic content and SEO optimization per post.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=center'
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm transition-colors duration-200"
          >
            View Project
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects ( to update )
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover my latest web development projects showcasing modern technologies and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;