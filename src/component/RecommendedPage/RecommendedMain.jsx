import React, { useState } from "react";
import BackToTopButton from "../BackToTopButton";


const RecommendedMain = () => {

    const [activemenu, setActivemenu] = useState(1);

    const handleClick =(i)=>{
        setActivemenu(i)
     };

  return (
    <div className="controle-div">
        <div className="reco-para">
        <p><span>Pros that get our five star rating :</span> 
        Here at the GuruPalace, we have had the pleasure of working with a number of qualified service professionals in the catering, entertainment and other related industries. For your convenience and with utmost confidence we now offer a list of of resources and contact information for the best possible event experience.</p>
        </div>
        <div className="recommended-menu">
            <div className="recom-menu-div">
                <span id='DÉCOR'className={1 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(1)}>DÉCOR & EVENT MANAGER</span> 
                <span id='BALOON'className={2 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(2)} >BALOON ARCH DECORATOR</span> 
                <span id='PHOTOGRAPHY'className={3 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(3)}>PHOTOGRAPHY</span> 
                <span id='LIVE'className={4 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(4)} >LIVE SINGING</span> 
                <span id='PROFFESIONALDJ'className={5 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(5)} >PROFFESIONALDJ</span> 
            </div>
            
            <div id=""className={1 === activemenu ? "recom-menu-p active-page":"recom-menu-p"}>
                <div className="recom-Menu">
                    <div>
                       <p><span className='recom-menu-span'>WDM Décor</span>
                       <span className='recom-menu-span'>3 Kellog Court, Unit 16 </span>
                       <span className='recom-menu-span'>Edison, NJ 08817</span>
                       <span className='recom-menu-span'>One Non-Veg Appetizer </span>
                       <span className='recocomon'>P :</span><a href="" className='reco-number-link-color '> 732.822.1419</a>
                       <a href="" className='reco-number-link-color recom-menu-span'> 732.243.9494</a>
                       <a href="" className='reco-number-link-color recom-menu-span bottom-a'> www.wdmdecor.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        <BackToTopButton />
    </div>
  )
}

export default RecommendedMain
