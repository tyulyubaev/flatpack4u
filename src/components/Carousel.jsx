import React, { Component } from "react";

class Carousel extends Component {
  state = {
  };
  render() {
    return (
      <div className="container d-block p-4 ">
        <div id="myCarousel" className="carousel slide" data-ride="carousel" >
          <ol className="carousel-indicators ">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li
              data-target="#myCarousel"
              data-slide-to="2"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img "
                width="100%"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#C1C8E4"></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>
                    {this.props.content.title[0]}
                  </h1>
                  <p>
                    {this.props.content.content[0]}
                  </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption">
                    <h1>
                        {this.props.content.title[1]}
                    </h1>
                    <p>
                        {this.props.content.content[1]}
                    </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
              <div className="container">
                <div className="carousel-caption text-right">
                    <h1>
                        {this.props.content.title[2]}
                    </h1>
                    <p>
                        {this.props.content.content[2]}
                    </p>
                  <p>
                    <a
                      className="btn btn-lg btn-primary"
                      href="#"
                      role="button"
                    >
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
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
            className="carousel-control-next"
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
    );
  }
}
export default Carousel;
