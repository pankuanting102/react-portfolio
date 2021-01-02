import React from "react";
import "./About.css";
import arrow from "../Assets/arrow@2x.png";
import d1Video from "../Assets/influencer-search-header.mp4";
import d1Img from "../Assets/index-portfolio-influencer@2x.jpg";
import { Link, useLocation } from "react-router-dom";

let styles = {
  margin: "10px",
};

let color = {
  colorOne:{ backgroundColor: "#ffdede" },
  colorTwo:{ backgroundColor: "#ffee90" },
  colorThree:{ backgroundColor: " #ccf8ac" },
  colorFour:{ backgroundColor: "#f5f5f5" },
}
function Portfolio() {
  const location = useLocation();
  return (
    <div>
    <div className="filter-group">
    <div id="all-filter" className="btn" style={styles}>All</div>
    <div id="design-filter" className="btn" style={styles}>Design</div>
    <div id="dev-filter" className="btn" style={styles}>Dev</div>
  </div>
<div className="container-fluid">
<div className="row dev">
        <div className="col col-lg-12 pl-0 pr-0">
          <Link to="/findinfluencer">
          <video loop muted autoPlay className="img-bg">
            <source
              src={d1Video}
              type="video/mp4"
            />
          </video>
          <img
            src={d1Img}
            className="img-bg-touch-devices"
          />
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">FindInfluencer.</div>
          <btn className="portfolio-cta">View Project <img src={arrow} class="arrow-cta"
            />
          </btn>
        </Link>
        </div>
        </div>

        <div className="row dev">
       
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pl-0">
        <Link to="/weather-dashboard">
          <div className="dev-bg" style={color.colorOne}>
            <div className="dev-text">Weather Dashboard</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Weather Dashboard</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
        </Link>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pr-0">
        <Link to="/workday-scheduler">
          <div className="dev-bg" style={color.colorTwo}>
            <div className="dev-text">Work Day Scheduler</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Work Day Scheduler</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
          </Link>
        </div>
        
      </div>

      <div className="row dev">
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pl-0">
            <Link to="/code-quiz">
          <div className="dev-bg" style={color.colorThree}>
            <div className="dev-text">Code Quiz</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Code Quiz</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
        </Link>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pr-0">
           <Link to="/password-generator">
          <div className="dev-bg" style={color.colorFour}>
            <div className="dev-text">Password Generator</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Password Generator</div>
          <btn className="portfolio-cta"
            >
              View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
          </Link>
        </div>
      </div>
      </div>
      </div>
      
      
  );
  
}



export default Portfolio;
