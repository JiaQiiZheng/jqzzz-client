import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="App-nav">
      <i className="icon"></i>
      <ul className="Menu">
        <li>
          <Link to="/" className="menuText">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="menuText">
            About
          </Link>
        </li>
        <li>
          <Link to="/works" className="menuText">
            Works
          </Link>
        </li>
        <li>
          <Link to="/arts" className="menuText">
            Arts
          </Link>
        </li>
        <li>
          <Link to="/contact" className="menuText">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/story" className="menuText">
            Story
          </Link>
        </li>
        <li>
          <Link to="/post" className="menuText">
            Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}
