import React, { useState, useEffect } from 'react';
import { Bio } from '../Personal/Bio';
import { Headshot } from '../Personal/Headshot';
import { Projects } from '../Professional/Projects';
import { useSpring, animated } from 'react-spring';

export const Body = ({ scrollTop, size }) => {
  const props = useSpring({
    to: { marginTop: '0vh', paddingBottom: '0vh' },
    from: { marginTop: '-100vh', paddingBottom: '100vh' },
  });
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    setBounce(true);
    setInterval(() => {
      setBounce(false);
      setTimeout(() => {
        setBounce(true);
      }, 300);
    }, 5000);
    return () => {
      setBounce(false);
    };
  }, []);

  const bounceAnimation = useSpring({
    config: {
      mass: 3,
      tension: 500,
    },
    to: { transform: bounce ? 'translateY(0vh)' : 'translateY(-1vh)' },
  });

  return (
    <div className='container'>
      <animated.div
        style={props}
        className='row justify-content-center align-items-center'>
        <Headshot />
        <Bio />
      </animated.div>
      <div className='row justify-content-center align-items-center my-5 projects-scroll-indicator'>
        <div className=''>
          <h1 className='mr-3'>Projects</h1>
        </div>
        <animated.div style={bounceAnimation} className=''>
          <img
            width='50vw'
            height='auto'
            className='ml-1'
            src='/down-arrow.svg'
            alt=''
          />
        </animated.div>
      </div>
      <div className='row'>
        <Projects scrollTop={scrollTop} size={size} />
      </div>
    </div>
  );
};
