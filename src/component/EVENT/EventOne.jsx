import React from 'react'
import img_11 from './img/11.png'
import img_11_1 from './img/11-1.png'
import MainFooter from '../Footer/MainFooter'

import './Event.css'
import BackToTopButton from '../BackToTopButton'
const EventOne = () => {

  return (
    <div>
          <div className='event-main-div'>
      <div className="event-1-img">
        <img src={img_11} alt="" />
     
      </div>
      <p className='event-head-text'><span className='frist'><span className='arr-29-arr'>29 APR</span>
      CELEBRATE HAPPY MOTHERS DAY WITH GURU PALACE</span> 
          <span className='last'>Posted at 04:57h in Events by admin</span></p>
      <div className='event-textand-img'>
        <ul>

          <li><span className='comon-e'>Address</span> <br /> 2215 US Highway 1 South, North Brunswick, NJ 08902</li>
          <li><span className='comon-e'>Timing</span> <br />
            Saturday, May 12 <br />
            11:30am till 10pm</li>
          <li>Special Mother’s Buffet <br />
            Lunch $15.95 ++ & Dinner $19.95 ++</li>
          <li> <span className='comon-e'>Phone</span> <br />
              <span className='comon-r'>732.398.9022</span></li>

        </ul>

        <img src={img_11_1} alt="" />
        </div>
      
    </div>
    <MainFooter />
    <BackToTopButton />
    </div>
  )
}

export default EventOne
