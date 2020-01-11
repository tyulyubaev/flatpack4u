import React, { Component } from "react";

class Carousel extends Component {
  render() {
    const imgMoney = require("../../assets/images/money.svg");
    const imgRating = require("../../assets/images/satisfaction.svg");
    const imgGuarantee = require("../../assets/images/guarantee.svg");

    return (
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators mb-0">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner rounded">
            {/* PRICE */}
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
                      href="/prices"
                      role="button"
                    >
                      Price calculator
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
                      href="/reviews"
                      role="button"
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
                      href="/about"
                      role="button"
                    >
                      About Us
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <a
            className="carousel-control-prev align-items-end pb-2"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next align-items-end pb-2"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
