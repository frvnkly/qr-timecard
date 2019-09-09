import React from 'react';

import TimecardList from '../TimecardList';

const EmployeeTimecard = ({ setEmployee, setRecords, records }) => {
  const backHandler = () => {
    setEmployee(null);
    setRecords(null);
  };

  return (
    <div>
      <div className='level' style={{ paddingTop: '100px' }}>
        <div className='level-item'>
          <button
            className='button is-medium is-warning'
            onClick={backHandler}
          >
            <span className="icon">
              <i className="fas fa-chevron-circle-left"></i>
            </span>
            <span>Back</span>
          </button>
        </div>
      </div>
      <TimecardList records={records} />
    </div>
  );
};

export default EmployeeTimecard;