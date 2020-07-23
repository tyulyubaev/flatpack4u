import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Carousel extends Component {
  render() {
    const imgMoney = require("../../assets/images/main.jpg");
    const imgCorvid = require("../../assets/images/corvid.png");
    const imgRating = require("../../assets/images/satisfaction.svg");
    const imgGuarantee = require("../../assets/images/guarantee.svg");
    const imgCalculator = require("../../assets/images/calculator.svg");

    return (
      <div className="container position-relative">
{/* 

        <div className="carousel-caption-lg align-middle">
          <div className="bg-success m-5 p-3">
          <h3>Furniture Assembly Service in London</h3>
          </div>
        </div> */}
      </div>
    );
  }
}
export default withRouter(Carousel);
