import React from "react";
import "./About.css";
let styles = {
  display: "none",
  marginTop: "10px",
  height: "250px",
};

let height = {
  height: "250px",
};

function Contact() {
  return (
    <form
      method="post"
      action="https://script.google.com/macros/s/AKfycbznE7mqFUfLuXiTyqTeQ_xDZnZ2bMs3h0ciYcad6g/exec"
      className="container-fluid p gform"
    >
      <div class="row">
        <div className="form-row">
          <div className="form-group col-md-12">Thoughts? Let's Connect!</div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12 col-lg-4 col-12">
            <input
              type="text"
              className="form-field "
              id="inputEmail4"
              name="first_name"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-4 col-sm-12 col-lg-4 col-12">
            <input
              type="text"
              className="form-field"
              id="inputPassword4"
              name="last_name"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>

      <div className="form-row row">
        <div class="form-group col-md-4 col-sm-12 col-lg-4 col-12">
          <input
            type="email"
            className="form-field"
            id="inputEmail4"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group col-md-4 col-sm-12 col-lg-4 col-12">
          <input
            type="text"
            className="form-field"
            name="company"
            id="inputPassword4"
            placeholder="Company(Optional)"
          />
        </div>
      </div>

      <div className="form-row row">
        <div className="form-group col-md-8">
          <textarea
            className="form-comment"
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Comment"
            style={height}
          ></textarea>
        </div>
      </div>
      <div type="submit" className="btn" > Submit </div>

      <div style={styles} className="thankyou_message">
        <p>Thanks for contacting!</p>
      </div>
    </form>
  );
}

export default Contact;
