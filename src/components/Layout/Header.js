import React from 'react';
import { SocialLink } from '../Professional/SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <a href='#contact' className='btn btn-light border-2 mx-2'>
          <FontAwesomeIcon
            icon={['fas', 'envelope-square']}
            size='2x'
            color='#343a40'
          />
        </a>
        <SocialLink
          name='github'
          url={process.env.GATSBY_PERSONAL_GITHUB}
          icon={['fab', 'github-square']}
        />
        <SocialLink
          name='linkedin'
          icon={['fab', 'linkedin']}
          url={process.env.GATSBY_PERSONAL_LINKEDIN}
        />
        <SocialLink
          name='twitter'
          icon={['fab', 'twitter-square']}
          url={process.env.GATSBY_PERSONAL_TWITTER}
        />
      </div>
    </nav>
  );
};
