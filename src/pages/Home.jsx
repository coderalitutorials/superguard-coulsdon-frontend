








import React from 'react'
import HeroSection from '../components/HeroSection'


import CertifiedLogosSection from '../components/CertifiedLogosSection'

import AboutIntroSection from '../components/AboutIntro'
import MissionBannerSection from '../components/MissionBannerSection'

import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'
import SuperGuardServicesSection from '../components/IronServices'
import WhyChooseSuperGuard from '../components/WhyChoosePrimeShield'
import SuperGuardStatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutIntroSection/>
      {/* <SuperGuardStatsSection/> */}
      {/* <CertifiedLogosSection/>  */}
        <SuperGuardServicesSection/>
      <MissionBannerSection/>
    
    {/* <WhyChooseSuperGuard/> */}
       {/* <PrimeShieldTestimonials/> */}
   
     
    </div>
  )
}

export default Home