import React from 'react'
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

import img from '/img/5.png'

import './Modal.css'

const Modal = ({ show, onClose, title, children}) =>{
    return(
      show && (
        <>
        <div className="modal-backdrop" onClick={onClose}></div>
          <div className={`modal-wrapper ${show ? 'active' :''}`}>
          <div className="modal-container">
            <div className="modal-header">
             <div className="modal-title">{title}</div>
              <div onClick={onClose} className='modal-close'><img src={img} alt="" /></div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
        </>
      )
    )
  }
  export default Modal

  