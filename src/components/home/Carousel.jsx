import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CheckPostcode } from "../DataValidation";
import tracker from "../tracker";

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
      <div className="container pt-2 pb-5" style={{ backgroundColor: "#F2F2F3" }}>
        <div className="mx-auto pt-4 pb-2">
          <h3 className="text-center">Professional </h3>
          <h4 className="text-center">Furniture Assembly Service in London</h4>
          <h4 className="text-center"></h4>        
          {/* <h3 className="text-center">Starting from £35 </h3> */}
        </div>

        <div className="my-3 alert mx-5 mb-5" style={{ backgroundColor: "#0057a3" }}>        
          <h5 className="text-center  text-white" role="alert">
            IKEA Pickup, Delivery and Assembly 
            <br/>
            Starting <b className="text-warning">from £35</b>
          </h5>
        </div>

        <div className="input-group mt-4 w-75 mx-auto pb-5">
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
              className="btn text-light"
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
    );
  }
}
export default withRouter(Carousel);
