import React from 'react';
import { Project } from './Project';

const ClickPopLink = ({ text, url }) => {
  return (
    <a
      className='text-info'
      href={url}
      rel='noopener noreferrer'
      target='_blank'>
      {text}
    </a>
  );
};

const BuffsDescription = () => {
  return (
    <div className='mx-4'>
      <p className='card-text'>
        Buffs is a project I conjured up along side the radical guys from{' '}
        <ClickPopLink text='ClickPopMedia' url='https://clickpopmedia.com/' />.
        Our initial product is the Stream Leaderboard that allows streamers to
        add a referral system with an onscreen leaderboard.
      </p>
      <p className='card-text'>
        Buffs was built using Laravel, with the Twitch API chatbot being written
        in Node and storage with MongoDB.
      </p>
    </div>
  );
};

const TTDWTWGCDescription = () => {
  return (
    <div className='mx-4'>
      <p className='card-text'>
        TTDWTWGC is another project I worked on with{' '}
        <ClickPopLink text='ClickPopMedia' url='https://clickpopmedia.com/' />.
        We wanted to find a way to keep our minds busy when the US first started
        seeing case of COVID-19 and social distancing took effect.
      </p>
      <p className='card-text'>
        TTDWTWGC is built on Node/Express talking with the Airtable API where we
        store all the data. The front end is handled with Jquery and Bootstrap.
      </p>
    </div>
  );
};

// const NiceWordsDescription = () => {
//   return (
//     <div className='mx-4'>
//       <p className='card-text'>
//         Nice Words started as an email as a service product initially thought up
//         by{' '}
//         <ClickPopLink text='Chris Vasquez' url='https://twitter.com/clickpop' />
//         . I wanted to take the concept of having nice things to say, and allow
//         others to tap into that feature. So I built the Nice Words API, which is
//         a service that allows you to access our crowd funded compliments and
//         pleasentries for use in your application.
//       </p>
//       <p className='card-text'>
//         The Nice Words API is built on Node and Express utilizing OAuth for
//         authentication with analytics and rate limiting built in.
//       </p>
//     </div>
//   );
// };

export const Projects = () => {
  return (
    <div className='row'>
      <Project
        title='Buffs'
        subtitle='A platform to help streamers grow.'
        description={<BuffsDescription />}
        technologies={[
          'PHP',
          'Laravel',
          'MySQL',
          'jQuery',
          'Bootstrap',
          'Node',
          'Express',
          'MongoDB',
        ]}
        images={['buffs_main.jpg']}
        githubURL={process.env.REACT_APP_BUFFS_GITHUB}
        url={process.env.REACT_APP_BUFFS_URL}
      />
      <Project
        title='Things to do when the world gets cancelled'
        subtitle='An activity idea generator in the era of social distancing.'
        description={<TTDWTWGCDescription />}
        technologies={['jQuery', 'Bootstrap', 'Node', 'Express', 'AirTable']}
        images={['ttdwtwgc_main.jpg']}
        githubURL={process.env.REACT_APP_TTDWTWGC_GITHUB}
        url={process.env.REACT_APP_TTDWTWGC_URL}
      />
      {/* <Project
        title='Nice Words'
        subtitle='A daily nudge to say something kind.'
        description={<NiceWordsDescription />}
        technologies={['Node', 'Express', 'Airtable', 'Aweber']}
        images={['nice_words_main.jpg']}
        githubURL=''
        url='https://nicewords.email/'
      /> */}
    </div>
  );
};
