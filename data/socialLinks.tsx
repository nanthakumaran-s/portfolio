import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { SiHashnode, SiMedium } from 'react-icons/si'

const size = 35;
const color = "#16002C";

export type socialLinksType = {
    name: string;
    icon: any,
    link: string
}

export const socialLinks : socialLinksType[] = [
    {
        name: 'github',
        icon: <TbBrandGithub size={size} color={color} />,
        link: 'https://github.com/nanthakumaran-s',
    },
    {
        name: 'linkedin',
        icon: <TbBrandLinkedin size={size} color={color} />,
        link: 'https://linkedin.com/in/nanthakumaran-s',
    },
    {
        name: 'twitter',
        icon: <TbBrandTwitter size={size} color={color} />,
        link: 'https://twitter.com/nanthakumaran_',
    }
]

export const blogLinks : socialLinksType[] = [
    {
        name: 'medium',
        icon: <SiMedium size={size} color={color} />,
        link: 'https://nanthakumaran.medium.com/',
    },
    {
        name: 'hashnode',
        icon: <SiHashnode size={size} color={color} />,
        link: 'https://blog.nanthakumaran.com',
    },
]