import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Module12 from '@/components/module12/Module12'
import Module15 from '@/components/module15/Module15'
import Module10 from '@/components/module10/Module10'
import Module21 from '@/components/module21/Module21'
import Module5 from '@/components/module5/Module5'
import Module7 from '@/components/module7/Module7'
import Module9 from '@/components/module9/Module9'
import Module6 from '@/components/module6/Module6'
import FooterTop from '@/components/footer/FooterTop'
import FooterBottom from '@/components/footer/FooterBottom'
import Carousel from '@/components/carousel/Carousel';



const Home = () => {

  return (
    <div>
      <Navbar/>
      <Carousel/>
  <Module12/>
  <Module15/>
  <Module10/>
 
  <Module21/>
  <Module5/>
  <Module7/>
  <Module9/>
  <Module6/>
  <FooterTop/>
  <FooterBottom/>
    </div>
  )
}

export default Home
