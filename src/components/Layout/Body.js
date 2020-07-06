import React from 'react';
import { Bio } from '../Personal/Bio';
import { Headshot } from '../Personal/Headshot';
import { Projects } from '../Professional/Projects';

export const Body = ({ scrollTop, size }) => {
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <Headshot />
        <Bio />
      </div>
      <div className='row'>
        <Projects scrollTop={scrollTop} size={size} />
      </div>
    </div>
  );
};
