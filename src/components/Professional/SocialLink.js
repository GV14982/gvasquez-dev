import React from 'react';

export const SocialLink = ({ name, url, image, nav }) => {
  return (
    <div className={`nav-item bg-light rounded ${nav ? 'm-3' : ''}`}>
      <div className='p-2'>
        <a
          href={url}
          className='social-icon'
          rel='noopener noreferrer'
          target='_blank'>
          <img src={image} alt={`${name} link`} className='social-icon' />
        </a>
      </div>
    </div>
  );
};
