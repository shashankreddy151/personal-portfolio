import React, { useState } from 'react';

const Header = ({ onMenuToggle }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    onMenuToggle();
  };

  return (
    <header id="header">
      <h1><a href="/">Future Imperfect</a></h1>
      <nav className="links">
        <ul>
          <li><a href="#">Lorem</a></li>
          <li><a href="#">Ipsum</a></li>
          <li><a href="#">Feugiat</a></li>
          <li><a href="#">Tempus</a></li>
          <li><a href="#">Adipiscing</a></li>
        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="search">
            <a 
              className="fa-search" 
              href="#search" 
              onClick={toggleSearch}
            >
              Search
            </a>
            <form 
              id="search" 
              method="get" 
              action="#"
              style={{ display: isSearchVisible ? 'block' : 'none' }}
            >
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>          <li className="menu">
            <a 
              className="fa-bars" 
              href="#menu"
              onClick={handleMenuClick}
            >
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
