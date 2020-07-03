import React from 'react';
import { Buffs } from './Buffs';
import { TTDWTWGC } from './TTDWTWGC';

export const Projects = ({ scrollTop }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Buffs scrollTop={scrollTop} />
      <TTDWTWGC scrollTop={scrollTop} />
    </div>
  )
}
