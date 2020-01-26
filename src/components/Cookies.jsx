import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MessageCookies extends Component {
  render() {
    return (
      <div
        className="fixed-bottom alert alert-secondary text-center font-weight mb-0 row row justify-content-center py-2"
        role="alert"
        id="message"
      >
        <div className="col-auto my-auto" style={{"fontSize": "0.9rem"}}>     
          <p className="m-0">
            We use cookies on our websites. You are free to manage this via your
            browser setting at any time. To learn more about how we use cookies,
            please see our{" "}
            <a              
              onClick={() => {
                this.props.history.push("/cookies");
              }}
            >
              Cookies Policy
            </a>
          </p>
        </div>
        <div className="col-auto text-center text-sm-left  my-auto">
          <a            
            className="btn btn-outline-success btn-sm mx-4 text-touppercase"
            onClick={() => this.props.messageVisibility("cookies", false)}
          >
            Agree
          </a>
        </div>
      </div>
    );
  }
}
export default withRouter(MessageCookies);
