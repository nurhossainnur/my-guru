import React from 'react'
import RecommendedMain from './RecommendedMain'
import RecommendedPhoto from './RecommendedPhoto'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'

const RecoAllPage = () => {
  return (
    <div>
         <p className="menu-slider-page"></p>
      <RecommendedPhoto />
      <RecommendedMain />
      <SliderText />
      <MainFooter />
    </div>
  )
}

export default RecoAllPage
