import React, { useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const TTDWTWGC = ({ scrollTop }) => {
  const ref = useRef(null)
  const [display, setDisplay] = useState(false);
  if (ref.current) {
    if (!display && ref.current.getBoundingClientRect().y < (scrollTop + window.innerHeight) / 2) {
      setDisplay(true);
    }
  }

  const from_right = useSpring({ marginRight: display ? "0vw" : "-100vw", opacity: display ? 1 : 0, transform: display ? "scale(1,1)" : "scale(0.5,0.5)" });
  return (
    <animated.div style={from_right} ref={ref} className="container my-3 project">
      <div className="card bg-secondary">
        <div className="card-body">
          <p className="card-title">TTDWTWGC</p>
          <p className="card-subtitle">Stands for "Things To Do When The World Gets Canceled"</p>
        </div>
        <div className="d-flex mx-5">
          <img src="/ttdwtwgc_main.png" alt="" className="mx-2 rounded project-image" />
          <img src="/ttdwtwgc_idea.png" alt="" className="mx-2 rounded project-image" />
        </div>
        <div className="card-body">
          <p className="card-text">TTDWTWGC is another project I worked on with <a href="https://clickpopmedia.com/">ClickPopMedia</a>. We wanted to find a way to keep our minds busy when the US first started seeing case of COVID-19 and social distancing took effect.</p>
          <p className="card-text">TTDWTWGC is built on Node/Express talking with the Airtable API where we store all the data. The front end is handled with Jquery and Bootstrap.</p>
        </div>
      </div>
    </animated.div>
  )
}
