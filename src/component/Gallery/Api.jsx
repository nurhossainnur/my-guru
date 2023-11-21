import React, {useState } from 'react'
import { AiOutlineZoomIn } from "react-icons/ai";
import './Gallery.css'
import Modal from './Modal';
import BackToTopButton from '../BackToTopButton';


    const images =[
        { id: '1',imageName: 'https://i.ibb.co/JB0kDV5/1.jpg', tag: 'Guru Banquet'},
        { id: '2',imageName: 'https://i.ibb.co/74HRr1M/2.jpg', tag: 'Guru Banquet'},
        { id: '3',imageName: 'https://i.ibb.co/NrJzLfR/3.jpg', tag: 'Guru Banquet'},
        { id: '4',imageName: 'https://i.ibb.co/8XQgYpz/4.jpg', tag: 'Guru Banquet'},
        { id: '5',imageName: 'https://i.ibb.co/31j5YTQ/5.jpg', tag: 'Guru Banquet'},
        { id: '6',imageName: 'https://i.ibb.co/4RLGhdk/6.jpg', tag: 'Guru Banquet'},
        { id: '7',imageName: 'https://i.ibb.co/qWvDQTf/7.jpg', tag: 'Guru Banquet'},
        { id: '8',imageName: 'https://i.ibb.co/zRjjKxW/8.jpg', tag: 'Table '},
        { id: '9',imageName: 'https://i.ibb.co/4gqxGNL/9.jpg', tag: 'Table '},
        { id: '10',imageName: 'https://i.ibb.co/MPbpJhg/10.jpg', tag: 'Table'},
        { id: '11',imageName: 'https://i.ibb.co/prN3z4B/11.jpg', tag: 'Table '},
        { id: '12',imageName: 'https://i.ibb.co/FgSwFwN/12.jpg', tag: 'Table '},
        { id: '13',imageName: 'https://i.ibb.co/RpnxkDs/13.jpg', tag: 'Table '},
        { id: '14',imageName: 'https://i.ibb.co/HpnmrHC/14.jpg', tag: 'Table '},
        { id: '15',imageName: 'https://i.ibb.co/Brr2MVG/15.jpg', tag: 'Table '},
        { id: '16',imageName: 'https://i.ibb.co/gPzxT17/16.jpg', tag: 'Table '},
        { id: '17',imageName: 'https://i.ibb.co/hFVKhZX/17.jpg', tag: 'Table '},
        { id: '18',imageName: 'https://i.ibb.co/JvGQd67/18.jpg', tag: 'Napkins '},
        { id: '19',imageName: 'https://i.ibb.co/r5TVX4c/19.jpg', tag: 'Napkins '},
        { id: '20',imageName: 'https://i.ibb.co/Q9L5ybN/20.jpg', tag: 'Napkins '},

        { id: '21',imageName: 'https://i.ibb.co/0mkZr5s/21.jpg', tag: 'Napkins '},
        { id: '22',imageName: 'https://i.ibb.co/j5KxS37/22.jpg', tag: 'Napkins '},
        { id: '23',imageName: 'https://i.ibb.co/Bwgg9GQ/23.jpg', tag: 'Napkins '},
        { id: '24',imageName: 'https://i.ibb.co/5K7Kg0Q/24.jpg', tag: 'Napkins '},
        { id: '25',imageName: 'https://i.ibb.co/kxg1Y63/25.jpg', tag: 'Napkins '},
        { id: '26',imageName: 'https://i.ibb.co/wYjLzn9/26.jpg', tag: 'Napkins '},
        { id: '27',imageName: 'https://i.ibb.co/1JVSV5T/27.jpg', tag: 'Napkins '},
        { id: '28',imageName: 'https://i.ibb.co/3pJ3hQ5/28.jpg', tag: 'Napkins '},
        { id: '29',imageName: 'https://i.ibb.co/D1SfcQ4/29.jpg', tag: 'Napkins '},
        { id: '30',imageName: 'https://i.ibb.co/m9QqjDh/30.jpg', tag: 'Napkins '},
        { id: '31',imageName: 'https://i.ibb.co/ky2LysS/31.jpg', tag: 'Shagun'},
        { id: '32',imageName: 'https://i.ibb.co/VWMgmVK/32.jpg', tag: 'Shagun'},
        { id: '33',imageName: 'https://i.ibb.co/FBsY95g/33.jpg', tag: 'Shagun'},
        { id: '34',imageName: 'https://i.ibb.co/vP6Ph49/34.jpg', tag: 'Shagun'},
        { id: '35',imageName: 'https://i.ibb.co/3hLfxTW/35.jpg', tag: 'Shagun'},
        { id: '36',imageName: 'https://i.ibb.co/k3k4Q8c/36.jpg', tag: 'Shagun'},
        { id: '37',imageName: 'https://i.ibb.co/s2GS5sJ/37.jpg', tag: 'Shagun'},
        { id: '38',imageName: 'https://i.ibb.co/F7YYG1q/38.jpg', tag: 'Shagun'},
        { id: '39',imageName: 'https://i.ibb.co/2tN3mPC/39.jpg', tag: 'Shagun'},
        { id: '40',imageName: 'https://i.ibb.co/sWb0XCd/40.jpg', tag: 'Shagun'},

        { id: '41',imageName: 'https://i.ibb.co/Gn37Y51/41.jpg', tag: 'Napkins '},
        { id: '42',imageName: 'https://i.ibb.co/r2FRhZt/42.jpg', tag: 'Napkins '},
        { id: '43',imageName: 'https://i.ibb.co/p49fdcg/43.jpg', tag: 'Napkins '},
        { id: '44',imageName: 'https://i.ibb.co/kgMfHtn/44.jpg', tag: 'Napkins '},
        { id: '45',imageName: 'https://i.ibb.co/wgNbFMT/45.jpg', tag: 'Napkins '},
        { id: '46',imageName: 'https://i.ibb.co/99gjVv1/46.jpg', tag: 'Napkins '},
        { id: '47',imageName: 'https://i.ibb.co/7YyGWKb/47.jpg', tag: 'Napkins '},
        { id: '48',imageName: 'https://i.ibb.co/jRt1b5L/48.jpg', tag: 'Napkins '},
        { id: '49',imageName: 'https://i.ibb.co/tLCbS5s/49.jpg', tag: 'Napkins '},
        { id: '50',imageName: 'https://i.ibb.co/54PmK68/50.jpg', tag: 'Napkins '},
        { id: '51', imageName: 'https://i.ibb.co/3y9XhpT/51.jpg', tag: 'Shagun'},
        { id: '52',imageName: 'https://i.ibb.co/hcS45db/52.jpg', tag: 'Shagun'},
        { id: '53',imageName: 'https://i.ibb.co/ctSxhbD/53.jpg', tag: 'Shagun'},
        { id: '54',imageName: 'https://i.ibb.co/5MZJY5J/54.jpg', tag: 'Shagun'},
        { id: '55',imageName: 'https://i.ibb.co/sJFZCM4/55.jpg', tag: 'Shagun'},
        { id: '56',imageName: 'https://i.ibb.co/31xkx9b/56.jpg', tag: 'Shagun'},
        { id: '57',imageName: 'https://i.ibb.co/wp8nj81/57.jpg', tag: 'Shagun'},
        { id: '58',imageName: 'https://i.ibb.co/1zQZg2S/58.jpg', tag: 'Shagun'},
        { id: '59',imageName: 'https://i.ibb.co/hRmHc13/59.jpg', tag: 'Shagun'},
        { id: '60',imageName: 'https://i.ibb.co/CJkb8HW/60.jpg', tag: 'Shagun'},

        { id: '61',imageName: 'https://i.ibb.co/1myDKZy/61.jpg', tag: 'Napkins '},
        { id: '62',imageName: 'https://i.ibb.co/1GvZhFz/62.jpg', tag: 'Napkins '},
        { id: '63',imageName: 'https://i.ibb.co/TkHmB7y/63.jpg', tag: 'Napkins '},
        { id: '64',imageName: 'https://i.ibb.co/FwMSdPN/64.jpg', tag: 'Napkins '},
        { id: '65',imageName: 'https://i.ibb.co/kqxk8z9/65.png', tag: 'Napkins '},
        { id: '66',imageName: 'https://i.ibb.co/CVrqsSH/66.jpg', tag: 'Napkins '},
        { id: '67',imageName: 'https://i.ibb.co/wBsjHkm/67.jpg', tag: 'Napkins '},
        { id: '68',imageName: 'https://i.ibb.co/GMDMZJF/68.jpg', tag: 'Napkins '},
        { id: '69',imageName: 'https://i.ibb.co/TL5y1rh/69.jpg', tag: 'Napkins '},
        { id: '70',imageName: 'https://i.ibb.co/4KRyLFM/70.jpg', tag: 'Napkins '},
        { id: '71',imageName: 'https://i.ibb.co/Lh5X65H/71.jpg', tag: 'Shagun'},
        { id: '72',imageName: 'https://i.ibb.co/Wn2S5zr/72.jpg', tag: 'Shagun'},
        { id: '73',imageName: 'https://i.ibb.co/10Y34jk/73.jpg', tag: 'Shagun'},
        { id: '74',imageName: 'https://i.ibb.co/7y9bz06/74.jpg', tag: 'Shagun'},
        { id: '75',imageName: 'https://i.ibb.co/MphY5Mc/75.jpg', tag: 'Shagun'},
        { id: '76',imageName: 'https://i.ibb.co/JFtbB1V/76.jpg', tag: 'Shagun'},
        { id: '77',imageName: 'https://i.ibb.co/qWvDQTf/7.jpg', tag: 'Shagun'},
        { id: '78',imageName: 'https://i.ibb.co/0jvvM4w/78.jpg', tag: 'Shagun'},
        { id: '79',imageName: 'https://i.ibb.co/WnrfmZs/5.jpg', tag: 'Shagun'},

        { id: '80',imageName: 'https://i.ibb.co/9rqwvsz/3.jpg', tag: 'Shagun'},
        { id: '81',imageName: 'https://i.ibb.co/74HRr1M/2.jpg', tag: 'Shagun'},
        { id: '82',imageName: 'https://i.ibb.co/VCJ8md9/82.jpg', tag: 'Shagun'},
        { id: '83',imageName: 'https://i.ibb.co/zRjjKxW/8.jpg', tag: 'Table '},
        { id: '84',imageName: 'https://i.ibb.co/r2FRhZt/42.jpg', tag: 'Napkins '},
        { id: '51', imageName: 'https://i.ibb.co/3y9XhpT/51.jpg', tag: 'Shagun'},
    ]

