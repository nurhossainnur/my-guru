
import { useState } from 'react';
import { FaQuoteRight } from "react-icons/fa6"

import Carousel from 'react-bootstrap/Carousel';
import './Menu.css';
const SliderText = () => {

  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <div className="menu-text">


      <div className="slider-bg">
      <span className='slider-top-icon'><FaQuoteRight /></span>
      <Carousel variant="dark" className='  parent-slider' activeIndex={index} 
        onSelect={handleSelect} >
                      
          <Carousel.Item className='text-head'>  
            <p>We held our daughter's first birthday at the Guru Palace banquet hall. We were more than happy with this experience. The staff were friendly, helpful, and efficient. The owner came to check on us several times during the party to ensure all our needs were met. All the guests loved the food. We would highly recommend this restaurant for your future events.</p>
            <h5>Priya</h5>
            </Carousel.Item>  
          <Carousel.Item className='text-head'>  

          <p>Top notch! The food is perfect, service friendly, courteous, caring and very prompt, and the rooms are well decorated. You can tell the kitchen spends many many hours preparing for their guests arrival. The dishes here have been honed to perfection.
             </p>
             <h5>Simran</h5>
          </Carousel.Item>  
          <Carousel.Item className='text-head'>  
          <p>Just to let you know that everyone loved the food. The hot naans and kebabs were a hit. Jasbir and staff were very courteous and did a great job. Hopefully we will have an opportunity to use your services again in the near future.</p>
            <h5>Gregg</h5>
          </Carousel.Item>  
          <Carousel.Item interval={2890}className='text-head'>
          <p>Overall service is great and Jasbir, who owns the place is amazing and very flexible in taking last minute request modifications or the banquet hall birthday party. Food is great - both North Indian and South Indian & Veg and Meat. Staff is very courteous as well. I would strongly recommend people to throw parties in their banquet halls.
          </p>
          <h5>Rick Johnson</h5>
          </Carousel.Item>
</Carousel>  
   </div>
   </div>
  );  

}

export default SliderText






