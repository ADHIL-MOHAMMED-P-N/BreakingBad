import React from "react";
import "./Nav.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="https://png2.cleanpng.com/sh/711dedb9e40a8d3fd726674a4c9fd64e/L0KzQYm3WME3N6pripH0aYP2gLBuTfxwb5Cyj9N1dHX1PcjvigRmNadqeAZ4cj3qgrL3iPlke155fd5udnn2ebF1TgNpd6gyeuRuYXvsfri0gvFlNaFzf586OD24coi8VPUyOJI1TaQEOD65Q4mCUMkyOmI6S6Y9MUS2RYO9VcY4NqFzf3==/kisspng-logo-walter-white-vector-graphics-television-show-breaking-bad-png-18-5b754e10a05298.6389091215344143526567.png" />
        </div>
        <div className="nav">
          <ul>
            <Link to="/">
              <li>Characters</li>
            </Link>
            <Link to="/episodes">
              <li>Episodes</li>
            </Link>
            <Link to="/quotes">
              <li>Quotes</li>
            </Link>
            <Link to="/deaths">
              <li>Deaths</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
