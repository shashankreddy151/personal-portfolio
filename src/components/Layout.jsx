import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Menu from './Menu';

const Layout = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={`is-preload ${isMenuVisible ? 'is-menu-visible' : ''}`}>
      <div id="wrapper">
        <Header onMenuToggle={toggleMenu} />
        <Menu isVisible={isMenuVisible} onClose={() => setIsMenuVisible(false)} />
        
        {children}
        
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
