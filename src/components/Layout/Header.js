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
          width='60'
          loading='lazy'
        />
        Graham Vasquez
      </div>
      <div className='nav my-2'>
        <SocialLink
          name='github'
          url='https://github.com/gv14982'
          image='/github.png'
        />
        <SocialLink
          name='linkedin'
          url='https://ghttps://www.linkedin.com/in/graham-vasquez-79b17a198/ithub.com/gv14982'
          image='/linkedin.png'
        />
        <SocialLink
          name='twitter'
          url='https://twitter.com/___datboi_'
          image='/twitter.png'
        />
      </div>
    </nav>
  );
};
