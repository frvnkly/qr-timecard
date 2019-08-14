import React, { useEffect } from 'react';
import keyscanner from 'keyscanner';

const AwaitScan = () => {
  useEffect(
    () => {
      const keyScanHandler = new keyscanner(qrValue => {
        console.log(qrValue);
      });

      return function cleanup() {
        keyScanHandler.stop()
      };
    }
  );

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