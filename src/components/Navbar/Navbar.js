import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AdminContext from '../../context/AdminContext';

const Navbar = () => {
  const { admin, setAdmin } = useContext(AdminContext);

  const logoutHandler = () => {
    setAdmin(false);
  };

  const menu = admin
    ? <>
        <Link className='navbar-item' to='/employee/add'>Add Employee</Link>
        <Link className='navbar-item' to='/timecards'>Timecards</Link>
        <Link className='navbar-item' to='/settings'>Settings</Link>
        <Link className='navbar-item' to='/logout' onClick={logoutHandler}>Logout</Link>
      </>
    : <>
        <Link className='navbar-item' to='/login'>Login</Link>
      </>;

  return (
    <nav className='navbar is-fixed-top'>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/'>Timeclock</Link>
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;