import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <img
                src="/ja.jpg"
                alt="Kamil Banaszek, Full Stack Developer"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-sky-400 rounded-lg -z-10 transform -rotate-3"></div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-slate-300 mb-4 text-lg">
              Hi! I'm Kamil, a full-stack developer focused on building modern web applications using the MERN stack and deploying them on Linux servers with Docker. I enjoy turning complex challenges into scalable, maintainable code.
            </p>
            <p className="text-slate-300 mb-6 text-lg">
              I've developed complete systems from scratch, including a telecom inventory management app and a CMS-powered event platform for a foundation. Currently studying Software Engineering, I'm always exploring new tech like FastAPI and C# to expand my toolkit.
            </p>
            <a href="#contact" className="text-sky-400 font-semibold text-lg group">
              Let’s connect 
              <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;