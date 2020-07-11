import React from 'react';
import { SocialLink } from '../Professional/SocialLink';

export const Header = () => {
  return (
    <nav className='navbar navbar-dark'>
      <div className='navbar-brand my-1'>
        <img
          src='/GV.png'
          className='mx-1'
          alt='Logo'
          width='50'
          loading='lazy'
        />
        Graham Vasquez
      </div>
      <div className='nav my-2'>
        <SocialLink
          name='github'
          url={process.env.REACT_APP_PERSONAL_GITHUB}
          icon={['fab', 'github-square']}
        />
        <SocialLink
          name='linkedin'
          icon={['fab', 'linkedin']}
          url={process.env.REACT_APP_PERSONAL_LINKEDIN}
        />
        <SocialLink
          name='twitter'
          icon={['fab', 'twitter-square']}
          url={process.env.REACT_APP_PERSONAL_TWITTER}
        />
      </div>
    </nav>
  );
};
