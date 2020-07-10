import React from 'react';

export const Headshot = () => {
  return (
    <div className='col-lg-3 d-flex justify-content-center'>
      <img
        src='https://s.gravatar.com/avatar/dadb4b35780c36b7ac95bc67659f714e?s=500'
        alt='Headshot'
        className='mt-2 img-fluid rounded-circle'
      />
    </div>
  );
};
