import React from 'react'
import img from './img/about-2.jpg'
import './About.css'

const MainBottom = () => {
  return (
    <div className='main-div-bottom'>
        <div className="bottom-two-div">
            <div className="bottom-div-1">
                <h3>JASBIR SINGH, OWNER</h3>
                <p className='line'></p>
                <p className='top-para'>
                Jasbir has over 12 years experience in preparing exquisite cuisine and his experience ranges from the ancient art of preparing royal Indian Cuisine of Dum Pukht, a 500 years old art of cooking where food is steam cooked to keep it low in calories, to the more modern art of preparing contemporary Thai recipes. Thus, Jasbir brings to Tawaa a passion for food preparation, a strong sense of work ethic, and a commitment to patrons as evidenced by the many testimonials he has received from online customers.</p>
                <p className='top-para'>Jasbir has been associated with the best in the culinary business such as The Taj and Centaur Group of Hotels, and Carnival Cruise Lines in Miami, Florida. More recently, he has shown exemplary skills as executive chef at Royal Thai Restaurant in New Jersey, and at Best Western Hotel, Tampa, Florida. He currently functions as the executive chef, manager, and entrepreneur at the Jackson Diner (been there for the last 7 years), as well as the Tawaa restaurants in New York.    
                </p>
            </div>
            <div className="bottom-div-2">
                <img src={img} alt="" />
            </div>
        </div>
        <p className='bottom-para'>Jasbir brings to Tawaa the same level of good management and staff rapport which help to build team effectiveness and align individual goals with organizational strategic moves.Jackson Diner is considered the best tasting Indian restaurant in the metro area – all due to the able guidance of Jasbir.</p>
        <p className='bottom-para'>Chef Jasbir received his formal training at Dr. D. Y. Patil Institute where he received his diploma in Hotel Management & Catering Technology. He furthered this training at the Taj Group and Centaur Group where he was one of the 5 candidates selected under the HMCT program. He not only successfully completed this training, but also received many merits and awards. Currently, Chef Jasbir leads a team of people who implement his creative ideas to better serve a growing group of loyal patrons in New York and New Jersey.</p>
    </div>
  )
}

export default MainBottom
