import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { cloudNDevops, skillsType, software } from '../../data/skills';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

const Skills = () => {
  const size = useWindowSize();
  return (
    <div
      id="skills"
      className="flex flex-col w-full items-center justify-center py-11 px-8 lg:px-48"
    >
      <div className="flex flex-col lg:ml-20 w-full">
        <h2 className="font-patron font-black text-center text-2xl lg:text-4xl">Things I know</h2>
        <div className="lg:hidden flex flex-col items-center justify-center mt-6">
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              width: size.width! > 425 ? size.width! * 0.5 : size.width! * 0.85,
              perPage: 1,
              autoplay: true,
              drag: true,
              focus: 'center',
              type: 'loop',
              interval: 3000,
              pauseOnHover: true,
              arrows: false,
              gap: 10
            }}
            aria-label="React Splide Example"
          >
            <SplideTrack>
              <SplideSlide>
                <div className="flex flex-col w-full px-6 py-5 bg-skin-fill-secondary rounded-2xl justify-start mb-10 h-80">
                  <h3 className="font-patron font-bold text-lg mb-5 mt-2">Software Development</h3>
                  {software.map((skill: skillsType, index: number) => (
                    <p className="pt-2 font-patron font-normal text-md" key={index}>
                      <b>{skill.heading}: </b>
                      {skill.prompt}
                    </p>
                  ))}
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex flex-col w-full px-6 py-5 bg-skin-fill-secondary rounded-2xl justify-start mb-10 h-80">
                  <h3 className="font-patron font-bold text-lg mb-5 mt-2">Cloud & DevOps</h3>
                  {cloudNDevops.map((skill: skillsType, index: number) => (
                    <p className="pt-2 font-patron font-normal text-md" key={index}>
                      <b>{skill.heading}: </b>
                      {skill.prompt}
                    </p>
                  ))}
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
        <div className="hidden lg:flex w-full items-center justify-center gap-6 mt-10">
          <div className="flex flex-col w-full p-10 justify-center bg-skin-fill-secondary rounded-2xl mb-10 h-80">
            <h3 className="font-patron font-bold text-2xl mb-5 mt-2">Software Development</h3>
            {software.map((skill: skillsType, index: number) => (
              <p className="pt-2 font-patron font-normal text-xl" key={index}>
                <b>{skill.heading}: </b>
                {skill.prompt}
              </p>
            ))}
          </div>
          <div className="flex flex-col w-full p-10 justify-center bg-skin-fill-secondary rounded-2xl mb-10 h-80">
            <h3 className="font-patron font-bold text-2xl mb-5 mt-2">Cloud & DevOps</h3>
            {cloudNDevops.map((skill: skillsType, index: number) => (
              <p className="pt-2 font-patron font-normal text-xl" key={index}>
                <b>{skill.heading}: </b>
                {skill.prompt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
