import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar is-fixed-top'>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a className='navbar-item'>Timeclock</a>
          <a className='navbar-item'>Timecards</a>
          <a className='navbar-item'>Settings</a>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;