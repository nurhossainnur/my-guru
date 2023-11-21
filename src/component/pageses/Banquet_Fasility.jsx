import React from 'react'
import BanquetPhoto from '../BanquetPages/BanquetPhoto'
import Filter from '../BanquetPages/Filter'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'


const Banquet_Fasility = () => {
  return (
    <div>
      <p className="menu-slider-page"></p>
     <BanquetPhoto />
     <Filter />
    <SliderText />
    <MainFooter />

    </div>
  )
}



export default Banquet_Fasility
