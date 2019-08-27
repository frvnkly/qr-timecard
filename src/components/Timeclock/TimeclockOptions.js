import React from 'react';

const TimeclockOptions = ({ employee, setEmployee, setLoading }) => {
  const clockIn = async () => {
    setLoading(true);

    const recordCollection = window.db.collection('records');
    await recordCollection.add({
      employee: window.db.collection('employees').doc(employee.id),
      in: new Date(),
      out: null,
      time: null,
    });

    setEmployee(null);
    setLoading(false);
  };

  return (
    <div className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            {`${employee.get('firstName')} ${employee.get('lastName')}`}
          </h1>
          <h2 className='subtitle'>
            {employee.get('title')}
          </h2>

          <br />
          <br />

          <button
            style={{ marginRight: '75px' }} 
            className='button is-medium is-success'
            onClick={clockIn}
          >
            <span className="icon">
              <i className="fas fa-sign-in-alt"></i>
            </span>
            <span>Clock in</span>
          </button>
          <button
            style={{ marginLeft: '75px' }}
            className='button is-medium is-danger'
          >
            <span className="icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            <span>Clock out</span>
          </button>

          <br />

          <button
            style={{ marginTop: '50px' }}
            className='button is-medium is-link'
          >
            <span className="icon">
              <i className="fas fa-history"></i>
            </span>
            <span>View timecards</span>
          </button>
        </div>
      </div>
      <div className='hero-foot'>
        <div className='container'>
          <button
            style={{ marginBottom: '50px' }}
            className='button is-medium is-warning'
            onClick={() => { setEmployee(null) }}
          >
            <span className="icon">
              <i className="fas fa-chevron-circle-left"></i>
            </span>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeclockOptions;