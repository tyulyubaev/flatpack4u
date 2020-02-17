import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MessageCookies extends Component {
  render() {
    return (
      <div
        className="fixed-bottom alert alert-secondary text-center font-weight mb-0"
        role="alert"
        id="message"
      >
        <div className="my-auto p-0" style={{"fontSize": "0.8rem"}}>     
          <p className="m-0">
            We use cookies on our websites.{" "}
            <span className="d-none d-sm-inline"> You are free to manage this via your browser setting.</span>
            <a              
              onClick={() => {
                this.props.history.push("/cookies");
              }}
            >
             {" "}Cookies Policy
            </a>
            <a            
            className="btn btn-outline-success btn-sm mx-4 text-touppercase " style={{"fontSize": "0.8rem"}}
            onClick={() => this.props.messageVisibility("cookies", false)}
          >
            Agree
          </a>
          </p>
        </div>
        <div className="col-auto text-center text-sm-left  p-0 m-0">
          
        </div>
      </div>
    );
  }
}
export default withRouter(MessageCookies);
