import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Searchbox } from 'shared/components';

const navMenuItem = (label, to, items = []) => ({
  label,
  to,
  items,
});

const navDropdownItems = {
  ticketsOffice: navMenuItem('taquilla', '', [
    navMenuItem('taquilla', '/lorem'),
    navMenuItem('todos los genéros', '/lorem'),
    navMenuItem('populares', '/lorem'),
  ]),
  subscription: navMenuItem('suscripción', '', [
    navMenuItem('suscripción', '/lorem'),
    navMenuItem('películas recien añadidas', '/lorem'),
    navMenuItem('todos los genéros', '/lorem'),
  ]),
};

export default () => {
  const { ticketsOffice, subscription } = navDropdownItems;
  return (
    <nav className='nav'>
      <div className='nav__menu-left'>
        <div className='nav__menu-item'>
          <Dropdown items={ticketsOffice.items}>
            <Link to={ticketsOffice.label} className='hover--secondary'>
              {ticketsOffice.label}
            </Link>
          </Dropdown>
        </div>
        <div className='nav__menu-item nav__menu-item--free'>
          <Link to='/lorem' className='hover--secondary'>
            Free
          </Link>
        </div>
        <div className='nav__menu-item'>
          <Dropdown items={subscription.items}>
            <Link to={subscription.label} className='hover--secondary'>
              {subscription.label}
            </Link>
          </Dropdown>
        </div>
      </div>

      <div className='nav__searchbox'>
        <Searchbox />
      </div>

      <div className='nav__menu-right'>
        <div className='nav__menu-item help-and-devices'>
          <Link to='/streams/11/123' className='hover--secondary text-grey'>
            ayuda y dispositivo
          </Link>
        </div>
        <div className='nav__menu-item'>
          <Link to='/lorem'>entrar</Link>
        </div>
        <div className='nav__menu-item register'>
          <Link to='/aaa/ffff' className='btn btn--secondary'>
            registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};
