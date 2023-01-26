import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="App-nav">
      <i className="icon"></i>
      <div>Search</div>
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
          <Link to="/todo" className="menuText">
            Todo
          </Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <Link to="/auth" className="menuText">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/register" className="menuText">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
