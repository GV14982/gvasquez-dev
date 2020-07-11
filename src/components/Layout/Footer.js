import React from 'react';
import { SocialLink } from '../Professional/SocialLink';

export const Footer = () => {
  return (
    <div className='row justify-content-center align-items-center text-light'>
      <h4 className='card-text m-3'>Connect with me!</h4>
      <div className='nav'>
        <SocialLink
          name='github'
          url={process.env.REACT_APP_PERSONAL_GITHUB}
          icon={['fab', 'github-square']}
        />
        <SocialLink
          name='linkedin'
          icon={['fab', 'linkedin']}
          url={process.env.REACT_APP_PERSONAL_LINKED}
        />
        <SocialLink
          name='twitter'
          icon={['fab', 'twitter-square']}
          url={process.env.REACT_APP_PERSONAL_TWITTER}
        />
      </div>
    </div>
  );
};
