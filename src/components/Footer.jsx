import React, { Component } from "react";
class footer extends Component {
  render() {
    return (
      <footer className="bd-footer py-2" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p className="text-left">
            © 2019 FlatPack4U <br />
            Email:{" "}
            <a href="mailto: quote@flatpack4u.co.uk">
              quote@flatpack4u.co.uk
            </a>{" "}
            Tel: <a href="tel:07380268355">073 8026 8355</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default footer;
