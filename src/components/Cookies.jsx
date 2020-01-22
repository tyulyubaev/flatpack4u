import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MessageCookies extends Component {
  render() {
    return (
      <div
        className="sticky-top alert alert-secondary text-center font-weight mb-0 justify-content-center "
        role="alert"
        id="message"
      >
        <div className="col">     
          <p className="my-auto">
            We use cookies on our websites. You are free to manage this via your
            browser setting at any time. To learn more about how we use cookies,
            please see our{" "}
            <a
              href="#"
              onClick={() => {
                this.props.history.push("/cookies");
              }}
            >
              Cookies Policy
            </a>
          </p>
        </div>
        <div className="col">
          <a
            href="#"
            className="btn btn-outline-success mx-4 mt-2 text-touppercase"
            onClick={() => this.props.messageVisibility("cookies", false)}
          >
            Got it, thanks!
          </a>
        </div>
      </div>
    );
  }
}
export default withRouter(MessageCookies);
