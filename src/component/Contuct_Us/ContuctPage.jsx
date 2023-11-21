import React from 'react'
import { FaSquareFacebook,FaSquareTwitter } from "react-icons/fa6";
const ContuctPage = () => {
  return (
    <div>
        <p className="contuct-header">Please contact the team with the enquiries you may have</p>
        <div className="contuct-main-page">
            <div className="CCtwo-div">
                <ul>
                    <li className='CCtwo-div-head bold'>Mailing Address</li>
                    <li>2215 US Highway 1 South North Brunswick, NJ 08902 </li>
                
                    <li className='CCcolor-red-li bold'>Phone</li>

                    <li><span className='CCcomon'>P :</span><a href="" className='number-link-color'> 732.398.9022</a></li>
                    <li><span className='CCcomon'>M:</span><a href="" className='number-link-color'> 917.518.4331</a></li>
                    <li><span className='CCcomon'>M:</span><a href="" className='number-link-color'> 347.784.9269</a></li>

                    <li><span className='CCcomon bold'>Fax:</span> 732.658 3700</li>
                    <li className='bold'>Enquiries</li>
                    <li><a href="">gurupalace@hotmail.com</a></li>
                    <li className='bold'>For Banquet / Catering Contact:</li>
                    <li>Mr. Singh</li>
                    <li><a href="" className='number-link-color' > 917.518.4331</a></li>
                    <li><a href="" className='number-link-color'> 347.784.9269</a></li>
                    <li><a className='CCface-icon'><FaSquareFacebook /></a><a className='CCtwi-icon'><FaSquareTwitter /></a></li>
                </ul>
            </div>
            <div className="CCone-div">
                <form action="mailto:änisul2010s@yahoo.co.uk" method="post" enctype="text/plain">
                <p><input type="text" placeholder="Name" name="name"required /></p>
                <p><input type="text" placeholder="Email" name="email"required /></p>
                <p><input type="text" name="number" id=""placeholder='Subject'required /></p>
                <p><textarea  name='Message'placeholder='Message'required></textarea></p>
                
                <button className='send-button-2' type="submit" >SUBMIT</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ContuctPage
