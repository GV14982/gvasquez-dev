import React, { useState } from 'react';
import Airtable from 'airtable';
import { useSpring, animated } from 'react-spring';
var base = new Airtable({ apiKey: process.env.REACT_APP_KEY }).base(
  'appLytH43z5MMPuPn'
);

const newAirtableRecord = (formState) => {
  const record = new Promise((resolve, reject) => {
    base('Contact').create(
      [
        {
          fields: formState,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          reject();
        }
        resolve(formState);
      }
    );
  });

  return record;
};

export const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    'phone-num': '',
    description: '',
  };
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [display, setDisplay] = useState(false);

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await newAirtableRecord(formState);
    setFormState(initialState);
    setSubmitted(true);
    setDisplay(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    return false;
  };

  const thanks = useSpring({
    to: { marginTop: submitted ? '0vh' : '-15vh' },
    onRest: () => {
      if (!submitted) setDisplay(false);
    },
  });

  return (
    <div className='contact'>
      {display && (
        <animated.div style={thanks} className='card thanks'>
          <p className='card-text bg-dark'>
            Thanks for submitting your inquiry!
          </p>
        </animated.div>
      )}
      <form className='p-1' onSubmit={onSubmit}>
        <div className='form-group' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='name'>
            Name <small>(required)</small>
          </label>
          <input
            className='form-control'
            type='text'
            value={formState.name}
            name='name'
            id='name'
            required
            placeholder='Your Name'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Email <small>(required)</small>
          </label>
          <input
            className='form-control'
            type='email'
            value={formState.email}
            name='email'
            id='email'
            required
            placeholder='Your Email'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone-numb'>Phone</label>
          <input
            className='form-control'
            type='tel'
            value={formState['phone-num']}
            name='phone-num'
            id='phone-num'
            placeholder='Your Phone Number'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone-numb'>Description</label>
          <textarea
            className='form-control'
            name='description'
            id='description'
            value={formState.description}
            placeholder='How can I help you?'
            onChange={onChange}
          />
        </div>
        <input
          className='btn btn-success'
          id='submit'
          name='submit'
          type='submit'
        />
      </form>
    </div>
  );
};
