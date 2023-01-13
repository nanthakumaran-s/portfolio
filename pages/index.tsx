import { useState } from 'react'
import Hero from '../components/Home/Hero'
import Layout from '../components/Layout'
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav'

export default function Home() {
  const [showNav, setShowNav] = useState<Boolean>(false);

  return (
    <Layout>
      <Nav show={showNav} setShowNav={setShowNav} />
      {showNav && <MobileNav setShowNav={setShowNav} />}
      <Hero />
    </Layout>
  )
}
