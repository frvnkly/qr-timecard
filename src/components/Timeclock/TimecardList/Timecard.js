import React from 'react';

export default ({ month, cardRecords }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const renderRows = () => {
    return cardRecords.map(cr => {
      const timeIn = cr.in ? new Date(cr.in) : null;
      const timeOut = cr.out ? new Date(cr.out) : null;
      const timeClocked = (cr.in && cr.out)
        ? convertToHours(cr.out - cr.in)
        : null;

      return (
        <tr key={cr.in}>
          <td>{formatDateTime(timeIn)}</td>
          <td>{formatDateTime(timeOut)}</td>
          <td>{timeClocked}</td>
        </tr>
      );
    });
  };

  const formatDateTime = dateTime => {
    if (!dateTime) return null;

    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const year = dateTime.getFullYear();

    const ampm = dateTime.getHours() < 12 ? 'AM' : 'PM';
    const hour = dateTime.getHours() % 12 === 0
      ? 12
      : dateTime.getHours() % 12;
    const minute = String(dateTime.getMinutes()).padStart(2, '0');

    return `${month}/${day}/${year} ${hour}:${minute}${ampm}`;
  };

  const convertToHours = milliseconds => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    return `${hours}:${String(minutes).padStart(2, '0')}`;
  };

  return (
    <div className='columns is-centered' style={{ paddingTop: '50px' }}>
      <div className='column is-half'>
        <h1 className='title'>{monthNames[month]}</h1>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>In</th>
              <th>Out</th>
              <th>Clocked</th>
            </tr>
          </thead>

          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};