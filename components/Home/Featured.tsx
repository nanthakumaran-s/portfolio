/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { TbBrandGithub, TbLink } from 'react-icons/tb';
import { featured, projectsType } from '../../data/projects';

const Featured = () => {
  const [show, setShow] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tick, setTick] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (tick) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds % 7 === 0) {
          if (show === 4) {
            setShow(0);
          } else {
            setShow(show + 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [tick, show, seconds]);

  return (
    <div className="flex flex-col w-full items-center justify-center py-16 px-8 lg:px-24">
      <div
        className="flex flex-col lg:ml-20 bg-skin-fill-primary bg-opacity-50 w-full rounded-2xl px-5 py-6 lg:px-8 lg:py-11"
        onMouseEnter={() => setTick(false)}
        onMouseLeave={() => setTick(true)}
        onMouseDown={() => setTick(false)}
        onMouseUp={() => setTick(true)}
        onTouchStart={() => setTick(false)}
        onTouchEnd={() => setTick(true)}
      >
        <h3 className="font-patron font-bold text-md lg:text-2xl">Featured</h3>
        <div className="flex flex-col w-full mt-6 lg:flex-row-reverse lg:gap-4">
          <img
            src={featured[show].img}
            alt={featured[show].name}
            className="mx-2 rounded-xl lg:w-1/2 lg:h-1/2"
          />
          <div className="flex flex-col w-full mt-6">
            <div className="flex flex-col w-full">
              <p className="font-patron font-normal text-sm">0{show + 1}/05</p>
              <div className="flex gap-4 items-center">
                <h4 className="font-patron font-bold text-xl mt-3 mb-2 lg:text-3xl">
                  {featured[show].name}
                </h4>
                <div className="flex items-center">
                  {featured[show].github !== '' && (
                    <a href={featured[show].github} target="blank">
                      <TbBrandGithub className="w-6 h-6 stroke-stone-700 hover:stroke-indigo-600 cursor-pointer" />
                    </a>
                  )}
                  {featured[show].link !== '' && (
                    <a href={featured[show].link} target="blank">
                      <TbLink className="w-6 h-6 stroke-stone-700 hover:stroke-indigo-600 cursor-pointer" />
                    </a>
                  )}
                </div>
              </div>
              <p className="font-patron font-normal text-sm lg:text-lg">
                {featured[show].description}
              </p>
              <div className="flex gap-3 items-center flex-wrap w-full mt-5">
                {featured[show].caseStudy && (
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
                {featured[show].stack.map((stack: string, index: number) => (
                  <p
                    className="font-patron font-medium text-sm text-gray-500 border-dashed border-2 border-gray-400 px-2 py-1 rounded-md lg:text-lg"
                    key={index}
                  >
                    {stack}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex w-full mt-12 gap-3 flex-wrap">
              {featured.map((feature: projectsType, index: number) => (
                <p
                  className={`font-patron font-normal text-sm rounded-full w-11 h-11 flex items-center justify-center cursor-pointer 
                  ${
                    show !== index
                      ? 'bg-skin-fill-primary bg-opacity-70'
                      : 'bg-skin-fill-footer text-skin-footer bg-opacity-80'
                  }
                  lg:w-14 lg:h-14 lg:text-md lg:mt-10`}
                  key={index}
                  onClick={() => {
                    setSeconds(1);
                    setShow(index);
                  }}
                >
                  0{index + 1}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
