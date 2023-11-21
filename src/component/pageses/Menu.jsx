import React from 'react'
import Photo from '../MenuPage/Photo'
import MenuDownload from '../MenuPage/MenuDownload'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'
import SliderTextOne from '../MenuPage/SliderTextOne'

const Menu = () => {
  return (
    <div>
      <p className="menu-slider-page"></p>
      <Photo />
      <MenuDownload />
      <SliderTextOne />
      <SliderText />
      <MainFooter />
      {/* <div className="menu-text">
      <div className="text-head">
                <h6 className='heading'>Food allergy notice:</h6>
                <p className='para'>Food prepared in this establishment may contain wheat,dairy, and cashew nuts. <br /> Please tell your server if you have allergy because we are not responsible for any errors and cross contamination.</p>

            </div>
            <span className='slider-top-icon'><FaQuoteRight /></span>
      </div>
      import { FaQuoteRight } from "react-icons/fa6";
      
      
      */}


    </div>
  )
}

export default Menu
