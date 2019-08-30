import React from 'react';

export default ({ feedback }) => {
  const { type, message } = feedback;

  let icon;
  let color;
  switch (type) {
    case 'success':
      icon = 'check-circle';
      color = 'has-text-success';
      break;
    case 'error':
      icon = 'times-circle';
      color = 'has-text-danger';
      break;
    default:
  }

  return (
    <div className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            <span className={`icon is-large ${color}`}>
              <i className={`fas fa-3x fa-${icon}`}></i>
            </span>
          </h1>
          <br />
          <h2 className='subtitle'>
            {message}
          </h2>
        </div>          
      </div>
    </div>
  );
};