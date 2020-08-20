import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Header } from '../components/Layout/Header';
import { Body } from '../components/Layout/Body';
import { Footer } from '../components/Layout/Footer';
import { Contact } from '../components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExternalLinkSquareAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

library.add(
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faExternalLinkSquareAlt,
  faEnvelopeSquare
);

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content="Graham Vasquez's Digital Portfolio" />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#2d2d2d' />
        <meta name='msapplication-TileColor' content='#2d2d2d' />
        <meta name='theme-color' content='#2d2d2d' />
        <meta property='og:title' content='Developer Profile' />
        <meta property='og:type' content='Profile' />
        <meta property='og:url' content='https://gvasquez.dev/' />
        <meta
          property='og:description'
          content="Graham Vasquez's Developer Profile"
        />
        <meta
          property='og:image'
          content='http://gvasquez.dev/GVWithBackground.png'
        />
        <title>Developer Portfolio</title>
      </Helmet>
      <div className='container pb-2'>
        <Header />
        <Body />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
