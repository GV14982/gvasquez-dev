import React from 'react';
import { Bio } from '../Personal/Bio';
import { Headshot } from '../Personal/Headshot';
import { Projects } from '../Professional/Projects';

export const Body = () => {
  return (
    <div>
      <div className='row align-items-center px-3'>
        <Headshot />
        <Bio />
      </div>
      <div className='row my-5 text-white text-center'>
        <div className='col-12'>
          <h1>Featured Projects</h1>
          <div className='scroller'></div>
        </div>
      </div>
      <Projects />
    </div>
  );
};
