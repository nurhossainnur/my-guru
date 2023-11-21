import React from 'react'
import './Catering.css'
import BackToTopButton from '../BackToTopButton'
const CateringPhoto = () => {
  return (
    <div className="catering-main">
        <div className='gallery-bg-c'>
            <h1>Catering</h1>
        </div>
        <div className="catering-para">
            <p>We specializes in all types of catering. Ranging from the basic food pick up for at least 30 people to 100% custom catering. We are equipped with the very best equipments for outdoors and our massive production line enables us to produce food for up to 2000 people. </p>
            <p>Our recipes are made from scratch using the freshest of local ingredients, organic when ever possible. Meals are simple, delicious and nutritious. We always find the best ingredients and make sure everyone’s food requirements are covered in our menu selections. </p>
            <p>
            We have maintained the flexibility and level of personal service, which it prides itself on. We have entertained thousands of guests through evocative aromas and flavours of personalised hand manufactured cuisine all over. We present an extensive and innovative menu. that offers a truly unsurpassed range of authentic and innovative Indian vegetarian dishes, drawing from the cuisine’s of various regions of India. If you require a dish that is not listed on our menu, please do enquire and we will be happy to accommodate your requirements. We cater for clients with specific dietary requirements and can adapt our recipes to your individual tastes and preferences.</p>
        </div>
        <BackToTopButton />
    </div>
  )
}

export default CateringPhoto
