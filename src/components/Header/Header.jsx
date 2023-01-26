import React from "react";
import logo from "../../images/logo_2.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <Link to="/" className="header_link">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="atelierZZZ">
            <h1 id="atelier">ATELIER</h1>
            <div className="ZZZ">
              <h1>ZZZ</h1>
              <h1>ZZZ</h1>
            </div>
          </div>
        </Link>
      </header>

      <nav>
        <Nav />
      </nav>
    </div>
  );
}
