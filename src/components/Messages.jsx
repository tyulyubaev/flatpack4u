import React, { Component } from "react";
import "./Popup.css";
import "./Animation.css";

export class MessagePostcode extends Component {
  render() {
    return (
      <div>        
        <div
          className="alert alert-danger text-center font-weight-bold mb-0"
          role="alert"
          id="message"
        >
          Unfortunatly we do not cover your area at the moment!
        </div>
      </div>
    );
  }
}

export function message(value, content) {
  if (value) {
    return (
      <div className="overlay">
        <div className="popup">
          <div className="content text-center">
            <p>{content[0]}</p>
            <p>{content[1]}</p>
          </div>
          <div className="text-center">
            <a className="btn btn-secondary active px-5" href="/">
              OK
            </a>
          </div>
        </div>
      </div>
    );
  }
}
