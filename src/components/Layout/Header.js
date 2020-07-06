import React from 'react';
import { SocialLink } from '../Professional/SocialLink';

export const Header = ({ size }) => {
  return (
    <nav
      className={`navbar navbar-expand-md justify-content-${
        size.width < 768 ? 'center' : 'between'
      } m-2`}>
      <div
        className={`navbar-brand d-flex flex-column justify-content-center align-items-center ${
          size.width < 768 ? '' : 'ml-5'
        }`}>
        <img src='/GV.png' alt='' />
        <h4 className=''>Graham Vasquez</h4>
      </div>
      <div>
        <div className='collapse navbar-collapse'>
          <div>
            <h4 className='card-text ml-3'>Connect with me!</h4>
            <div className='nav'>
              <SocialLink
                name='github'
                url='https://github.com/gv14982'
                image='/github.png'
                nav={true}
              />
              <SocialLink
                name='linkedin'
                url='https://ghttps://www.linkedin.com/in/graham-vasquez-79b17a198/ithub.com/gv14982'
                image='/linkedin.png'
                nav={true}
              />
              <SocialLink
                name='twitter'
                url='https://twitter.com/___datboi_'
                image='/twitter.png'
                nav={true}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
