/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';
import { socialLinks, socialLinksType } from '../data/socialLinks';

const iconsMap: Record<string, ReactNode> = {
    github: <TbBrandGithub className='w-6 h-6 stroke-white stroke-1' />,
    linkedin: <TbBrandLinkedin className='w-6 h-6 stroke-white stroke-1' />,
    twitter: <TbBrandTwitter className='w-6 h-6 stroke-white stroke-1' />,
};

const IconComponent = ({ link }: { link: socialLinksType }) => {
    return (
        <a
            href={link.link}
            target="blank"
            className="w-10 h-10 flex items-center justify-center hover:bg-skin-fill-secondary hover:bg-opacity-20 rounded-full transition ease-in-out delay-100"
        >
            {iconsMap[link.name]}
        </a>
    );
};

const Footer = () => {
    return (
        <footer className='relative flex flex-col justify-center w-full bg-skin-fill-footer px-6 z-20'>
            <hr className='my-6 lg:mb-3 border-gray-600 w-full' />
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <p className='text-skin-footer font-patron text-sm mb-3 lg:text-md'>© 2023 Nanthakumaran S. All Rights Reserved.</p>
                <div className="flex mb-6 cursor-pointer">
                    {socialLinks.map((link: socialLinksType, index: number) => (
                        <IconComponent link={link} key={index} />
                    ))}
                </div>
            </div>
        </footer>
    )
};

export default Footer;
