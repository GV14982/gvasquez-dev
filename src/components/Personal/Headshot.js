import React from 'react';

export const Headshot = () => {
  return (
    <div className='col-lg-3 d-flex justify-content-center'>
      <img
        src='/headshot_400x400.jpg'
        alt='Headshot'
        className='mt-2 img-fluid rounded-circle'
      />
    </div>
  );
};
