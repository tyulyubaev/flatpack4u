import React, { Component } from "react";
import Carousel from "./Carousel";
import Figures from "./Figures";
import RevCarousel from "./RevCarousel.jsx";
import Prices from "./Prices.jsx"


const { Content } = require("../Content");

class main extends Component {
  render() {
    const img1 = require("../../assets/images/zurich.jpg");
    const img2 = require("../../assets/images/quality.svg");
    const img3 = require("../../assets/images/fees.svg");
    const image = require("../../assets/images/ya.jpg"); 
    return (
      <main role="main">
        <Carousel
          content={Content.Carousel}
          updateContactsDetails={this.props.updateContactsDetails}
          messageVisibility={this.props.messageVisibility}
        />
        <Prices/>
        <Figures content={Content.Figures} />
        <RevCarousel/>
        

        <div className="container" style={{ backgroundColor: "#e6e3d9" }}>          
          <div className="py-5" >
         
            <div
              className="col text-center my-auto p-0 background-black alert"
            >
               <div className="py-3">
                <img className="img-thumbnail rounded-circle mx-auto" src={image} alt=""  style={{width:"150px"}}/>
              </div>
               
              <h4>
               7 Reasons why people choose my service:
              </h4>
            </div>
            <div className="ml-5" style={{ fontSize: " 1.1rem" }}>
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
