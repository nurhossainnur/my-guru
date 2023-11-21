import React from 'react'

import { FaSquareFacebook,FaSquareTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

import './Footer.css'
const FooterOne = () => {
  const navigate = useNavigate();
  return (
    <div className='footer-perent'>
      <div className="one-div">
      <h4 className='one-div-head'>Have a message?</h4>

          <form action="mailto:änisul2010s@yahoo.co.uk" method="post" enctype="text/plain">
          <p><input type="text" placeholder="Name" name="name"required /></p>
          <p><input type="text" placeholder="Email" name="email"required /></p>
          <p><input type="tel" name="number" id=""placeholder='Number'required /></p>
          <p><textarea  name='Message'placeholder='Message'required></textarea></p>
         
          <button className='send-button' type="submit" >Send Inquiry</button>

          </form>
      </div>
      <div className="two-div">
            <ul>
                <li className='two-div-head'><h4>Contact Us</h4></li>
                <li>2215 US Highway 1 South, North Brunswick, NJ 08902 </li>
               
                <li className='color-red-li'>Call Us At</li>
                <li><a href=""><span className='comon'>P :</span> 732.398.9022</a></li>
                <li><a href=""><span className='comon'>M:</span> 917.518.4331</a></li>
                <li><a href=""><span className='comon'>M:</span> 347.784.9269</a></li>
                <li><span className='comon'>Fax:</span> 732.658 3700</li>
                <li><a href=""><span className='comon'>Email:</span> gurupalace@hotmail.com </a></li>
                <li><a href='https://web.facebook.com/gurupalacerestaurant/?_rdc=1&_rdr' target="_blank" className='face-icon '><FaSquareFacebook /></a><a href='https://twitter.com/gurupalace' target="_blank" className='twi-icon'><FaSquareTwitter /></a></li>
          </ul>

      </div>
      <div className="three-div">
          <ul>
            <li className='three-div-head' ><h4>Quick Links</h4></li>
            <li><span onClick={() => navigate("/")}>Home</span></li>
            <li><span onClick={() => navigate("/menu")}>Menu</span></li>
            <li><span onClick={() => navigate("/banquet-fasility")}>Banquet Facility</span></li>
            <li><span onClick={() => navigate("/gallery")}>Gallery</span></li>
            <li><span onClick={() => navigate("/catering")}>Catering</span></li>
            <li><span><a href="./mainevent"target="_blank">Events</a></span></li>
            <li><span onClick={() => navigate("/contuct-us")}>Contact Us</span></li>
          </ul>

      </div>
      <div className="four-div">

        <ul>
          <li className='four-div-head'><h4>Hours of operation</h4></li>
          <li className='color-red-li'>OPEN 7 DAYS A WEEK</li>
          <li>Monday to Friday : 11AM To 3PM</li>
          <li>Monday to Friday : 5PM To 9:30PM</li>
          <li>Saturday & Sunday : 10AM To 9:30PM</li>
          <li className='color-red-li'>OPEN FOR BANQUETS, CATERING AND TAKE OUT.
            NO DINING..</li>
        </ul>

      </div>


    </div>
  )
}

export default FooterOne
