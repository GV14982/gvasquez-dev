import React from 'react';
import { Bio } from '../Personal/Bio';
import { Headshot } from '../Personal/Headshot';
import { Projects } from '../Professional/Projects';

export const Body = ({ scrollTop, size }) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between personal">
        <Headshot />
        <Bio size={size} />
      </div>
      <Projects scrollTop={scrollTop} size={size} />
    </div>
  )
}
