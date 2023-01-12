import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
import { SiHashnode, SiMedium } from 'react-icons/si'

const size = 35;
const color = "#16002C";

export type socialLinksType = {
    icon: any,
    link: string
}

export const socialLinks : socialLinksType[] = [
    {
        icon: <TbBrandGithub size={size} color={color} />,
        link: 'https://github.com/nanthakumaran-s',
    },
    {
        icon: <TbBrandLinkedin size={size} color={color} />,
        link: 'https://linkedin.com/in/nanthakumaran-s',
    },
    {
        icon: <TbBrandTwitter size={size} color={color} />,
        link: 'https://twitter.com/nanthakumaran_',
    }
]

export const blogLinks : socialLinksType[] = [
    {
        icon: <SiMedium size={size} color={color} />,
        link: 'https://nanthakumaran.medium.com/',
    },
    {
        icon: <SiHashnode size={size} color={color} />,
        link: 'https://blog.nanthakumaran.com',
    },
]