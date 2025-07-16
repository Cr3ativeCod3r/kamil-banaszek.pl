import React from 'react';
import { Skill } from '../types';
import {
  JsIcon,
  TsIcon,
  PythonIcon,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  DockerIcon,
  MySQLIcon,
  MongoIcon,
  GitIcon,
  LinuxIcon,
  CSharpIcon,
} from '../constants';

const skillsData: Skill[] = [
  { name: 'JavaScript', icon: <JsIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'TypeScript', icon: <TsIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Python', icon: <PythonIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'C#', icon: <CSharpIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'React.js / Next.js', icon: <ReactIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Node.js', icon: <NodeIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Express.js', icon: <ExpressIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'MongoDB', icon: <MongoIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'MySQL', icon: <MySQLIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Docker', icon: <DockerIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Git & GitHub', icon: <GitIcon className="w-10 h-10 mb-4 text-sky-400" /> },
  { name: 'Linux & VPS', icon: <LinuxIcon className="w-10 h-10 mb-4 text-sky-400" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Stack</h2>
          <p className="text-lg text-slate-400 mt-2">Technologies I use to build and ship modern web applications.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {skill.icon}
              <h3 className="font-semibold text-white text-sm text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;