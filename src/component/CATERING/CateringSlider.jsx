import React from 'react'

import { useState } from 'react';
import { FaQuoteRight } from "react-icons/fa6"

import Carousel from 'react-bootstrap/Carousel';
import './Catering.css';
const CateringSlider = () => {

  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  return (
    <div>
       <div className="menu-text">


<div className="slider-bg">
<div className="wedding-head party-head">
            <h4>PARTY TRAYS TO GO</h4>
            <p className='wedding-line party-line'></p>
        
        </div>
     
    <div className="table-party_tras">
  
            <table>
                <tr>
                    <th>Tray</th>
                    <th>Veg</th>
                    <th>Non-Veg</th>
                    <th>Seafood</th>
                    <th>Bread</th>
                    <th>Rice</th>
                </tr>
                <tr>
                    <td>Small Tray (10-12 people)</td>
                    <td>$50</td>
                    <td>$65</td>
                    <td>$75</td>
                    <td>$30</td>
                    <td>$30</td>
                </tr>
                <tr>
                <td>Medium Tray (20-25 people)</td>
                    <td>$75</td>
                    <td>$85</td>
                    <td>$90</td>
                    <td>$40</td>
                    <td>$35</td>
                </tr>
                <tr>
                    <td>Semi Large Tray (30-35 people)</td>
                    <td>$100</td>
                    <td>$120</td>
                    <td>$160</td>
                    <td>$70</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td>Large Tray (45-55 people)</td>
                    <td>$120</td>
                    <td>$160</td>
                    <td>$220</td>
                    <td>$100</td>
                    <td>$65</td>
                </tr>
                <tr>
                    <td>Extra Large Tray (65-75 people)</td>
                    <td>$160</td>
                    <td>$200</td>
                    <td>$260</td>
                    <td>$120</td>
                    <td>$80</td>
                </tr>
        </table>
    </div>


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

    </div>
  )
}

export default CateringSlider

