import React from "react";
import arrow from "../Assets/arrow@2x.png";
import header from "../Assets/influencer-header.jpg";
import "./About.css";
let styles = {
  marginTop: { marginTop: "20px" },
  floatLeft: { float: "left" },
  height: { height: "120px" },
  block: { display: "block" },
};
function FindInfluencer() {
  return (
    <div>
      <img className="full-width" src={header} />

      <div className="container" style={styles.marginTop}>
        <div className="row">
          <div
            className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8"
            style={styles.block}
          >
            <div className="product-title">FindInfluencer.</div>
            <div className="product-detail-text">
              A b2b platform which allows users to search influencer info on
              Twitter by industry. In addition this application provided latest
              industry news by using news API.
            </div>
            <div>
              <a
                href="https://github.com/pankuanting102/findinfluencer.github.io"
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
                href="https://pankuanting102.github.io/findinfluencer.github.io/"
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
              <div className="category-text">JQuery</div>
              <br/>
              <div className="category-text">API</div>
              <div className="category-text">Responsive</div>
            </div>
        </div>
      </div>
      <div style={styles.height}></div>
    </div>
  );
}

export default FindInfluencer;
