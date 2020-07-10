import React from 'react';
import { SocialLink } from '../Professional/SocialLink';

export const Footer = () => {
  return (
    <div className='row justify-content-center align-items-center text-light'>
      <h4 className='card-text m-3'>Connect with me!</h4>
      <div className='nav'>
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
    </div>
  );
};
