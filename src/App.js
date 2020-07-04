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
  const [mouseDown, setMouseDown] = useState(false);
  const [swipe, setSwipe] = useState(0);
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

  let contactHidden = "100vw";
  let contactShown = "80vw";
  let contactButtonHidden = "94vw";
  let contactButtonShown = "74vw";

  if (size.width <= 1000 && size.width > 768) {
    contactShown = "75vw";
    contactButtonHidden = "93vw";
    contactButtonShown = "68vw";
  } else if (size.width <= 768 && size.width > 625) {
    contactShown = "65vw";
    contactButtonHidden = "89vw";
    contactButtonShown = "54vw";
  } else if (size.width <= 625) {
    contactShown = "60vw";
    contactButtonHidden = "86vw";
    contactButtonShown = "46vw";
  }

  const contact = useSpring({ marginLeft: display ? contactShown : contactHidden })
  const contactButton = useSpring({ marginLeft: display ? contactButtonShown : contactButtonHidden })
  const onClick = e => {
    setDisplay(!display);
  }
  // const onMouseDown = e => {
  //   setSwipe(e.clientX);
  //   setMouseDown(true);
  // }

  // const onMouseUp = e => {
  //   setSwipe(0);
  //   setMouseDown(false);
  // }

  // const mouseMove = e => {
  //   if (mouseDown) {
  //     if (!display && e.clientX <= swipe - 100) {
  //       setDisplay(true);
  //     } else if (display && e.clientX >= swipe + 100) {
  //       setDisplay(false);
  //     }
  //   }
  // }

  const onTouchStart = e => {
    setSwipe(e.touches[0].clientX);
    setMouseDown(true);
  }

  const onTouchEnd = e => {
    setSwipe(0);
    setMouseDown(false);
  }

  const onTouchMove = e => {
    if (mouseDown) {
      if (!display && e.touches[0].clientX <= swipe - 100) {
        setDisplay(true);
      } else if (display && e.touches[0].clientX >= swipe + 100) {
        setDisplay(false);
      }
    }
  }

  return (
    <animated.div
      className="app"
      style={props}
      // onMouseDown={onMouseDown}
      // onMouseUp={onMouseUp}
      // onMouseMove={mouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}>
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
