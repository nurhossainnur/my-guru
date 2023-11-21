import React from 'react'
import Contuct_UsPhoto from '../Contuct_Us/Contuct_UsPhoto'
import ContuctPage from '../Contuct_Us/ContuctPage'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'
import Weathers from '../MainBody/Sectionsfive/Weathers'

const Contuct_Us = () => {
  return (
    <div>
         <p className="menu-slider-page"></p>
        <Contuct_UsPhoto />
        <ContuctPage />
        <Weathers />
        <SliderText />
        <MainFooter />
    </div>
  )
}

export default Contuct_Us

