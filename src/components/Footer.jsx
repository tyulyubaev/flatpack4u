import React, { Component } from "react";
class footer extends Component {
  render() {
    return (
      <footer
        className="mt-auto pt-3"
        style={{
          backgroundColor: "#F2F2F2"
        }}
      >
        <div className="container" id="footer">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p className="text-left">
            <a href="#" className="font-weight-light text-secondary">*Terms and Conditions and minimum charges apply</a>
            
            <br/>
            © 2019 FlatPack4U
            <br />
            Email:{" "}
            <a href="mailto: quote@flatpack4u.co.uk">
              quote@flatpack4u.co.uk
            </a>{" "}
            Tel: <a href="tel:07380268355">073 8026 8355</a>
          </p>
          {/* <button onClick={()=>>height</button> */}
        </div>
      </footer>
    );
  }
}

export default footer;
