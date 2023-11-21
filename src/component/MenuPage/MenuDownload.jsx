import React from 'react'
import guru_one from './img/guru-takeout-1.jpg'
import guru_two from './img/guru-takeout-2.jpg'
import guru_pdf from './img/guru-takeout.pdf'
import BackToTopButton from '../BackToTopButton'

const MenuDownload = () => {
  return (
    <div className='main-divs'>
      <a href={guru_pdf} className='click-here check-here-button-1' >Click Here To Download Menu</a>
      
      <div className="download-1">
     
        <img src={guru_one} alt="" />
      </div>
     
      <a href={guru_pdf} className='click-here check-here-button-2'>Click Here To Download Menu</a>
      <div className="download-2">
      
      <img src={guru_two} alt="" />
      </div>
      <BackToTopButton />
    </div>
  )
}

export default MenuDownload
