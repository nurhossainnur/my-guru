import React from 'react'
import CateringPhoto from '../CATERING/CateringPhoto'
import CateringPackage from '../CATERING/CateringPackage'
import WeddingPackage from '../CATERING/WeddingPackage'
import CateringSlider from '../CATERING/CateringSlider'
import MainFooter from '../Footer/MainFooter'

const Catering = () => {
  return (
    <div>
         <p className="menu-slider-page"></p>
      <CateringPhoto />
      <CateringPackage />
      <WeddingPackage />
      <CateringSlider />
      <MainFooter />
    </div>
  )
}

export default Catering
