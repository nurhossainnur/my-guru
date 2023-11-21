import React from 'react'
import img from './img/about-1.jpg'
import './About.css'
const MainTop = () => {
  return (
    <div className='main-about'>
      <div className="main-two-div">
      <div className="about-two">
        <p className="about-para">If you’re craving the bold flavors of authentic Indian food, come to Guru Palace Restaurant which is located at 2215 US 1 South, North Brunswick, NJ 08902. Our talented, experienced chefs create authentic Indian cuisine using fresh ingredients and traditional Indian recipes. Exotic sauces and flavors intermingle on your plate, and the hot, tangy aromas waftup to meet your nose, creating an exciting taste journey you can experience only in our restaurant.
      <br /> 
        At Guru Palace Indian Restaurant, we offer distinctive cuisine in an informal, friendly setting. Our restaurant enjoys a reputation for impeccable service, elegant Asian-style décor, and exquisite Indian food. Dining at our restaurant is like visiting India without leaving your hometown–an exciting blend of authentic Indian food, culture, and atmosphere awaits.</p>
      </div>
      <div className="about-one">
        <img src={img} alt="" />
      </div>

      </div>
      <div className="para-about-bottom">
        <p>Where there is passion, there is success. And those with passion do not know another way to live. For chef Jasbir Singh, Indian food is number one priority. He often says that if there is anything he could contribute to this big mad world, then let it be the best of the best of cuisines, namely Indian Cuisine.
        <br /> 
        Owner & Chef, Jasbir is a study of culinary excellence backed by years of a varied set of experiences and many honorable awards from prestigious firms. These awards have included receiving honors from the Horizon Hospitality at Inter Collegiate Competition at Mumbai, India, as well as receiving a certificate from the National Association of Bakery, also at Mumbai, India

</p>
      </div>

    </div>
  )
}

export default MainTop
