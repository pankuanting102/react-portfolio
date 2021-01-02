import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./Assets/nav_logo.svg";
import "./Nav.css";
function Nav() {
  const location = useLocation();

  return (
    <nav>
    <ul className="p">
      <Link to="/">
        <Logo className={"rotating svg"} />
      </Link>

      <li class="li-logo">Hello, There</li>
  
      <li class="nav-right">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li class="nav-right">
        <Link to="/contact">Contact</Link>
      </li>
      <li class="nav-right">
        <Link to="/about">About</Link>
      </li>
    </ul>
    </nav>
  );
}

export default Nav;
