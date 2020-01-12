import React, { Component } from "react";
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
            <a href="#" className="font-weight-light text-secondary">
              *Terms and Conditions and minimum charges apply
            </a>   
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm">
              Phone: <a href="tel:07380268355">073 8026 8355</a>
            </div>
            <div className="col text-center text-sm-right">
            © 2019 FlatPack4U
            </div>
          </div>
          
          
        </div>
      </footer>
    );
  }
}

export default footer;
