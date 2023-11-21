import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './img/logo1.png'
import './index.css'
import Filter from './component/BanquetPages/Filter'
import {BrowserRouter, Link, Route, Router, RouterProvider, Routes, createBrowserRouter} from 'react-router-dom'
import Menu from './component/pageses/Menu';
import Gallery from './component/pageses/Gallery';
import Home from './component/pageses/Home';
import Catering from './component/pageses/Catering';
import Banquet_Fasility from './component/pageses/Banquet_Fasility';
import Contuct_Us from './component/pageses/Contuct_Us';
import RecoAllPage from './component/RecommendedPage/RecoAllPage';
import About_Us from './component/pageses/About_Us';
import MainEvent from './component/EVENT/MainEvent';
import EventOne from './component/EVENT/EventOne';
import EventTwo from './component/EVENT/EventTwo';
import EventThree from './component/EVENT/EventThree';
import EventFour from './component/EVENT/EventFour';

import guru_facility_pdf from '/img/Facility.pdf'

function App() {
  const [activenav, setActivenav] = useState(1);

  const handleClick =(i)=>{
      setActivenav(i)
   };


  return (
    <BrowserRouter>
   <>
       <Navbar expand="md" className="blacks">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <a href=""><img className='header-img' src={img} alt="" /></a>
        <Navbar.Collapse id="basic-navbar-nav" className='menu-bars'>
        <div className="navbar-menu">
        <Nav className="me-auto">  
          <Nav.Link as={Link} to="/" className={`menu-home ${ 1 == activenav ? "active-nav":"" }`} onClick={()=>handleClick(1)}>Home</Nav.Link>
          <hr className='hrm'></hr>
          <Nav.Link as={Link} to="/menu"className={2 == activenav ? "active-nav":""} onClick={()=>handleClick(2)} id='banquet-menu-1'>Menu</Nav.Link>
          <hr className='hrm'></hr>
          <NavDropdown title="About Banquet"className={3 == activenav ? "active-nav":""} onClick={()=>handleClick(3)} id="basic-nav-dropdown">
          <hr className='hrm'></hr>
            <NavDropdown.Item as={Link} to="/banquet-fasility"className='hrms hrms-2'>Banquet Facility </NavDropdown.Item>
            <hr className='hrm'></hr>
            <NavDropdown.Item  href={guru_facility_pdf} className='hrms'>Banquet Rules</NavDropdown.Item>
            <hr className='hrm'></hr>
            <NavDropdown.Item as={Link} to="/recommended"className='hrms'>
            Recommended Vendors
            </NavDropdown.Item>
         
          </NavDropdown>
          <hr className='hrm'></hr>
          <Nav.Link as={Link} to="/gallery"className={4 == activenav ? "active-nav":""} onClick={()=>handleClick(4)} id='banquet-menu-2'>Gallery</Nav.Link>
          <hr className='hrm'></hr>
          <Nav.Link as={Link} to="/catering"className={`catring-menu ${ 5 == activenav ? "active-nav":"" }`} onClick={()=>handleClick(5)}>CATERING</Nav.Link>
          <hr className='hrm'></hr>
          <Nav.Link as={Link} to="/contuct-us" className={`contuct-us ${ 6 == activenav ? "active-nav":"" }`} onClick={()=>handleClick(6)}>Contact Us</Nav.Link>

        </Nav>
        </div>
        </Navbar.Collapse>
        <a className='book-a-banqued' href="">BOOK A BANQUET</a>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/' element={<Home />} />
        <Route path='/banquet-fasility' element={<Banquet_Fasility />} />
        <Route path='/recommended' element={<RecoAllPage />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/contuct-us' element={<Contuct_Us />} />
        <Route path='/about-us' element={<About_Us />} />

        <Route path='/mainevent' element={<MainEvent />} />
        <Route path='/eventfour' element={<EventFour />} />
        <Route path='/eventtwo' element={<EventTwo />} />
        <Route path='/eventone' element={<EventOne />} />
        <Route path='/eventthree' element={<EventThree />} />
      </Routes>
    </div>
    {/* <span className='width-bottom'></span> */}
   </>
   </BrowserRouter>
  //  <Filter />
)
}

export default App

