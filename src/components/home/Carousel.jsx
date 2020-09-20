import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CheckPostcode } from "../DataValidation";
import tracker from "../tracker";
import Background from "../../assets/images/main1.jpg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(postcode) {
    tracker(postcode);
    const id = "inputPostcode";
    const valid = CheckPostcode(postcode, id);
    if (valid === true) {
      this.props.messageVisibility("alert", false);
      this.props.updateContactsDetails("postcode", postcode);
      this.props.history.push("/quote");
    } else if (valid === false) {
      this.props.messageVisibility("alert", true);
    }
  }

  render() {
    const imgMoney = require("../../assets/images/main.jpg");
    const imgCorvid = require("../../assets/images/corvid.png");
    const imgRating = require("../../assets/images/satisfaction.svg");
    const imgGuarantee = require("../../assets/images/guarantee.svg");
    const imgCalculator = require("../../assets/images/calculator.svg");

    return (
      <div
        className="container pt-2 pb-5"
        style={{
          height: "500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "800px 500px",
          backgroundImage: "url(" + Background + ")",
        }}
      >
        {/* <div className="mx-auto pt-4 pb-2">
          <h3 className="text-center text-white">Professional </h3>
          <h4 className="text-center text-white">Furniture Assembly Service in London</h4>
          <h4 className="text-center"></h4>                
        </div> */}

        <div
          className="mx-auto p-3"
          style={{
            position: "relative",
            height: "170px",
            backgroundColor: "#2e2c3690",
            top: "150px",
          }}
        >
          <h4 className="text-center  text-white mt-1" role="alert">
            Furniture Assembly Service
          </h4>
          
          <h4 className="text-center text-white" role="alert">
          Starting from £35
          </h4>       

          <div className="input-group p-3"> 
          <input
            type="text"
            className="form-control"
            placeholder="Your Postcode"
            id="inputPostcode"
            aria-label="My Postcode"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            {/* <button className="btn btn-outline-secondary" type="button">Get a Quote</button> */}
            <a
              href="#"
              className="form-control btn text-light"
              style={{ backgroundColor: "#7FB800" }}
              role="button"
              aria-pressed="true"
              onClick={() => {
                const postcode = document.getElementById("inputPostcode").value;
                this.routeChange(postcode);
              }}
            >
              Get a Quote
            </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Carousel);
