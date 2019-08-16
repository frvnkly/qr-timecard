import React, { useState } from 'react';

import AwaitScan from './AwaitScan';
import TimeclockOptions from './TimeclockOptions';
import LoadScreen from '../ui/LoadScreen';

const TimeClock = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ employee, setEmployee ] = useState(null);

  let content;
  if (isLoading) content = <LoadScreen />
  else if (employee) content = (
    <TimeclockOptions
      employee={employee}
    />
  )
  else content = (
    <AwaitScan 
      setIsLoading={setIsLoading}
      setEmployee={setEmployee}
    />
  );

  return (
    <div className='timeclock'>
      {content}
    </div>
  );
};

export default TimeClock;