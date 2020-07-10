import React, { useState, Fragment } from 'react';
import { SocialLink } from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Project = ({
  title,
  subtitle,
  description,
  technologies,
  images,
  githubURL,
  url,
}) => {
  return (
    <Fragment>
      <div className='col-12 col-lg'>
        <div className='card bg-light'>
          <a href={url} rel='noopener noreferrer' target='_blank'>
            <img
              src={images[0]}
              className='card-img-top border border-dark rounded'
              alt={`${title} screenshot`}
            />
          </a>
          <div className='card-body'>
            <h5 className='card-title mx-1'>
              <a
                href={url}
                className='text-dark'
                rel='noopener noreferrer'
                target='_blank'>
                {title}
              </a>
            </h5>
            <p className='card-subtitle mt-1 mx-1'>{subtitle}</p>
          </div>
          {description}
          <div className='my-2 mx-3'>
            {technologies.map((technology) => (
              <span key={technology} className='badge badge-warning p-2 m-1'>
                {technology}
              </span>
            ))}
          </div>
          <div className='d-flex justify-content-center mb-2'>
            <SocialLink name='github' url={githubURL} />
            <a
              href={url}
              className='img-thumbnail mx-2 px-2'
              rel='noopener noreferrer'
              target='_blank'>
              <FontAwesomeIcon
                icon={['fas', 'external-link-square-alt']}
                size='2x'
                color='#343a40'
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
