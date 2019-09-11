import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import config from '../config.json';

import AdminContext from '../context/AdminContext';

const Login = () => {
  const { setAdmin } = useContext(AdminContext);

  const [ loginSuccess, setLoginSuccess ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const usernameChangeHandler = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordChangeHandler = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const loginHandler = e => {
    e.preventDefault();
    if (username === config.adminUser && password === config.adminPassword) {
      setAdmin(true);
      setLoginSuccess(true);
    }
  };

  const inputStyle = {
    display: 'block',
    width: '50%',
    margin: '20px auto'
  };

  if (loginSuccess) return <Redirect to='/' />;

  return (
    <div className='hero is-fullheight-with-navbar'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>Admin Login</h1>
          <input
            className='input'
            style={inputStyle}
            type='text'
            value={username}
            onChange={usernameChangeHandler}
            placeholder='Username'
          />
          <input
            className='input'
            style={inputStyle}
            type='password'
            value={password}
            onChange={passwordChangeHandler}
            placeholder='Password'
          />
          <button className='button is-primary' onClick={loginHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;