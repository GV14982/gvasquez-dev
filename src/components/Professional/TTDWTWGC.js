import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const TTDWTWGC = ({ scrollTop, size }) => {
  const [rect, setRect] = useState(null);
  const [display, setDisplay] = useState(false);
  const ref = e => {
    if (!e) return;
    if (JSON.stringify(rect) !== JSON.stringify(e.getBoundingClientRect())) {
      setRect(e.getBoundingClientRect())
    }
  }

  const iPhone = navigator.platform.includes("iPhone") || navigator.platform.includes("iPad") || navigator.userAgent.includes("Safari") ? { height: "27.5%" } : {};

  let animate = { marginRight: "-100vw" }

  if (rect) {
    if (!display && scrollTop + 50 > rect.top) {
      setDisplay(true);
    }
    if (size.height / 2 < rect.top) {
      animate = { marginRight: display ? "0vw" : "-100vw", opacity: display ? 1 : 0 }
    } else {
      if (!display) {
        setDisplay(true);
      }
      animate = {
        from: { marginRight: "-100vw", opacity: 0 },
        to: { marginRight: "0vw", opacity: 1 }
      }
    }
  }

  const from_right = useSpring(animate);
  return (
    <animated.div style={from_right} ref={ref} className="container my-3 project">
      <div className="card">
        <div className="card-body">
          <p className="card-title">TTDWTWGC</p>
          <p className="card-subtitle">Stands for "Things To Do When The World Gets Canceled"</p>
        </div>
        <div className="d-flex mx-5">
          <img src="/ttdwtwgc_main.png" alt="" style={iPhone} className="mx-2 rounded project-image" />
          <img src="/ttdwtwgc_idea.png" alt="" style={iPhone} className="mx-2 rounded project-image" />
        </div>
        <div className="card-body">
          <p className="card-text">TTDWTWGC is another project I worked on with <a href="https://clickpopmedia.com/">ClickPopMedia</a>. We wanted to find a way to keep our minds busy when the US first started seeing case of COVID-19 and social distancing took effect.</p>
          <p className="card-text">TTDWTWGC is built on Node/Express talking with the Airtable API where we store all the data. The front end is handled with Jquery and Bootstrap.</p>
        </div>
      </div>
    </animated.div>
  )
}
