import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Carousel extends Component {
  render() {
    const imgMoney = require("../../assets/images/money.svg");
    const imgCorvid = require("../../assets/images/corvid.png");
    const imgRating = require("../../assets/images/satisfaction.svg");
    const imgGuarantee = require("../../assets/images/guarantee.svg");
    const imgCalculator = require("../../assets/images/calculator.svg");

    return (
      


      <div className="container">
              <div>        
        <div
          className="alert alert-danger row mb-3 pb-0 mx-0"
          role="alert"
          id="message"
        >
          <h4 className="text-center font-weight-bold col col-sm-4">Coronavirus Update:</h4>
          <p className="col-sm">We are working as usual. Please only book us if you are not currently under quarantine or self-isolated and don't showing symptoms of Coronavirus.</p> 
        </div>
      </div>



        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div
            className="carousel-control-prev align-items-end pb-2"
            style={{ width: "50px" }}
          >
            <a href="#myCarousel" role="button" data-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
          </div>

          <div
            className="carousel-control-next align-items-end pb-2"
            style={{ width: "50px" }}
          >
            <a href="#myCarousel" role="button" data-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <ol className="carousel-indicators mb-0">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>

          <div className="carousel-inner rounded">

            {/* Quote*/}
            <div
              className="carousel-item active p-3"
              style={{ backgroundColor: "#49BBBD" }}
            >
              <div className="row align-items-center">
                <div className="col col-md-4 col-lg-3 d-none d-md-block">
                  <img height="100%" src={imgMoney} alt="" />
                </div>
                <div className="col-12 col-md-8 col-lg-9 text-right text-white px-4 px-sm-5">
                  <h1>{this.props.content.title[2]}</h1>
                  <p>{this.props.content.content[2]}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary my-3"
                      href="#"
                      role="button"
                      onClick={() => {
                        this.props.history.push("/quote");
                      }}
                    >
                      Get a Quick Quote
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div
              className="carousel-item p-3"
              style={{ backgroundColor: "#4EC3EB" }}
            >
              <div className="row align-items-center">
                <div className="col col-md-4 col-lg-3 d-none d-md-block">
                  <img height="100%" src={imgRating} alt="" />
                </div>
                <div className="col-12 col-md-8 col-lg-9 text-right text-white px-4 px-sm-5">
                  <h1>{this.props.content.title[1]}</h1>
                  <p>{this.props.content.content[1]}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary my-3"
                      href="#"
                      role="button"
                      onClick={() => {
                        this.props.history.push("/reviews");
                      }}
                    >
                      Customer Reviews
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* guarantee */}
            <div
              className="carousel-item p-3"
              style={{ backgroundColor: "#7DB99B" }}
            >
              <div className="row align-items-center">
                <div className="col col-md-4 col-lg-3 d-none d-md-block">
                  <img height="100%" src={imgGuarantee} alt="" />
                </div>
                <div className="col-12 col-md-8 col-lg-9 text-right text-white px-4 px-sm-5">
                  <h1>{this.props.content.title[0]}</h1>
                  <p>{this.props.content.content[0]}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary my-3"
                      href="#"
                      role="button"
                      onClick={() => {
                        this.props.history.push("/about");
                      }}
                    >
                      About Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* PRICE Calculator*/}
            <div
              className="carousel-item p-3"
              style={{ backgroundColor: "#c3a9ff" }}
            >
              <div className="row align-items-center">
                <div className="col col-md-4 col-lg-3 d-none d-md-block pl-md-1 pl-lg-5">
                  <img height="100%" src={imgCalculator} alt="" />
                </div>
                <div className="col-12 col-md-8 col-lg-9 text-right text-white px-4 px-sm-5">
                  <h1>{this.props.content.title[3]}</h1>
                  <p>{this.props.content.content[3]}</p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary my-3"
                      href="#"
                      role="button"
                      onClick={() => {
                        this.props.history.push("/prices");
                      }}
                    >
                      Price Calculator
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Carousel);
