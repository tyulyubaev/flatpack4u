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
      <div className="container">
        <div className="mx-auto pt-4">
          <h5 className="text-center">Furniture Assembly Service</h5>
          <h3 className="text-center">Just from £35</h3>
        </div>
        <form className="form-inline mx-auto pt-2">
              <input
                className="form-control mr-sm-1 mx-auto w-50"
                type="text"
                placeholder="Your postcode"
                id="inputPostcode"
                aria-label="My Postcode"
              />
              <a
                href="#"
                className="btn btn-success my-2 my-sm-0 mx-auto"
                role="button"
                aria-pressed="true"
                onClick={() => {
                  const postcode = document.getElementById("inputPostcode")
                    .value;
                  this.routeChange(postcode);
                }}
              >
                Get a FREE quote
              </a>
            </form>
      </div>
      
    );
  }
}
export default withRouter(Carousel);
