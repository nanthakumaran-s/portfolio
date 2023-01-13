import React from 'react';
import { TbBrandGithub, TbLink } from 'react-icons/tb';
import { previous, projectsType } from '../../data/projects';
import Featured from './Featured';

const ProjectCard = ({ project }: { project: projectsType }) => {
  return (
    <div className="flex flex-col w-full lg:w-[300px] px-8 py-6 rounded-xl bg-skin-fill-secondary mb-3 lg:mr-3">
      <div className="flex gap-4 items-center">
        <h4 className="font-patron font-bold text-xl mt-3 mb-2 lg:text-3xl">{project.name}</h4>
        <div className="flex items-center">
          {project.github !== '' && (
            <a href={project.github} target="blank">
              <TbBrandGithub className="w-6 h-6 stroke-stone-700 hover:stroke-indigo-600 cursor-pointer" />
            </a>
          )}
          {project.link !== '' && (
            <a href={project.link} target="blank">
              <TbLink className="w-6 h-6 stroke-stone-700 hover:stroke-indigo-600 cursor-pointer" />
            </a>
          )}
        </div>
      </div>
      <p className="font-patron font-normal text-sm lg:text-lg">{project.description}</p>
      <div className="flex gap-3 items-center flex-wrap w-full mt-5">
        {project.caseStudy && (
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-patron font-medium text-sm text-indigo-600 border-dashed border-2 border-indigo-600 px-2 py-1 rounded-md hover:text-indigo-800 hover:border-indigo-800 lg:text-lg"
            >
              Case study
            </a>
            <div className="w-1 h-6 border-dashed border-l-2 border-gray-400 lg:h-10" />
          </div>
        )}
        {project.stack.map((stack: string, index: number) => (
          <p
            className="font-patron font-medium text-sm text-gray-500 border-dashed border-2 border-gray-400 px-2 py-1 rounded-md lg:text-lg"
            key={index}
          >
            {stack}
          </p>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col w-full items-center justify-center py-11 px-8 lg:px-18"
    >
      <div className="flex flex-col lg:ml-20">
        <h2 className="font-patron font-black text-center text-2xl lg:text-4xl mb-10">
          Things I built
        </h2>
        <Featured />
        <h2 className="font-patron font-bold text-center text-xl lg:text-3xl mt-10 mb-10">
          Previously,
        </h2>
        <div className="flex flex-col w-full lg:flex-row lg:flex-wrap lg:px-40 lg:justify-center">
          {previous.map((project: projectsType, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
