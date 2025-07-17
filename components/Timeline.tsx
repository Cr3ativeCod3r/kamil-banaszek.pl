import React from 'react';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: '2023 - Present',
    title: 'Freelance Full-Stack Developer',
    company: 'Various Clients & Organizations',
    description: 'Building full-stack web applications (MERN stack) for companies and NGOs. CMS development, registration forms, interactive maps, deployment with Docker.',
  },
  {
    id: 2,
    date: '2022 - Present',
    title: 'BSc Computer Science – Software Engineering',
    company: 'Lublin University of Technology',
    description: 'Full-time degree focused on software engineering. Working with React, Node.js, MongoDB, C# and Python.',
  },
  {
    id: 3,
    date: '2018 - 2022',
    title: 'IT Technician',
    company: 'Zespół Szkół Elektronicznych, Radom',
    description: 'Technical high school specializing in IT. Certifications EE08 and EE09. Skills in networking, databases, and programming.',
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden mb-8">
        <div className={`flex items-start ${isOdd ? 'flex-row-reverse' : ''}`}>
          <div className={`flex flex-col items-center ${isOdd ? 'ml-4' : 'mr-4'} flex-shrink-0`}>
            <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            </div>
            {index !== timelineData.length - 1 && (
              <div className="w-px h-20 bg-slate-700 mt-2"></div>
            )}
          </div>
          <div className="bg-slate-800 rounded-lg shadow-lg px-4 py-4 flex-1">
            <p className="text-xs font-semibold text-sky-400 mb-1">{item.date}</p>
            <h3 className="font-bold text-white text-sm mb-1 leading-tight">{item.title}</h3>
            <h4 className="font-medium text-slate-300 text-xs mb-2">{item.company}</h4>
            <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center w-full mb-8">
        <div className="w-5/12">
          {!isOdd && (
            <div className="bg-slate-800 rounded-lg shadow-xl px-6 py-4 transform transition-transform duration-300 hover:scale-105">
              <p className="text-sm font-semibold text-sky-400">{item.date}</p>
              <h3 className="mb-2 font-bold text-white text-xl">{item.title}</h3>
              <h4 className="mb-3 font-semibold text-slate-300 text-md">{item.company}</h4>
              <p className="text-sm leading-snug tracking-wide text-slate-400">{item.description}</p>
            </div>
          )}
        </div>
        
        <div className="z-20 flex items-center justify-center bg-slate-700 shadow-xl w-8 h-8 rounded-full">
          <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
        </div>
        
        <div className="w-5/12">
          {isOdd && (
            <div className="bg-slate-800 rounded-lg shadow-xl px-6 py-4 transform transition-transform duration-300 hover:scale-105">
              <p className="text-sm font-semibold text-sky-400">{item.date}</p>
              <h3 className="mb-2 font-bold text-white text-xl">{item.title}</h3>
              <h4 className="mb-3 font-semibold text-slate-300 text-md">{item.company}</h4>
              <p className="text-sm leading-snug tracking-wide text-slate-400">{item.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Work Timeline</h2>
          <p className="text-base md:text-lg text-slate-400 mt-2">My professional journey and key milestones.</p>
        </div>
        
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-700"></div>
          
          {/* Timeline items */}
          <div>
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;