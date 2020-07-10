import React, { useEffect, useState, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Layout/Header';
import { Body } from './components/Layout/Body';
import { Footer } from './components/Layout/Footer';
import { Contact } from './components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faExternalLinkSquareAlt
);

function App() {
  return (
    <Fragment>
      {/* <div>
        <Contact />
      </div>
      <button className='contact-button' onClick={(e) => onClick()}>
        Contact
      </button> */}
      <div className='container pb-2'>
        <Header />
        <Body />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
