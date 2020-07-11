import React from 'react';

export const Headshot = () => {
  return (
    <div className='col-md-5 pb-sm-0 pb-md-5 pb-lg-0 mb-sm-0 mb-md-5 mb-lg-0 col-lg-3 mx-5 mx-md-0 d-flex justify-content-center'>
      <img
        src='https://s.gravatar.com/avatar/dadb4b35780c36b7ac95bc67659f714e?s=500'
        alt='Headshot'
        className='mt-2 img-fluid img-thumbnail rounded-circle'
      />
    </div>
  );
};
