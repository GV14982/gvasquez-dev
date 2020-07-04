import React, { useState } from 'react';
import { Buffs } from './Buffs';
import { TTDWTWGC } from './TTDWTWGC';


export const Projects = ({ scrollTop, size }) => {
  const [display, setDisplay] = useState({ buffs: false, ttdwtwgc: false });

  return (
    <div className="projects">
      <Buffs scrollTop={scrollTop} size={size} display={display} setDisplay={setDisplay} />
      <TTDWTWGC scrollTop={scrollTop} size={size} display={display} setDisplay={setDisplay} />
    </div>
  )
}
