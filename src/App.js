import React, { Fragment } from 'react';
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
