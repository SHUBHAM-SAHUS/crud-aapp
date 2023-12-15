import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './style.css';
import product from '../../../assets/images/product.svg';

const RightArrow = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='6' height='12' viewBox='0 0 6 12' fill='none'>
      <path
        d='M0.229439 0.263162C0.0825295 0.432341 0 0.661766 0 0.900985C0 1.1402 0.0825295 1.36963 0.229439 1.53881L4.10846 6.00447L0.229439 10.4701C0.086693 10.6403 0.0077061 10.8682 0.00949156 11.1047C0.011277 11.3413 0.0936919 11.5675 0.238985 11.7348C0.384278 11.9021 0.580825 11.9969 0.786293 11.999C0.991761 12.001 1.18971 11.9101 1.33751 11.7458L5.77056 6.64229C5.91747 6.47311 6 6.24369 6 6.00447C6 5.76525 5.91747 5.53583 5.77056 5.36665L1.33751 0.263162C1.19055 0.0940342 0.991266 -0.000976562 0.783473 -0.000976562C0.57568 -0.000976562 0.376394 0.0940342 0.229439 0.263162Z'
        fill='currentColor'
      />
    </svg>
  );
};

const Sidebar = () => {
  return (
    <div className='sidebar_wrp'>
      <Nav variant='pills'>
        <Nav.Item>
          <NavLink className='nav-link' to={'/'}>
            <img src={product} alt='' />
            Product
            <RightArrow />
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to={'/addnew'} className='nav-link'>
            <img src={product} alt='' />
            Add New
            <RightArrow />
          </NavLink>
        </Nav.Item>
        <hr />
      </Nav>
    </div>
  );
};

export default Sidebar;
