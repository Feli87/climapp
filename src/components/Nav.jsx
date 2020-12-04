import React from 'react';
import Logo from '../logoHenry2.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="box">
      <div className="title">
        <img src={Logo} className="logo" alt="Logo"/> Weather App       
      </div>
      <div className="nav">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
