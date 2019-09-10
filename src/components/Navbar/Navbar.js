import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar is-fixed-top'>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a className='navbar-item' href='#'>Timeclock</a>
          <a className='navbar-item' href='#'>Add Employee</a>
          <a className='navbar-item' href='#'>Timecards</a>
          <a className='navbar-item' href='#'>Settings</a>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;