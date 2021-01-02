import React from "react";
import "./About.css";
import arrow from "../Assets/arrow@2x.png";

let styles = {
  margin: "10px",
};

let color = {
  backgroundColor: "#ffdede"
}
function Portfolio() {
  return (
    <div>
    <div className="filter-group">
    <div id="all-filter" className="btn" style={styles}>All</div>
    <div id="design-filter" className="btn" style={styles}>Design</div>
    <div id="dev-filter" className="btn" style={styles}>Dev</div>
  </div>
<div className="container-fluid">
        <div className="row dev">
       
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pl-0">
          <div className="dev-bg" style={color}>
            <div className="dev-text">Weather Dashboard</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Weather Dashboard</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
      
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pr-0">
            
          <div className="dev-bg" style={color}>
            <div className="dev-text">Work Day Scheduler</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Work Day Scheduler</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
       
        </div>
      </div>

      <div className="row dev">
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pl-0">
            
          <div className="dev-bg" style={color}>
            <div className="dev-text">Code Quiz</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Code Quiz</div>
          <btn className="portfolio-cta"
            >View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
        
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12 pr-0">
           
          <div className="dev-bg" style={color}>
            <div className="dev-text">Password Generator</div>
          </div>
          <div className="dev-badge">DEV</div>
          <div className="portfolio-title">Password Generator</div>
          <btn className="portfolio-cta"
            >
              View Project <img src={arrow} className="arrow-cta"
            />
          </btn>
    
        </div>
      </div>
      </div>
      </div>
  );
}


export default Portfolio;
