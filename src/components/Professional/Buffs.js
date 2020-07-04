import React, { useState, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

export const Buffs = ({ scrollTop, size }) => {
  const [rect, setRect] = useState(null);
  const [display, setDisplay] = useState(false);
  const ref = e => {
    if (!e) return;
    if (JSON.stringify(rect) !== JSON.stringify(e.getBoundingClientRect())) {
      setRect(e.getBoundingClientRect())
    }
  }

  const iPhone = navigator.platform.includes("iPhone") || navigator.platform.includes("iPad") ? { height: "27.5%" } : {};

  let animate = { marginLeft: "-100vw" }

  if (rect) {
    if (!display && scrollTop > rect.top - 100) {
      setDisplay(true);
    }
    if (size.height / 3 < rect.top) {
      animate = { marginLeft: display ? "0vw" : "-100vw", opacity: display ? 1 : 0 }
    } else {
      if (!display) {
        setDisplay(true);
      }
      animate = {
        from: { marginLeft: "-100vw", opacity: 0 },
        to: { marginLeft: "0vw", opacity: 1 }
      }
    }
  }

  const from_left = useSpring(animate);

  return (
    <Fragment>
      <animated.div style={from_left} className="container my-3 project" ref={ref}>
        <div className="card">
          <div className="card-body">
            <p className="card-title">Buffs</p>
            <p className="card-subtitle">A platform to help streamers grow.</p>
          </div>
          <div className="d-flex mx-5">
            <img src="/buffs_main.png" alt="" style={iPhone} className="mx-2 rounded project-image" />
            <img src="/buffs_dashboard.png" alt="" style={iPhone} className="mx-2 rounded project-image" />
          </div>
          <div className="card-body">
            <p className="card-text">Buffs is a project I worked on with two other talented developers (Under our group <a href="https://clickpopmedia.com/">ClickPopMedia</a>). Our initial product is the Stream Leaderboard that allows streamers to add a referral system with an onscreen leaderboard.</p>
            <p className="card-text">Buffs was built using Laravel, with the chatbot being written in Node and storage with MongoDB.</p>
          </div>
        </div>
      </animated.div>
    </Fragment>
  )
}
