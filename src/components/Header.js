import React from 'react';
import logo from '../web-logo.svg';

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <img src={logo} className="site-logo" alt="VAM Digital Limited" title="VAM Digital Limited" />
        </div>
        <div className="header__button">
          <a href="mailto:vaibhav@vamdigital.com" className="button">Contact Us</a>
        </div>
      </div>
    </header>
  )
}

export default Header;