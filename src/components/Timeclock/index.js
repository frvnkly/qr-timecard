import React, { useState } from 'react';

import AwaitScan from './AwaitScan';
import TimeclockOptions from './TimeclockOptions';
import LoadScreen from '../ui/LoadScreen';
import Feedback from '../Timeclock/Feedback';
import TimecardList from '../Timeclock/TimecardList';

const TimeClock = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ employee, setEmployee ] = useState(null);
  const [ feedback, setFeedback ] = useState(null);
  const [ records, setRecords ] = useState(null);

  let content;
  if (isLoading) content = <LoadScreen />
  else if (feedback) content = <Feedback feedback={feedback} />
  else if (records) content = <TimecardList records={records} />
  else if (employee) content = (
    <TimeclockOptions
      employee={employee}
      setEmployee={setEmployee}
      setLoading={setIsLoading}
      setFeedback={setFeedback}
      setRecords={setRecords}
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