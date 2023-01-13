import { useState } from 'react';
import Footer from '../components/Footer';
import Contact from '../components/Home/Contact';
import Featured from '../components/Home/Featured';
import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Layout from '../components/Layout';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

export default function Home() {
  const [showNav, setShowNav] = useState<Boolean>(false);

  return (
    <Layout>
      <Nav show={showNav} setShowNav={setShowNav} />
      {showNav && <MobileNav setShowNav={setShowNav} />}
      <Hero />
      <Skills />
      <Featured />
      <Contact />
      <Footer />
    </Layout>
  );
}
