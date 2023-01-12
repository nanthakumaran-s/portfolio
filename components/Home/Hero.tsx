/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col bg-skin-fill-primary w-full items-center justify-center py-28 px-8 lg:px-48">
      <div className="flex flex-col">
        <p className="text-skin-base font-patron font-normal text-2xl text-center lg:text-4xl">Hi, I&apos;m</p>
        <h1 className="text-skin-base font-patron font-normal text-2xl text-center lg:text-4xl">Nanthakumaran S</h1>
        <p className="pt-4 pb-4 text-skin-base font-patron font-black text-center text-2xl lg:text-4xl lg:mt-4">Software Developer, Cloud & DevOps Enthusiast, OpenSource Beginner.</p>
        <div className="flex items-center justify-center gap-6 mb-4 lg:mt-7">
          <a href="#" className="px-6 py-3 bg-skin-button-muted rounded-md font-bold text-skin-footer text-md hover:opacity-90 lg:text-xl font-patron">
            My Resume
          </a>
        </div>
      </div>
      <img src='/images/me.png' alt='Nanthakumaran S' className='w-44 h-44 mt-5 rounded-full shadow-md lg:w-60 lg:h-60' loading='lazy'/>
    </div>
  )
}

export default Hero