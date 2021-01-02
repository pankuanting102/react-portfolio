import React from "react";
import arrow from "./Assets/arrow@2x.png";
import "./Footer.css";
let styles = {
    marginRight: '20px',
  };
function Footer() {
  return (
    <footer>
      <a href="mailto:pankuanting@gmail.com">
        <btn className="ft-itm-right p">
          Get in Touch
          <img alt="arrow" src={arrow} className="arrow-cta" />
        </btn>
      </a>

      <a href="https://github.com/pankuanting102">
        <btn className="ft-itm-right p" style={styles}>
        GitHub
          <img alt="arrow" src={arrow} className="arrow-cta" />
        </btn>
      </a>


      <a href="http://linkedin.com/in/kuan-ting-pan-b5a5aa135">
        <btn className="ft-itm-right p" style={styles}>
        LinkedIn
          <img alt="arrow" src={arrow} className="arrow-cta" />
        </btn>
      </a>


      <div className="p footer-right">© 2020 All Right Reserved</div>
    </footer>
  );
}

export default Footer;
