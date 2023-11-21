import React from 'react'
import footer_img from './img/footer.png'
import './Footer.css'

const product = {
    image: 'https://cdn.doordash.com/media/button/button_red_l.svg',
}


const FooterTwo = () => {
  return (
    <div className="main-peren">
        <div className='footer-two-perent'>
      <img src={footer_img} alt="" />
      <p>Copyright © 2007-2019 Guru Palace Restaurants. All Rights Reserved.</p>
      <p>Website designed by <a href="https://indemandsoftech.com/"target='_black'>INDEMAND SOFTECH SOLUTIONS</a></p>
      <div><img src={product.image} alt="" /></div>
    
    </div>
    </div>
  )
}

export default FooterTwo
