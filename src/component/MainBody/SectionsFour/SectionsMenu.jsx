import React from 'react'
import plate from './img/plate.png'
import { useNavigate } from 'react-router-dom'
import './SectionsMenu.css'
const SectionsMenu = () => {
  const navigate = useNavigate();
    return (
        <div className='patrent-menu'>
          <img src={plate} alt="" className='plate' />
        <div className="child-div">
            <h2>OUR MENU</h2>
            <p className='menu-line'></p>
            <p className="menu-para">Guru Palace is the ideal location for whatever the occasion; a casual get together, a special occasion or group dining. We are equipped with the very best equipments for outdoors and our massive production line enables us to produce food for up to 2000 people.</p>
            <button className="check-menu"onClick={() => navigate("/menu")}>Check Our Full Menu</button>
          </div>
        </div>
      )
}

export default SectionsMenu
