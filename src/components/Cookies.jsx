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
        <div className="my-auto p-0" style={{"fontSize": "0.8rem"}}>     
          <p className="m-0 p-0 text-center">
          By using this site you agree to the privacy policy
            <span className="d-none d-sm-inline"> You are free to manage this via your browser setting.{" "}</span>
            {/* <a href="#" className=""         
              onClick={() => {
                this.props.history.push("/cookies");
              }}
            >
             Read our cookie policy
            </a> */}
            <a            
            className="btn btn-outline-secondary btn-sm px-3 ml-3" style={{"fontSize": "0.8rem"}}
            onClick={() => this.props.messageVisibility("cookies", false)}
          >
            OK
          </a>
          </p>
        </div>
        <div className="col-auto text-center text-sm-left  p-0 m-0">
          
        </div>
      </div>
      </div>
    );
  }
}
export default withRouter(MessageCookies);
