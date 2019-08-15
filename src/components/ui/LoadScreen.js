import React from 'react';

import Spinner from './Spinner';

const LoadScreen = () => (
  <div className='hero is-fullheight'>
    <div className='hero-body'>
      <Spinner />
    </div>
  </div>
);

export default LoadScreen;
