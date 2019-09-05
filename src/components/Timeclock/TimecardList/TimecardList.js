import React from 'react';

import Timecard from './Timecard';

export default ({ records }) => {
  let content;
  if (records.size === 0) { content = null }
  else {
    const recordsKeysArr = Array.from(records.keys());
    content = recordsKeysArr.map(k =>
      <Timecard key={k} month={k} cardRecords={records.get(k)} />
    );
  }

  return content;
};