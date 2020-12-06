import React from 'react';
import Logo from '../../assets/img/logoHenryLarge.png';
import './Nav.css';

function Nav() {
  return (
    <div className="box">
      <div className="nav-left">
        <img src={Logo} className="logo" alt="Logo"/>    
      </div>
      <div className="nav-rigth">
        <span className="span-text d-none d-sm-none d-md-block">Weather App v 1.1.0</span>    
      </div>
    </div>
  );
};

export default Nav;
