import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Assets/nav_logo.svg";
import "./Nav.css";
function Nav() {
 

  return (
    <nav>
    <ul className="p">
      <Link to="/">
        <Logo className={"rotating svg"} />
        
      </Link>

      
      <li className="li-logo">Hello, There</li>
    
      <li className="nav-right">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="nav-right">
        <Link to="/about">About</Link>
      </li>

      <li className="nav-right">
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </ul>
    </nav>
  );
}

export default Nav;
