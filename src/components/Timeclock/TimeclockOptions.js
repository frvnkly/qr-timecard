import React from 'react';

const TimeclockOptions = ({ employee }) => {
  return (
    <div className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <h1 class='title'>
            {`${employee.get('firstName')} ${employee.get('lastName')}`}
          </h1>
          <h2 className='subtitle'>
            {employee.get('title')}
          </h2>

          <br />

          <button
            style={{ marginRight: '75px' }} 
            className='button is-medium is-success'
          >
            <span class="icon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span>Clock in</span>
          </button>
          <button
            style={{ marginLeft: '75px' }}
            className='button is-medium is-danger'
          >
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>Clock out</span>
          </button>
        </div>
      </div>
      <div className='hero-foot'>
        <div className='container'>
          <button
            style={{ marginBottom: '50px' }}
            className='button is-medium is-link'
          >
            <span class="icon">
              <i class="fas fa-history"></i>
            </span>
            <span>View timecards</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeclockOptions;