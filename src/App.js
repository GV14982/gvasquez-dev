import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Layout/Header'
import { Body } from './components/Layout/Body'
import { Footer } from './components/Layout/Footer'
import { Contact } from './components/Contact/Contact';
import { useWindowSize } from './hooks/useWindowSize'
import { useSpring, animated } from 'react-spring'

function App() {
  const size = useWindowSize(window);
  const [scrollTop, setScrollTop] = useState(0);
  const [display, setDisplay] = useState(false);
  const onScroll = () => {
    const scrollPos = document.documentElement.scrollTop;

    setScrollTop(scrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });

  const contact = useSpring({ marginLeft: display ? "80vw" : "100vw" })
  const contactButton = useSpring({ marginLeft: display ? "73vw" : "93vw" })
  const onClick = e => {
    setDisplay(!display);
  }

  return (
    <animated.div className="app" style={props}>
      <animated.div style={contact}>
        <Contact />
      </animated.div>
      <animated.button style={contactButton} className="contact-button" onClick={e => onClick()}>
        Contact
      </animated.button>
      <Header size={size} />
      <Body scrollTop={scrollTop} size={size} className="body" />
      <Footer />
    </animated.div>
  );
}

export default App;
