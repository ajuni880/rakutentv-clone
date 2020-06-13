import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Nav } from 'shared/components';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;