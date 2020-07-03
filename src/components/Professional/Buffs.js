import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'

export const Buffs = ({ scrollTop }) => {
  const ref = useRef(null)
  const [display, setDisplay] = useState(false);
  if (ref.current) {
    if (!display && ref.current.getBoundingClientRect().y < scrollTop + window.innerHeight / 4) {
      setDisplay(true);
    }
  }

  const from_left = useSpring({ marginLeft: display ? "0vw" : "-100vw", opacity: display ? 1 : 0, transform: display ? "scale(1,1)" : "scale(0.5,0.5)" })
  return (
    <animated.div style={from_left} className="container my-3 buffs" ref={ref}>
      <div className="card bg-secondary">
        <div className="card-body">
          <p className="card-title">Buffs</p>
          <p className="card-subtitle">A platform to help streamers grow.</p>
        </div>
        <div className="d-flex mx-5">
          <img src="/buffs_main.png" alt="" className="mx-2 rounded project-image" />
          <img src="/buffs_dashboard.png" alt="" className="mx-2 rounded project-image" />
        </div>
        <div className="card-body">
          <p className="card-text">Buffs is a project I worked on with two other talented developers (Under our group <a href="https://clickpopmedia.com/">ClickPopMedia</a>). Our initial product is the Stream Leaderboard that allows streamers to add a referral system with an onscreen leaderboard.</p>
          <p className="card-text">Buffs was built using Laravel, with the chatbot being written in Node and storage with MongoDB.</p>
        </div>
      </div>
    </animated.div>
  )
}
