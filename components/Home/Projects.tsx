import React from 'react';
import Featured from './Featured';

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full items-center justify-center py-16 px-8 lg:px-18"
    >
      <div className="flex flex-col lg:ml-20">
        <h2 className="font-patron font-black text-center text-2xl lg:text-4xl mb-10">
          Things I built
        </h2>
        <Featured />
      </div>
    </div>
  );
};

export default Projects;
