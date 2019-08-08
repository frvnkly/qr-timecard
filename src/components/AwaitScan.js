import React from 'react';
import keyscanner from 'keyscanner';

const AwaitScan = () => {
  const keyScanHandler = new keyscanner(barcodeValue => {
    console.log(barcodeValue);
  });

  return (
    <section class='hero is-fullheight'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>
            Time and Attendance System
          </h1>
          <h2 class='subtitle'>
            Scan your QR code to clock in or out.
          </h2>
        </div>
      </div>
    </section>
  )
};

export default AwaitScan;