import React from 'react';

export const Headshot = () => {
  return (
    <div className='col-lg-3 mx-2 d-flex justify-content-center align-content-center'>
      <img
        src='/headshot_400x400.jpg'
        alt=''
        className='headshot circle shadow'
      />
    </div>
  );
};
