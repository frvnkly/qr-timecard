import React from 'react';

const TimeclockOptions = ({
    employee,
    setEmployee,
    setLoading,
    setFeedback,
    setRecords
  }) => {
    const clockIn = async () => {
      setLoading(true);

      let success = true;
      try {
        const currentTime = new Date();
        const recordCollection = window.db.collection('records');
        await recordCollection.add({
          employee: window.db.collection('employees').doc(employee.id),
          in: currentTime,
          out: null,
          timestamp: currentTime,
        });
      } catch (err) {
        success = false;
      }

      setEmployee(null);
      setLoading(false);
      showFeedback(
        success,
        success ? 'Clocked in!' : 'Something went wrong.'
      );
    };

    const clockOut  = async () => {
      setLoading(true);

      let success = true;
      try {
        const recordCollection = window.db.collection('records');
        const queryRes = await recordCollection
          .where(
            "employee",
            "==",
            window.db.collection('employees').doc(employee.id)
          )
          .orderBy('timestamp', 'desc')
          .limit(1)
          .get();

        if (!queryRes.empty && !queryRes.docs[0].data().out) {
          const latestRecordId = queryRes.docs[0].id;          
          await recordCollection
            .doc(latestRecordId)
            .update({ out: new Date() });
        } else {
          const currentTime = new Date();
          await recordCollection.add({
            employee: window.db.collection('employees').doc(employee.id),
            in: null,
            out: currentTime,
            timestamp: currentTime,
          });
        }
      } catch (err) {
        success = false;
      }

      setEmployee(null);
      setLoading(false);
      showFeedback(
        success,
        success ? 'Clocked out!' : 'Something went wrong.'
      );
    };

    const viewTimecards = async () => {
      setLoading(true);

      let queryRes;
      try {
        const recordCollection = window.db.collection('records');
        queryRes = await recordCollection
          .where(
            'employee',
            '==',
            window.db.collection('employees').doc(employee.id)
          )
          .orderBy('timestamp')
          .get();
      } catch (err) {
        setLoading(false);
        showFeedback(false);
        return;
      }
      
      const records = new Map();
      queryRes.docs.forEach(d => {
        const r = d.data();
        const timestamp = new Date(r.timestamp.seconds * 1000);
        const month = timestamp.getMonth();
        if (!records.has(month)) { records.set(month, []); }
        records.get(month).push({
          in: r.in ? r.in.seconds * 1000 : null,
          out: r.out ? r.out.seconds * 1000 : null,
        });
      });
      
      setRecords(records);
      setLoading(false);
    };

    const showFeedback = (isSuccess, message=null) => {
      const feedbackDuration = 2000;
      const feedback = isSuccess
        ? { type: 'success', message }
        : { type: 'error', message };

      setFeedback(feedback);
      setInterval(() => { setFeedback(null); }, feedbackDuration);
    };

    return (
      <div className='hero is-fullheight-with-navbar'>
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
              onClick={clockOut}
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
              onClick={viewTimecards}
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