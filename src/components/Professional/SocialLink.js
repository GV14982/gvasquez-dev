import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLink = ({ name, url, icon }) => {
  console.log(name);
  return (
    <a
      href={url}
      className='btn btn-light border-2 mx-2'
      rel='noopener noreferrer'
      target='_blank'>
      <FontAwesomeIcon icon={icon} size='2x' color='#343a40' />
    </a>
  );
};
