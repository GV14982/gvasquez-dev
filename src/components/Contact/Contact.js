import React, { useState } from 'react';
import Airtable from 'airtable';
var base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(
  process.env.REACT_APP_AIRTABLE_BASE
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
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await newAirtableRecord(formState);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
    setFormState(initialState);
    return false;
  };

  return (
    <div className='row justify-content-center my-2 mx-1 overflow-hidden'>
      <div
        className={`alert alert-${error ? 'danger' : 'success'} thank ${
          (submitted || error) && 'thank-animation'
        }`}>
        {error
          ? 'Sorry, it seems like something went wrong. Please try again.'
          : 'Thank you for reaching out. I will get back to you as soon as I can!'}
      </div>
      <form className='col-lg-8 card p-3 mb-3' onSubmit={onSubmit}>
        <h2>Contact Me!</h2>
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
        <div className='d-flex justify-content-end'>
          <input
            className='btn btn-success'
            id='submit'
            name='submit'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};
