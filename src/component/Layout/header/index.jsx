import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/images/logo.svg'
import logOut from '../../../assets/images/log-out.svg'
import user from '../../../assets/images/user.svg'

import "./style.css";
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header_wrp">
   
      <Navbar.Brand href="#home"><img src={logo} alt='' /></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="nav_right justify-content-end">
 
            <div className='user_wrp' >
                <div>
                    <h2>Virender Kundu</h2>
                    <a href='#' >virender.singh@milkanoagro.com</a>
                    <span>Gurgaon CC</span>
                </div>
                <img src={user} alt="" />
            </div>
            <button type='button' className='logout' ><img src={logOut} alt='' /></button>
         
      </Navbar.Collapse>
   
  </Navbar>
  )
}

export default Header;