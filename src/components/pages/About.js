import React from "react";
import abtImg from "../Assets/about-img@2x.jpg";
import arrow from "../Assets/arrow@2x.png";
import "./About.css";

function About() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div className="col col-12 col-lg-4 col-md-12 col-sm-12">
          <img alt="about" src={abtImg} id="abt-img" />
        </div>

        <div className="col col-12 col-lg-8 col-md-12 col-sm-12">
          <p className="bio-text">
            Hello, my name is Kuan-Ting. I am a digital designer based in New
            York and currently expanding my skills in web development. I am
            looking forward to integrating both of UI UX design and web
            development skills and push boundary of digital products.
          </p>
          <a
            href="/kuan-ting-pan-portfolio/Assets/Kpan_CV_2020.pdf"
            target="_blank"
          >
            <btn className="portfolio-title p">
              View Resumé
              <img src={arrow} className="arrow-cta" />
            </btn>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
