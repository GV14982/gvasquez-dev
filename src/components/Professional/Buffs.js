import React from 'react'

export const Buffs = ({ scrollTop }) => {
  return (
    <div className="container my-5 buffs">
      <div className="card bg-secondary">
        <div className="card-body">
          <p className="card-title">Buffs</p>
          <p className="card-subtitle">A platform to help streamers grow.</p>
        </div>
        <div className="d-flex mx-5">
          <img src="/buffs_main.png" alt="" className="mx-2 rounded" style={{ width: "49%", height: "auto" }} />
          <img src="/buffs_dashboard.png" alt="" className="mx-2 rounded" style={{ width: "49%", height: "auto" }} />
        </div>
        <div className="card-body">
          <p className="card-text">Buffs is a project I worked on with two other talented developers (Under our group <a href="https://clickpopmedia.com/">ClickPopMedia</a>). Our initial product is the Stream Leaderboard that allows streamers to add a referral system with an onscreen leaderboard.</p>
          <p className="card-text">Buffs was built using Laravel, with the chatbot being written in Node and storage with MongoDB.</p>
        </div>
      </div>
    </div>
  )
}
