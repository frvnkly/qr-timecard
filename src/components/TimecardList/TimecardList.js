import React from 'react';

import Timecard from './Timecard';

export default ({ records }) => {
  let content;
  if (records.size === 0) {
    content = (
      <div className='has-text-centered has-text-grey is-italic' style={{ paddingTop: '50px' }}>
        There is nothing here.
      </div>
    );
  }
  else {
    const recordsKeysArr = Array.from(records.keys());
    content = recordsKeysArr.map(k =>
      <Timecard key={k} month={k} cardRecords={records.get(k)} />
    );
  }

  return (
    <div className='container'>
      {content}
    </div>
  );
};