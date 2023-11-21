import React, { useEffect, useState } from 'react'

import "lightgallery/css/lightgallery.css"
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';                                      
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';

import LightGallery from 'lightgallery/react/Lightgallery.es5'

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';
import './Banquet.css'
import BackToTopButton from '../BackToTopButton';

    const images =[
    
      { id: '1',imageName: 'https://i.ibb.co/Wk68pv2/g1-1.jpg', tag: 'Guru Banquet'},
      { id: '2',imageName: 'https://i.ibb.co/f4YkWK3/g2-1.jpg', tag: 'Guru Banquet'},
      { id: '3',imageName: 'https://i.ibb.co/nnjp8DV/g3.jpg', tag: 'Guru Banquet'},
      { id: '4',imageName: 'https://i.ibb.co/H7K70w8/g4-1.jpg', tag: 'Guru Banquet'},
      { id: '5',imageName: 'https://i.ibb.co/m67rCHH/g5-1.jpg', tag: 'Guru Banquet'},
      { id: '6',imageName: 'https://i.ibb.co/9HDMwtq/g6-1.jpg', tag: 'Guru Banquet'},


        { id: '7',imageName: 'https://i.ibb.co/k8kwKWQ/c7.jpg', tag: 'Table cloths'},
        { id: '8',imageName: 'https://i.ibb.co/kMDNbJW/c11.jpg', tag: 'Table cloths'},
        { id: '9',imageName: 'https://i.ibb.co/7vYfCcN/c10.jpg', tag: 'Table cloths'},
        { id: '10',imageName: 'https://i.ibb.co/QFn6z8B/c9.jpg', tag: 'Table cloths'},
        { id: '11',imageName: 'https://i.ibb.co/25Y6RxQ/c8.jpg', tag: 'Table cloths'},
        { id: '12',imageName: 'https://i.ibb.co/LQZC7zw/c1.jpg', tag: 'Table cloths'},
        { id: '13',imageName: 'https://i.ibb.co/M9TxCHs/c6.jpg', tag: 'Table cloths'},
        { id: '14',imageName: 'https://i.ibb.co/s9FyvkR/c5.jpg', tag: 'Table cloths'},
        { id: '15',imageName: 'https://i.ibb.co/0KNtNkt/c4.jpg', tag: 'Table cloths'},
        { id: '16',imageName: 'https://i.ibb.co/wQbnVfK/c3.jpg', tag: 'Table cloths'},
        { id: '17',imageName: 'https://i.ibb.co/zGKV6tc/c2.jpg', tag: 'Table cloths'},


        { id: '18',imageName: 'https://i.ibb.co/mtnSsbn/n1.jpg', tag: 'Napkins availability color'},
        { id: '19',imageName: 'https://i.ibb.co/1zBggcs/n2.jpg', tag: 'Napkins availability color'},
        { id: '20',imageName: 'https://i.ibb.co/MG88nF8/n3.jpg', tag: 'Napkins availability color'},
        { id: '21',imageName: 'https://i.ibb.co/bPmVC59/n4.jpg', tag: 'Napkins availability color'},
        { id: '22',imageName: 'https://i.ibb.co/pP0Jb9b/n5.jpg', tag: 'Napkins availability color'},
        { id: '23',imageName: 'https://i.ibb.co/GWQXLSv/n6.jpg', tag: 'Napkins availability color'},
        { id: '24',imageName: 'https://i.ibb.co/XbCpW5g/n7.jpg', tag: 'Napkins availability color'},
        { id: '25',imageName: 'https://i.ibb.co/DWZJdZy/n8.jpg', tag: 'Napkins availability color'},
        { id: '26',imageName: 'https://i.ibb.co/bvwj4x5/n9.jpg', tag: 'Napkins availability color'},
        { id: '27',imageName: 'https://i.ibb.co/9vhfBh6/n10.jpg', tag: 'Napkins availability color'},
        { id: '28',imageName: 'https://i.ibb.co/y0HXVxG/n11.jpg', tag: 'Napkins availability color'},
        { id: '29',imageName: 'https://i.ibb.co/b3DZVwr/n12.jpg', tag: 'Napkins availability color'},
        { id: '30',imageName: 'https://i.ibb.co/R7KKXvf/n13.jpg', tag: 'Napkins availability color'},


        { id: '31',imageName: 'https://i.ibb.co/Khj1sqH/s1.jpg', tag: 'Shagun'},
        { id: '32',imageName: 'https://i.ibb.co/FntLHgd/s2.jpg', tag: 'Shagun'},
        { id: '33',imageName: 'https://i.ibb.co/nwQgT9c/s3.jpg', tag: 'Shagun'},
        { id: '34',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
        { id: '35',imageName: 'https://i.ibb.co/wrbrc1M/s14.jpg', tag: 'Shagun'},
        { id: '36',imageName: 'https://i.ibb.co/JqM15bp/s13.jpg', tag: 'Shagun'},
        { id: '37',imageName: 'https://i.ibb.co/2kNwzwp/s12.jpg', tag: 'Shagun'},
        { id: '38',imageName: 'https://i.ibb.co/c6YgJVt/s11.jpg', tag: 'Shagun'},
        { id: '39',imageName: 'https://i.ibb.co/Qrj52c2/s10.jpg', tag: 'Shagun'},
        { id: '40',imageName: 'https://i.ibb.co/DCR3sVp/s9.jpg', tag: 'Shagun'},
        { id: '41',imageName: 'https://i.ibb.co/cDkfKLr/s8.jpg', tag: 'Shagun'},
        { id: '42',imageName: 'https://i.ibb.co/jrczc1z/s7.jpg', tag: 'Shagun'},
        { id: '43',imageName: 'https://i.ibb.co/qnQnv07/s6.jpg', tag: 'Shagun'},
        { id: '44',imageName: 'https://i.ibb.co/2PPMg0S/s5.jpg', tag: 'Shagun'},
        { id: '45',imageName: 'https://i.ibb.co/Xt38PmQ/s4.jpg', tag: 'Shagun'},

    ]

const Filter = () => {

  const [tag, setTag] = useState('Filter-All');
  const [filteredImages, setFilteredImages] = useState([]);
  

  useEffect( () => {
     tag == 'Filter-All' ? setFilteredImages(images) : setFilteredImages(images.filter( e => e.tag == tag))
    // console.log(nur)
  }, [tag])


  return (
    <>
      <div className="filter-top-text">
        <h3>WE HAVE 3 PARTY HALL</h3>
        <p><span className="span-1">Guru Banquet</span> – 60 to 125 people</p>
        <p><span className="span-1">Shagun</span> – New one 100 to 300 people</p>
      </div>

        <div className='light-gallery'handleSetTag={setTag}>
      <div className="tags">

      <span className="all-filters">
          <TagButton name="Filter-All" handleSetTag={setTag} />
      </span>
                                                                                        
      <TagButton name="Guru Banquet" handleSetTag={setTag} />
      <TagButton name="Shagun" handleSetTag={setTag} />
      <TagButton name="Table cloths" handleSetTag={setTag} />
      <TagButton name="Napkins availability color" handleSetTag={setTag} />
    </div>
    <div className='container'>
      <LightGallery
       speed={500}
       plugins={[lgZoom,lgAutoplay,lgVideo,lgRotate]}>
             {filteredImages.map(e => 
                <img className='image-all image' src={e.imageName}alt="" /> 
             )}
      </LightGallery>

      
      </div>
    </div>
    <BackToTopButton />
    </>
  )
}

const TagButton = ({ name,handleSetTag }) =>{
  return <button className="tag"onClick={ () => handleSetTag(name)}>{name}</button>;
 
}
export default Filter


