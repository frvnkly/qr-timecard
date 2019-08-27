import React, { useEffect } from 'react';
import keyscanner from 'keyscanner';

const AwaitScan = ({ setIsLoading, setEmployee }) => {
  useEffect(
    () => {
      // initiate QR scanner handler
      const keyScanHandler = new keyscanner(async qrValue => {
        setIsLoading(true);
        const query = cleanScannerInput(qrValue);
        const doc = await window.db.collection('employees').doc(query).get();

        if (!doc.exists) {
          setIsLoading(false);
          return;
        }

        setEmployee(doc);
        setIsLoading(false);
        return;
      });

      // remove handler when not awaiting scan
      return function cleanup() {
        keyScanHandler.stop()
      };
    }
  );

  const cleanScannerInput = val => {
    const suffix = 'ArrowDown';
    return val.substring(0, val.length - suffix.length);
  };

  return (
    <section className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>
            Time and Attendance System
          </h1>
          <h2 className='subtitle'>
            Scan your QR code to clock in or out.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AwaitScan;