import React from 'react'

export const TTDWTWGC = ({ scrollTop }) => {
  return (
    <div className="container my-5 ttdwtwgc">
      <div className="card bg-secondary">
        <div className="card-body">
          <p className="card-title">TTDWTWGC</p>
          <p className="card-subtitle">Stands for "Things To Do When The World Gets Canceled"</p>
        </div>
        <div className="d-flex mx-5">
          <img src="/ttdwtwgc_main.png" alt="" className="mx-2 rounded project-image" style={{ width: "49%", height: "auto" }} />
          <img src="/ttdwtwgc_idea.png" alt="" className="mx-2 rounded project-image" style={{ width: "49%", height: "auto" }} />
        </div>
        <div className="card-body">
          <p className="card-text">TTDWTWGC is another project I worked on with <a href="https://clickpopmedia.com/">ClickPopMedia</a>. We wanted to find a way to keep our minds busy when the US first started seeing case of COVID-19 and social distancing took effect.</p>
          <p className="card-text">TTDWTWGC is built on Node/Express talking with the Airtable API where we store all the data. The front end is handled with Jquery and Bootstrap.</p>
        </div>
      </div>
    </div>
  )
}
