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
          url='https://github.com/gv14982'
          icon={['fab', 'github-square']}
        />
        <SocialLink
          name='linkedin'
          icon={['fab', 'linkedin']}
          url='https://ghttps://www.linkedin.com/in/graham-vasquez-79b17a198/ithub.com/gv14982'
        />
        <SocialLink
          name='twitter'
          icon={['fab', 'twitter-square']}
          url='https://twitter.com/___datboi_'
        />
      </div>
    </nav>
  );
};
