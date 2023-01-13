import Head from 'next/head';
import { ReactNode } from 'react';
import { blogLinks, socialLinks, socialLinksType } from '../data/socialLinks';

const IconComponent = ({ link }: { link: socialLinksType }) => {
  return (
    <a
      href={link.link}
      target="blank"
      className="w-14 h-14 flex items-center justify-center hover:bg-skin-fill-secondary hover:bg-opacity-70 rounded-full transition ease-in-out delay-100"
    >
      {link.icon}
    </a>
  );
};

interface Prop {
  children: ReactNode;
}

export default function Layout({ children }: Prop) {
  return (
    <>
      <Head>
        <title>Nanthakumaran S</title>
        <meta
          name="description"
          content="Nanthakumaran is a software developer and cloud enthusiast with a focus on DevOps and open-source technologies. He is dedicated to delivering high-quality, efficient code and staying up-to-date with the latest industry trends."
        />
        <meta name="keywords" content="Nanthakumaran, developer" />
        <link rel="canonical" href="https://www.nanthakumaran.com" />

        {/* Viewport meta tag */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

        {/* UTF - 8 meta tag */}
        <meta charSet="UTF-8" />

        {/* Site Favicon */}
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@nanthakumaran_" key="twhandle" />
        <meta name="twitter:site" content="nanthakumaran.com/" />

        {/* Open Graph */}
        <meta property="fb:app_id" content="228757032122329" />
        <meta property="og:url" content="nanthakumaran.com/" key="ogurl" />
        <meta
          property="og:image"
          content="https://www.nanthakumaran.com/static/nanthakumaran.jpg"
          itemProp="image"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Nanthakumaran S" key="ogsitename" />
        <meta property="og:title" content="Nanthakumaran S" key="ogtitle" />
        <meta
          property="og:description"
          content="Nanthakumaran is a software developer and cloud enthusiast with a focus on DevOps and open-source technologies. He is dedicated to delivering high-quality, efficient code and staying up-to-date with the latest industry trends."
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="updatedtime" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <div className="flex overflow-hidden ">
        <div className="hidden h-screen fixed lg:flex lg:flex-col lg:w-20 divide-y-2 divide-gray-600 mx-auto items-center justify-center gap-4">
          <div className="flex flex-col">
            {socialLinks.map((link: socialLinksType, index: number) => (
              <IconComponent link={link} key={index} />
            ))}
          </div>
          <div className="flex flex-col pt-4">
            {blogLinks.map((link: socialLinksType, index: number) => (
              <IconComponent link={link} key={index} />
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
