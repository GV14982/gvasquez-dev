import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLink = ({ name, url }) => {
  console.log(name);
  return (
    <a
      href={url}
      className='img-thumbnail mx-2 px-2'
      rel='noopener noreferrer'
      target='_blank'>
      <FontAwesomeIcon
        icon={['fab', name === 'linkedin' ? name : `${name}-square`]}
        size='2x'
        color='#343a40'
      />
    </a>
  );
};
