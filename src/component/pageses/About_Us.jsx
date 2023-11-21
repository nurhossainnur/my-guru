import React from 'react'
import AboutPhoto from '../About_Us/AboutPhoto'
import MainTop from '../About_Us/MainTop'
import MainBottom from '../About_Us/MainBottom'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'
const About_Us = () => {
  return (
    <div>
         <p className="menu-slider-page"></p>
      <AboutPhoto />
      <MainTop />
      <MainBottom />
      <SliderText />
      <MainFooter />
    </div>
  )
}

export default About_Us

