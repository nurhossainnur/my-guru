import { useState } from 'react';

import one from './Sliders_img/1.jpg'
import two from './Sliders_img/2.jpg'
import three from './Sliders_img/3.jpg'
import four from './Sliders_img/4.jpg'
import five from './Sliders_img/5.jpg'
import six from './Sliders_img/6.jpg'
import seven from './Sliders_img/7.jpg'
import eghit from './Sliders_img/8.jpg'

import './Slider.css';

import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel variant="" className='parent-slider' activeIndex={index} 
      onSelect={handleSelect}
      prevIconI={<span aria-hidden="true"className='carousel-control-prev-icon prev-show' />}
      
      nextIcon={<span aria-hidden="true"className='carousel-control-next-icon changed' />} >
                
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={one}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={two}
            alt="Third slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={three}
            alt="First slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={four}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={five}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={six}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
            in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={seven}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
            in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2800}>
          <img
            className="d-block w-100"
            src={eghit}
            alt="Second slide"
            id='silder-img'/>
          <Carousel.Caption>
          <h1 className='slider-body-text'>Serving Best Restaurant,Catering & <br></br> Banquet Services
            in New Jersey</h1>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
      
    );
}

export default Slider
