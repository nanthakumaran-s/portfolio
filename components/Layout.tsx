import Head from "next/head";
import { ReactNode } from "react";
import { blogLinks, socialLinks, socialLinksType } from "../data/socialLinks";

const IconComponent = ({ link }: { link: socialLinksType }) => {
    return (
        <a href={link.link} target="blank" className="w-14 h-14 flex items-center justify-center hover:bg-skin-fill-secondary hover:bg-opacity-70 rounded-full transition ease-in-out delay-100">
            {link.icon}
        </a>
    );
}

interface Prop {
    children: ReactNode
}

export default function Layout ({ children }: Prop) {
    return (
        <>
            <Head>
                <title>Nanthakumaran S</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="flex overflow-hidden ">
                <div className="hidden h-screen fixed lg:flex lg:flex-col lg:w-20 divide-y-2 divide-gray-600 mx-auto items-center justify-center gap-4">
                    <div className="flex flex-col">
                        {socialLinks.map((link: socialLinksType, index: number) => <IconComponent link={link} key={index}/>)}
                    </div>
                    <div className="flex flex-col pt-4">
                        {blogLinks.map((link: socialLinksType, index: number) => <IconComponent link={link} key={index}/>)}
                    </div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}