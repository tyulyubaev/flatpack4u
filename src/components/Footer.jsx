import React, { Component } from "react";
import { withRouter} from "react-router-dom";
class footer extends Component {
  render() {
    return (
      <footer
        className="mt-auto py-2"
        style={{
          backgroundColor: "#F2F2F2"
        }}
      >
        <div className="container" id="footer">
          <div className="row">
            <div className="col-12 col-sm order-2 order-sm-1">
              Email:{" "}
              <a href="mailto: quote@flatpack4u.co.uk">
                quote@flatpack4u.co.uk
              </a>
            </div>
            <div className="col text-sm-right order-1 order-sm-2">
              <a href="#" className="font-weight-light text-secondary" onClick={()=>{this.props.history.push("/terms-and-conditions");}}>
                Terms and Conditions
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm">
              Phone: <a href="tel:07380268355">073 8026 8355</a>
            </div>
            <div className="col text-sm-right order-1 order-sm-2">
              <a href="#" className="font-weight-light text-secondary" onClick={()=>{this.props.history.push("/privacy-notice");}}>
                Privacy Notice
              </a>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">© 2019 FlatPack4U</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(footer);
