/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { navLinks, navLinksType } from '../data/navLinks'
import { TbBrandGithub } from 'react-icons/tb'

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between px-7 py-6 fixed">
        <a href="#">
            <img src="/images/logo.png" alt="logo" className="w-6 h-8 lg:w-8 lg:h-11"/>
        </a>
        <div className="hidden lg:flex items-center justify-center gap-6 font-patron font-medium text-lg">
            {navLinks.map((link: navLinksType, index: number) => <a href={link.link} key={index} className="hover:text-indigo-600 transition ease-in-out delay-100">{link.name}</a>)}
            <a href="https://github.com/nanthakumaran-s/portfolio" target="blank">
                <div className="flex gap-3 items-center border-2 px-3 py-1 border-black rounded-md hover:border-indigo-600 hover:text-indigo-600 transition ease-in-out delay-100 group">
                    <TbBrandGithub size={20} color="#16002C" className="group-hover:stroke-indigo-600 transition ease-in-out delay-100 stroke-2"/>
                    <p>Source Code</p>
                </div>
            </a>
        </div>
        <RxHamburgerMenu className="lg:hidden stroke-1" size={30} color="#16002C" />
    </div>
  )
}

export default Nav