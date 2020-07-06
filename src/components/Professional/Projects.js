import React, { useState } from 'react';
import { Project } from './Project';

const ClickPopLink = () => {
  return (
    <a
      href='https://clickpopmedia.com/'
      rel='noopener noreferrer'
      target='_blank'>
      ClickPopMedia
    </a>
  );
};

const BuffsDescription = () => {
  return (
    <div className='card-body'>
      <p className='card-text'>
        Buffs is a project I worked on with two other talented developers (Under
        our group <ClickPopLink />
        ). Our initial product is the Stream Leaderboard that allows streamers
        to add a referral system with an onscreen leaderboard.
      </p>
      <p className='card-text'>
        Buffs was built using Laravel and jQuery, with the Twitch API chatbot
        being written in Node and storage with MongoDB.
      </p>
    </div>
  );
};

const TTDWTWGCDescription = () => {
  return (
    <div className='card-body'>
      <p className='card-text'>
        TTDWTWGC is another project I worked on with{' '}
        <a href='https://clickpopmedia.com/'>ClickPopMedia</a>. We wanted to
        find a way to keep our minds busy when the US first started seeing case
        of COVID-19 and social distancing took effect.
      </p>
      <p className='card-text'>
        TTDWTWGC is built on Node/Express talking with the Airtable API where we
        store all the data. The front end is handled with Jquery and Bootstrap.
      </p>
    </div>
  );
};

export const Projects = ({ scrollTop, size }) => {
  return (
    <div className='projects'>
      <Project
        scrollTop={scrollTop}
        size={size}
        title='Buffs'
        subtitle='A platform to help streamers grow.'
        description={<BuffsDescription />}
        technologies={[
          'PHP',
          'Laravel',
          'MySQL',
          'jQuery',
          'Node',
          'Express',
          'MongoDB',
        ]}
        images={['buffs_main.png', 'buffs_dashboard.png']}
        animationSide='Left'
        githubURL='https://github.com/ClickPop/buffs'
        url='https://buffs.app'
      />
      <Project
        scrollTop={scrollTop}
        size={size}
        title='Things to do when the world gets cancelled'
        subtitle='An activity idea generator in the era of social distancing.'
        description={<TTDWTWGCDescription />}
        technologies={['jQuery', 'Node', 'Express', 'AirTable']}
        images={['ttdwtwgc_main.png', 'ttdwtwgc_idea.png']}
        animationSide='Right'
        githubURL='https://github.com/ClickPop/quarantine'
        url='https://thingstodowhentheworldgetscanceled.com/'
      />
    </div>
  );
};
