import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Prices
        </h2>
        <hr className="mt-2 mb-4" />

        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-9">
            <p className="lead font-weight-normal mb-0">Bed assembly prices:</p>
            <ul className="">
              <li className="lead">
                standart bed (single/double) - <b>from £35</b>
              </li>
              <li className="lead">
                ottoman bed (single/double) - <b>from £45</b>
              </li>
              <li className="lead">
                storage bed with drawers - <b>from £50</b>
              </li>
              <li className="lead">
                bunk bed - <b>from £55</b>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-8 col-md-9 mt-3">
            <p className="lead font-weight-normal mb-0">
              Wardrobe assembly prices:
            </p>
            <ul className="">
              <li className="lead">
                Two door wardrobe - <b>from £35</b>
              </li>
              <li className="lead">
                Three door wardrobe - <b>from £45</b>
              </li>
              <li className="lead">
                Sliding door wardrobe - <b>from £75</b>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-8 col-md-9 mt-3">
            <p className="lead font-weight-normal mb-0">
              Chest of drawers assembly prices:
            </p>
            <ul className="">
              <li className="lead">
                Chest of 1-4 drawers - <b>from £25</b>
              </li>
              <li className="lead">
                Chest of 5-6 drawers - <b>from £45</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
