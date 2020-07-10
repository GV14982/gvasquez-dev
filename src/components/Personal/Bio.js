import React from 'react';

export const Bio = () => {
  return (
    <div className='col-lg-9 text-center text-lg-left text-white lead mt-3'>
      <h1>
        Hey there,
        <span role='img' className='ml-1 wave' aria-label='Waving Hand'>
          👋
        </span>
      </h1>
      <p className='mx-3'>
        I'm a self taught (well mostly self taught) web developer from Easton
        PA. I mostly focus on the MERN stack, but I'm also proficient with PHP
        (in the form of Laravel and Wordpress).
      </p>
      <p className='mx-3'>
        I am also comfortable with Python, Ruby, Bash, git, docker, and SQL
        databases. I have a background in IT and computer repair, which adds to
        my skill sets when it comes to the underlying technology that supports
        the software I build.
      </p>
    </div>
  );
};
