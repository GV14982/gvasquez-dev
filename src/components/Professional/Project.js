import React, { useState, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import { SocialLink } from './SocialLink';

export const Project = ({
  scrollTop,
  size,
  title,
  subtitle,
  description,
  technologies,
  images,
  animationSide,
  githubURL,
  url,
}) => {
  const [rect, setRect] = useState(null);
  const [display, setDisplay] = useState(false);
  const ref = (e) => {
    if (!e) return;
    if (JSON.stringify(rect) !== JSON.stringify(e.getBoundingClientRect())) {
      setRect(e.getBoundingClientRect());
    }
  };

  window.onscroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log('BOTTOM');
    }
  };

  const side = `margin${animationSide}`;

  let animate = { [side]: '-100vw' };

  if (rect) {
    if (!display && rect.top < size.height / 3) {
      setDisplay(true);
    }
    if (size.height / 1.75 < rect.top) {
      animate = {
        [side]: display ? '0vw' : '-100vw',
        opacity: display ? 1 : 0,
      };
    } else {
      if (!display) {
        setDisplay(true);
      }
      animate = {
        from: { [side]: '-100vw', opacity: 0 },
        to: { [side]: '0vw', opacity: 1 },
      };
    }
  }

  const animation = useSpring(animate);

  return (
    <Fragment>
      <animated.div
        style={animation}
        className='container my-3 project'
        ref={ref}>
        <div className='card'>
          <div className='container card-body'>
            <div className='row justify-content-between'>
              <p className='card-title col-9'>
                <a href={url} rel='noopener noreferrer' target='_blank'>
                  {title}
                </a>
              </p>
              <div className='nav col justify-content-end align-self-start'>
                <SocialLink name='github' url={githubURL} image='/github.png' />
              </div>
            </div>
            <p className='card-subtitle mb-3'>{subtitle}</p>
            <div>
              {technologies.map((technology) => (
                <span key={technology} className='badge badge-warning p-2 m-1'>
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className='project-images container'>
            <div className='row'>
              {images.map((image) => (
                <div key={image} className='col-sm m-1'>
                  <img
                    src={`/${image}`}
                    alt={image}
                    className='rounded project-image'
                  />
                </div>
              ))}
            </div>
          </div>
          {description}
        </div>
      </animated.div>
    </Fragment>
  );
};
