import React, { useState } from "react";

const WeddingPackage = () => {

    const [activemenu, setActivemenu] = useState(1);

    const handleClick =(i)=>{
        setActivemenu(i)
     };

  return (
    <div>
        <div className="wedding-head">
            <h4>WEDDING PACKAGES</h4>
            <p className='wedding-line '></p>
        </div>

        <p className='package-menu-head'>All items to be selected from our Banquet Menu</p>

        <div className="wedding-menu">
            <div className="menu-div">
               
                <span id='STANDARD'className={1 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(1)}>STANDARD WEDDING</span> 
                <span id='DELUXE'className={2 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(2)} >DELUXE WEDDING</span> 
                <span id='GOLD'className={3 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(3)}>GOLD PACKAGE</span> 
                <span id='OPTIONAL'className={4 === activemenu ? "active-cat active-page":""} onClick={()=>handleClick(4)} >OPTIONAL ITEMS</span>
                
            </div>
            <p></p>
            <div className="menu-page-div">
                    {/* 1 */}
                <div id=""className={1 === activemenu ? "menu-p-1 active-page":"menu-p-1"}>
                    <div className="oneMenu">
                    <div>
                       <p> <span className='menu-pp-1'>COCKTAIL HOUR</span>  <br />
                        One Vegetarian Appetizer <br />
                        ( Butler Pass ) <br />
                         One Non-Veg Appetizer <br />
                        ( Butler Pass ) <br />
                        Two Vegetarian Appetizers <br />
                        ( Tabled ) <br />
                         One Non-Veg Appetizer <br />
                        ( Tabled )</p>
                    </div>
                    <div>
                        <p><span className='menu-pp-2'>THE WEDDING BUFFET DINNER</span> <br />
                        One Chicken Entree<br />
                        One Lamb or Goat Entree<br />
                        One Paneer Entree<br />
                        Two Vegetable Entree<br />
                        One Dal/ Lentil Entree<br />
                        One Choice of Rice<br />
                        Three Choices of Bread<br />
                        Salad Bar<br />
                        Raita<br />
                        Achar<br />
                        Papad</p>
                    </div>
                    <div>
                        <p> <span className='menu-pp-3'>DESSERTS</span> <br />
                        Choice of Two Desserts</p>
                    </div>
                    <div>
                            <p><span className='menu-pp-4'>EXTRAS</span> <br />
                            Sales Tax / Catering Staff / Food Handlers</p>
                    </div>
                    </div>
                </div>    
                    <p></p>
                    {/* 2 */}
                <div className={2 === activemenu ? "menu-p-2 active-page":"menu-p-2"}>
                    <div className="twoMenu">
                    <div>
                            <p><span className='menu-pp-1'>COCKTAIL HOUR</span> <br />
                            Two Vegetarian Appetizer <br />
                            ( Butler Pass ) <br />
                            Two Non-Veg Appetizer <br />
                            ( Butler Pass ) <br />
                            Two Vegetarian Appetizers <br />
                            ( Tabled ) <br />
                            Two Non-Veg Appetizer <br />
                            ( Tabled )</p>
                    </div>
                    <div>
                            <p><span className='menu-pp-2'>THE WEDDING BUFFET DINNER</span> <br />
                            One Chicken Entree <br />
                            One Lamb or Goat Entree <br />
                            One Paneer Entree <br />
                            Two Vegetable Entree <br />
                            One Pasta Entree <br />
                            One Dal/ Lentil Entree <br />
                            One Choice of Rice <br />
                            Three Choices of Bread <br />
                            Salad Bar <br />
                            Raita <br />
                            Achar <br />
                            Papad</p>
                    </div>
                    <div>
                        <p><span className='menu-pp-3'>DESSERTS</span> <br />
                            Choice of Two Desserts</p>
                    </div>
                    <div>
                    <p><span className='menu-pp-4'>EXTRAS</span> <br />
                    Sales Tax / Catering Staff / Food Handlers</p>
                    </div>
                    </div>
                </div> 
                <p></p>
                    {/* 3 */}
                <div className={3 === activemenu ? "menu-p-3 active-page":"menu-p-3"}>
                    <div className="threeMenu">
                    <div>
                            <p><span className='menu-pp-1'>COCKTAIL HOUR</span> <br />
                            Two Vegetarian Appetizer <br />
                            ( Butler Pass ) <br />
                            Two Non-Veg Appetizer <br />
                            ( Butler Pass ) <br />
                            Two Vegetarian Appetizers <br />
                            ( Tabled ) <br />
                            One Non-Veg Appetizer <br />
                            ( Tabled ) <br />
                            One Non-Veg Live Action Station <br />
                            One Veg. Live Action Station</p>
                    </div>
                    <div>
                    <p><span className='menu-pp-2'>THE WEDDING BUFFET DINNER</span> <br />
                            One Chicken Entree <br />
                            One Lamb or Goat Entree <br />
                            One Paneer Entree <br />
                            Two Vegetable Entree <br />
                            One Pasta Entree <br />
                            One Dal/ Lentil Entree <br />
                            One Choice of Rice <br />
                            Three Choices of Bread <br />
                            Salad Bar <br />
                            Raita / Achar / Papad </p>
                    </div>
                    <div>
                        <p><span className='menu-pp-3'>DESSERTS</span> <br />
                        Choice of Two Desserts</p>
                    </div>
                    <div>
                    <p><span className='menu-pp-4'>EXTRAS</span> <br />
                            Sales Tax / Catering Staff / Food Handlers</p>
                    </div>
                    </div>
                </div> 
                <p></p>
                    {/* 4 */}
                <div className={4 === activemenu ? "menu-p-4 active-page":"menu-p-4"}>
                 
                    <div className="fourMenu">
                    <div>
                            <p><span className='menu-p-4-1'>Per Person</span> <br />
                            Hors D’oeuvre <br />
                            ( Additional ) $ 1.50 <br />
                            Dessert <br />
                            ( Additional ) $ 1.50 <br />
                            Live Sushi Station <br />
                            (Veg & Non- Veg) $ 7.50 <br />
                            Cold Display <br />
                            (International) $ 7.00 <br />
                            Shrimp Butler Pass $ 3.50 <br />
                            Lamb Chop $ 5.50 <br />
                            Leg of lamb $ 7.00 <br />
                            Upgraded Viennese $ 10.00 <br />
                            Chocolate Fountain $ 8.00 <br />
                            Paan $ 1.50 <br />
                            Additional Live Action Station$ 3.00</p>
                    </div>

                    <div>
                    <p><span className='menu-p-4-2'>Choice Of Standard <br />Live Action Stations</span> <br />
                            
                            Pani Puri Live <br />
                            Chaat Live <br />
                            Tava Tikki Live <br />
                            Ragda patties Live <br />
                            Dosa Live <br />
                            Hakka Noodles Live <br />
                            Pasta Live <br />
                            Mexican Wraps Live <br />
                            Kathi Rolls Live <br />
                            Grilled Kebabs Live</p>
                    </div>
                   
                    </div>
                  
                </div> 
           
            </div>
        </div>


    </div>
  )
}

export default WeddingPackage
