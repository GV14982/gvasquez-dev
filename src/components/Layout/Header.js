import React from 'react';
import { Github } from '../Professional/Github';
import { Linkedin } from '../Professional/Linkedin';
import { Twitter } from '../Professional/Twitter';

export const Header = ({ size }) => {
  let navbar = `navbar m-2 d-flex justify-content-${size.width > 625 ? "between" : "center"} align-items-center`
  return (
    <nav className={navbar}>
      <div className={`m${size.width > 625 ? "x-3" : "-2"}`}>
        <img src="/GV.png" className="ml-5" alt="" />
        <h2 className="card-title">
          Graham Vasquez
        </h2>
      </div>
      <div className="d-flex justify-content-around">
        <Github />
        <Linkedin />
        <Twitter />
      </div>
    </nav>
  )
}
