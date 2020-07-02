import React from 'react';
import { Bio } from '../Personal/Bio';
import { Headshot } from '../Personal/Headshot';
import { Projects } from '../Professional/Projects';

export const Body = ({ scrollTop }) => {
  return (
    <div className="container d-flex flex-column">
      <div className="d-flex justify-content-between personal">
        <Headshot />
        <Bio />
      </div>
      <Projects scrollTop={scrollTop} />
    </div>
  )
}
