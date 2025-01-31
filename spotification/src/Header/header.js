import React from 'react';
import './header.css';
import smallLeftArrow from "../Assets/Icons/smallLeftArrow.png"; // Adjust the import path as necessary
import smallRightArrow from "../Assets/Icons/smallRightArrow.png"; // Adjust the import path as necessary
import searchIcon from '../Assets/Icons/search.png'; // Adjust the import path as necessary

const Header = () => {
  return (
    <nav className="header_navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeftArrow} alt="Seta esquerda"/>
        </button>
        <button className="arrow-right">
          <img src={smallRightArrow} alt="Seta direita"/>
        </button>
      </div>
      <div className="header_search">
        <img src={searchIcon} alt="Search"/>
        <input id="search-input" type="text" maxLength="800" placeholder="What would you like to listen to?"/>
      </div>
      <div className="header_login">
        <button className="subscribe">Sign up</button>
        <button className="login">Get in</button>
      </div>
    </nav>
  )
};

export default Header;
