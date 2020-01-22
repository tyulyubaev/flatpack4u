import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Popup.css";

export class MessagePostcode extends Component {
  render() {
    return (
      <div
        className="sticky-top alert alert-danger text-center font-weight-bold mb-0"
        role="alert"
        id="message"
      >
        Looks like you have entered wrong postcode or we do not cover your area
        at the moment!
      </div>
    );
  }
}

export function message(value, content) {
  if (value) {
    return (
      <div className="overlay">
        <div className="popup">
          <h4>Dear Customer!</h4>
          <hr />
          <a className="close" href="/">
            &times;
          </a>
          <div className="content">
            <p>{content[0]}</p>
            <p>{content[1]}</p>
          </div>
        </div>
      </div>
    );
  }
}
