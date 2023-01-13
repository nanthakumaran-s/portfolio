import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { SiHashnode, SiMedium } from 'react-icons/si';
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { navLinks, navLinksType } from '../data/navLinks';
import { blogLinks, socialLinks, socialLinksType } from '../data/socialLinks';

const size = 30;
const color = '#16002C';

const iconsMap: Record<string, ReactNode> = {
  github: <TbBrandGithub size={size} color={color} />,
  linkedin: <TbBrandLinkedin size={size} color={color} />,
  twitter: <TbBrandTwitter size={size} color={color} />,
  hashnode: <SiHashnode size={size} color={color} />,
  medium: <SiMedium size={size} color={color} />
};

const IconComponent = ({ link }: { link: socialLinksType }) => {
  return (
    <a
      href={link.link}
      target="blank"
      className="w-11 h-11 flex items-center justify-center hover:bg-skin-fill-secondary hover:bg-opacity-70 rounded-full transition ease-in-out delay-100"
    >
      {iconsMap[link.name]}
    </a>
  );
};

interface Prop {
  setShowNav: Dispatch<SetStateAction<Boolean>>;
}

const MobileNav = ({ setShowNav }: Prop) => {
  return (
    <div className="fixed bg-white inset-0 w-screen z-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 font-patron font-medium text-lg">
        {navLinks.map((link: navLinksType, index: number) => (
          <a
            href={link.link}
            key={index}
            className="hover:text-indigo-600 transition ease-in-out delay-100"
            onClick={() => setShowNav(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="https://github.com/nanthakumaran-s/portfolio" target="blank">
          <div className="flex gap-3 items-center border-2 px-3 py-1 border-black rounded-md hover:border-indigo-600 hover:text-indigo-600 transition ease-in-out delay-100 group">
            <TbBrandGithub
              size={20}
              color="#16002C"
              className="group-hover:stroke-indigo-600 transition ease-in-out delay-100 stroke-2"
            />
            <p>Source Code</p>
          </div>
        </a>
      </div>
      <div className="flex gap-4 absolute bottom-8 divide-x-2 divide-gray-600">
        <div className="flex">
          {socialLinks.map((link: socialLinksType, index: number) => (
            <IconComponent link={link} key={index} />
          ))}
        </div>
        <div className="flex pl-5">
          {blogLinks.map((link: socialLinksType, index: number) => (
            <IconComponent link={link} key={index} />
          ))}
        </div>
      </div>
      <div className="absolute right-7 top-7 cursor-pointer">
        <MdClose size={size} color={color} onClick={() => setShowNav(false)} />
      </div>
    </div>
  );
};

export default MobileNav;
