import React, { Component } from "react";

class prices extends Component {
  render() {

    return (
      <div className="container mb-5"  style={{ backgroundColor: "#b69674" }}>
           {/* <h3 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Assembly Prices
        </h3>
        <hr className="mt-1 mb-2" /> */}
        <div class=" text-center px-0" role="alert">       
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-ride="carousel"
          data-interval="3000"
        >
          <div class="carousel-inner py-2">
            <div className="carousel-item active" >
              <a className="navbar-brand">Beds - from £35</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Wardrobes - from £45</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Chests of drawers - from £15</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Bookcases - from £25</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">TV units - from £40</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Desks - from £15</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Dining sets - from £45</a>
            </div>
            <div className="carousel-item">
            <a className="navbar-brand">Storage units- from £25</a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>

        
      </div>
    );
  }
}
export default prices;
