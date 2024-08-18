import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import MatchCard from '../components/MatchCard'
import AnimatedPage from '../components/AnimatedPage'

const Premier = () => {
  return (
    <AnimatedPage>
    <div>
      <Navbar />
      <HeroImg2 
      heading={<span className="khabib">KHABIB NURMAGOMEDOV 12-20</span>} 
      text={<span className="khabib">Welcome to the analysis of the Fights.</span>} 
    />

      <MatchCard />
      <Footer />
    </div>

    </AnimatedPage>
  )
}

export default Premier