const Api = () => {
  const [tags, setTags] = useState('');
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(1);
  const [actives, setActives] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = images.slice(firstIndex, lastIndex);
  const npage = Math.ceil(images.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const handleClick =(i)=>{
     setCurrentPage(i)
     setActive(i)
     setActives(i)
  };
  const handleClicks =(i)=>{
    setActives(i)
    console.log(i)
    setShow(true)
 };
 const handle =(ik)=>{
  setTags(ik)
  console.log(ik)
};
 const onModalClose = () => {
  setShow(false);
 };

 const handleNext = () =>{
  if (actives < images.length - 1) {
    setActives(actives + 1);
  };
 }
 const handlePrev = () =>{
  if (actives > 0) {
    setActives( actives - 1);
  }
 }

  return (
    <div className='light-gallerys'>
      <div className='containers gallery-containers'>
             {records.map((e,i )=> 
              <div key={i} className={i === actives ? "active" : ""} onClick={ () => handleClicks(e.id)}>
               
                  <div className='light-gray' key={i} onClick={ () => handle(e.tag)}>
                    <img className='gallery-image' src={e.imageName}alt="" /> 
                    <div className="cont-text-img">
                        <span className='gallery-search-icon'><AiOutlineZoomIn /></span>
                        <p className='gallery-img-text'>{e.tag}</p> 
                    </div>
                </div>
              </div>
             )}
      </div>
      <Modal show={show} onClose={onModalClose}>
        <ImageSlider actives={actives} onNext={handleNext} onPrev={handlePrev} />
        <p className='gallery-img-text modal-text'>{tags}</p>
      </Modal>

      {
        numbers.map((n, i) =>
          <button id='gallery-bag' className={n==active?"active-btn":""} onClick={()=>handleClick(n)}><span className='cgallery-span1'><span className="cgallery-span2">{n}</span></span></button>
        )
      }
              <div className="margin"></div>
              <BackToTopButton />
    </div>
  )
}

const ImageSlider = ({actives, onNext, onPrev}) =>{
  return(
    <div className="image-slider-wrapper">
       <div className="image-slides">
        {images.map(e => 
        <div className="tagg" onClick={ () => handleClickTag(e.tag)}>
          <Slides {...e} key={e.tag} actives={e.id === actives} />
        </div>
          
        )}
       </div>
    </div>
  );
};
const Slides = ({imageName,tag,actives, id}) =>{
  return(
    <div className="image-slide" key={id}> 
      
      <img src={imageName} alt={tag}className={`img-height ${actives ? "active" : ""}`}  />
   
    </div>
  );
};
// console.log(e.tag)
export default Api


