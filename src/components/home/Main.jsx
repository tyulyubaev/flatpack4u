import React, { Component } from "react";
import Carousel from "./Carousel";
import Figures from "./Figures";
import FeaturetteLeft from "./FeaturetteLeft";
import FeaturetteRight from "./FeaturetteRight";

const { Content } = require("../Content");

class main extends Component {
  render() {
    const img1 = require("../../assets/images/zurich.jpg");
    const img2 = require("../../assets/images/quality.svg");
    const img3 = require("../../assets/images/fees.svg");
    return (
      <main role="main">
        <Carousel
          content={Content.Carousel}
          updateContactsDetails={this.props.updateContactsDetails}
          messageVisibility={this.props.messageVisibility}
        />
        <Figures content={Content.Figures} />

        <div className="container" style={{ backgroundColor: "#F2F2F3" }}>          
          <div className="py-5" >
         
            <div
              className="col text-center text-red my-auto p-0 background-black alert"
              style={{ backgroundColor: "#F2F2F3" }}
            >
              <h2>
                7 Reasons Why People Choose Our Service:
              </h2>
            </div>
            <div className="ml-5" style={{ fontSize: " 1.2rem" }}>
              <ol>
                <li className="py-1">Only Positive Feedbacks</li>
                <li className="py-1">Affordable Prices</li>
                <li className="py-1">No Hidden Fees</li>
                <li className="py-1">Fully Insured</li>
                <li className="py-1">One Year Guarantee</li>
                <li className="py-1">Accept Card Payments</li>
                <li className="py-1">Short Time Notice</li>
              </ol>
            </div>
          </div>
          <br/>
          
        </div>
      </main>
    );
  }
}

export default main;
