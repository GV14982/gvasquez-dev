import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Layout/Header'
import { Body } from './components/Layout/Body'
import { Footer } from './components/Layout/Footer'
import { useWindowSize } from './hooks/useWindowSize'
import { useSpring, animated } from 'react-spring'

function App() {
  const size = useWindowSize(window);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const scrollPos = document.documentElement.scrollTop;

    setScrollTop(scrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  console.log(scrollTop);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });



  return (
    <animated.div className="container" style={props}>
      <Header size={size} />
      <Body scrollTop={scrollTop} className="body" />
      <Footer />
    </animated.div>
  );
}

export default App;
