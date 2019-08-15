import React, { useState } from 'react';

import AwaitScan from './AwaitScan';
import LoadScreen from '../ui/LoadScreen';

const TimeClock = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  const content = isLoading
    ? <LoadScreen />
    : <AwaitScan setIsLoading={setIsLoading} />;

  return (
    <div className='timeclock'>
      {content}
    </div>
  );
};

export default TimeClock;