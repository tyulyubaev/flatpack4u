import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MessageCookies extends Component {
  render() {
    return (
      <div className="object">
        <div
          className="alert alert-secondary text-center font-weight mb-0"
          role="alert"
          id="message"
        >
          <div className="row my-auto p-0" style={{ fontSize: "0.8rem" }}>
            
            <p className="text-left my-auto col">
              By using this site you agree to the privacy policy
            </p>
            <button
              type="button"
              className="close col-1"
              aria-label="Close"
              onClick={() => this.props.messageVisibility("cookies", false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="col-auto text-center text-sm-left  p-0 m-0"></div>
        </div>
      </div>
    );
  }
}
export default withRouter(MessageCookies);
