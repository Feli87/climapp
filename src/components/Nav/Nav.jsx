import React from 'react';
import Logo from '../../assets/img/logoHenryLarge.png';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="box ">
      <div className="title">
        <img src={Logo} className="logo" alt="Logo"/>    
      </div>
      <div className="title">
       
      </div>
      <div className="nav">
        <span className="logo-text d-none d-sm-none d-md-block">Weather App</span>    
      </div>
    </div>
  );
};

export default Nav;
