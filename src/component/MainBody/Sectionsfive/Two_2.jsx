import React from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'

import './SectionsFive.css'
const Two_2 = () => {
  return (
    <div className="perent-five">
        <div className='two-img'>
          <div><img className='img-1' src={img1} alt="" /></div>
          <div><img className='img-2' src={img2} alt="" /></div>
          <div><img className='img-3' src={img3} alt="" /></div>
          <div><img className='img-4' src={img4} alt="" /></div>
          <div><img className='img-5' src={img5} alt="" /></div>
        </div>
    </div>
  )
}

export default Two_2
