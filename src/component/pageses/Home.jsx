import React from 'react'

import OurStory from '../MainBody/OurStory/OurStory'
import SectionsThree from '../MainBody/SectionsThree/SectionsThree'
import SectionsMenu from '../MainBody/SectionsFour/SectionsMenu'
import FullPages from '../MainBody/Sectionsfive/FullPages'
import MainFooter from '../Footer/MainFooter'
import Slider from '../MainBody/Slider/Slider'
import SliderBorder from '../MainBody/Slider/SliderBorder'

const Home = () => {
  return (
    <div>
 
      <Slider />
   <SliderBorder />
      
      <OurStory />
      <SectionsThree /> 
      <SectionsMenu />
      <FullPages />
      <MainFooter />
    </div>
  )
}

export default Home
