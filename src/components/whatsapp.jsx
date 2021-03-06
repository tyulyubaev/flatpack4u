import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Popup.css";

class Whatsapp extends Component {
  render() {
    const img = require("../assets/icons/WhatsApp.svg");
    return (
      <div className="sticky">
        <div className="row text-right mr-1">
          <a
            className=""
            href={"https://wa.me/447380268355"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img} alt="" className="" style={{ width: "70px" }} />
          </a>
          
        </div>
        {/* <div className="row text-right">
            <p classname="" style={{ fontSize: "0.7rem", color: "green"}}>WhatsApp</p>
          </div> */}
      </div>
    );
  }
}
export default withRouter(Whatsapp);
