import React from "react";
import arrow from "../Assets/arrow@2x.png";
import header from "../Assets/password-generator-header@2x.jpg";
import "./About.css";
let styles = {
  marginTop: { marginTop: "20px" },
  floatLeft: { float: "left" },
  height: { height: "120px" },
  block: { display: "block" },
};
function PasswordGenerator() {
  return (
    <div>
      <img className="full-width" src={header} />

      <div className="container" style={styles.marginTop}>
        <div className="row">
          <div
            className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8"
            style={styles.block}
          >
            <div className="product-title">Weather Dashboard</div>
            <div className="product-detail-text">
              A web application that allows to search current weather and five
              days weather forecast of your location, which inclides general
              info like weather, temperture, humidity. It also allows you to
              search other loactions.
            </div>
            <div>
              <a
                href="https://github.com/pankuanting102/week-3-homework-password-generator"
                target="_blank"
              >
                <btn className="ft-itm-right p" style={styles.floatLeft}>
                  GitHub
                  <img src={arrow} className="arrow-cta" />
                </btn>
              </a>
            </div>
            <div>
              <a
                href="https://pankuanting102.github.io/week-3-homework-password-generator/"
                target="_blank"
              >
                <btn className="ft-itm-right p" style={styles.floatLeft}>
                  View Webiste
                  <img src={arrow} className="arrow-cta" />
                </btn>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4"
            style={styles.marginTop}
          >
            <div className="category-text">HTML</div>
            <div className="category-text">CSS</div>
            <div className="category-text">Javascript</div>
            <div className="category-text">Bootstrap</div>
          </div>
        </div>
      </div>
      <div style={styles.height}></div>
    </div>
  );
}

export default PasswordGenerator;
