import React from 'react'
import one2 from './img/cat1.jpg'
import one3 from './img/cat2.jpg'
import one4 from './img/cat3.jpg'

import { useNavigate } from 'react-router-dom'
import './SectionsThree.css'
const SectionsThree = () => {
  const navigate = useNavigate();
    return (
        <div className='bg-three'>
       
          <div className="section-perent">
         
            <h3>CATERING FOR ALL OCCASIONS – GURU CATERS</h3>  
            <p className='section3-line'></p>
            <div className="link-photo">
                <img className='sec-img1'onClick={() => navigate("/gallery")}  src={one2} alt="" />
                <img className='sec-img2'onClick={() => navigate("/banquet-fasility")} src={one3} alt="" />
                <img className='sec-img3'onClick={() => navigate("/catering")} src={one4} alt="" />
            </div>
            <button className='sec-button' onClick={() => navigate("/catering")}>Click Here For Packages</button>
          </div>
          
        </div>
      )
}

export default SectionsThree
