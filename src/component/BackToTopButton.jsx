import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import './BackToTopButton.css'
const BackToTopButton = () => {

    const [backToTopButton,setBackToTpButton] = useState(false);

    useEffect(() =>{
      window.addEventListener("scroll", () =>{
        if (window.scrollY > 370) {
          setBackToTpButton(true)
        }else{
          setBackToTpButton(false)
        }
      })
    },[])
    const scrollUp = () =>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

  return (
    <div>
      {backToTopButton && (
        <button className='backto-top-button' style={{
          position:"fixed",
          bottom:"50px",
          right:"20px",
          height:"50px",
          width:"50px",
          fontSize:"19px",
      }} onClick={scrollUp}><FaArrowUp /></button>
      )}
    </div>
  )
}

export default BackToTopButton


