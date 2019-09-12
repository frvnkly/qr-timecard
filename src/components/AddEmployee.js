import React, { useState } from 'react';

const AddEmployee = () => {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ newEmployee, setNewEmployee ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const firstNameHandler = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  
  const lastNameHandler = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const titleHandler = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const employeeCollection = window.db.collection('employees');
      const newEmployeeRef = await employeeCollection.add({
        firstName,
        lastName,
        title
      });
      setNewEmployee({
        id: newEmployeeRef.id,
        firstName,
        lastName,
        title
      });
    } catch (err) {

    };

    setLoading(false);
  };

  const inputStyle = {
    display: 'block',
    width: '50%',
    margin: '20px auto'
  };

  const formValid = Boolean(firstName && lastName);

  return (
    <div className='hero is-fullheight-with-navbar'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title'>Add Employee</h1>
          <input
            className='input'
            style={inputStyle}
            type='text'
            value={firstName}
            onChange={firstNameHandler}
            placeholder='First Name'
          />
          <input
            className='input'
            style={inputStyle}
            type='text'
            value={lastName}
            onChange={lastNameHandler}
            placeholder='Last Name'
          />
          <input
            className='input'
            style={inputStyle}
            type='text'
            value={title}
            onChange={titleHandler}
            placeholder='Title'
          />
          <button
            className={`button is-primary ${loading ? 'is-loading' : ''}`}
            disabled={!formValid}
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;