import React, { Component } from "react";
import './Popup.css'

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

export class MessageReview extends Component {
  render() {
    return (
        <div className="overlay">
        <div className="popup">
            <h4>Dear Customer</h4>
            <hr/>
            <a className="close" onClick={()=>this.props.hide(false)} href="/">&times;</a>
            <div className="content">
            <p>Thank you so much for your valuable feedback!</p>
            </div>
        </div>
    </div>
    );
  }
}

export class MessageRequest extends Component {
    render() {
      return (
          <div className="overlay">
          <div className="popup">
              <h4>Dear Customer</h4>
              <hr/>
              <a className="close" href="/">&times;</a>
              <div className="content">
              
              <p>Thank you so much for choosing FlatPack4U furniture assembly service!</p>
              
              <p>You should get the final price quote shortly.</p>
              </div>
          </div>
      </div>
      );
    }
  };

  export function message() {
    return <MessageReview /> 
  }