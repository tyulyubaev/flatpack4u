import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import tracker from "../tracker"
const { Content } = require("../Content");


export default class wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      height: "",
      width: "",
      depth: "",
      type: "",
      qtyDoors: "",
      wall: "",
      drawers: "",
      baskets: "",
      rails: "",
      shelves: "",
      lights: "",
      price: ""
    };
    this.state.validStyle = "";
    this.showPrice = false;

    this.handleChange = this.handleChange.bind(this);
    this.calculations = this.calculations.bind(this);
    this.verification = this.verification.bind(this);
  }
  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  verification = () => {
    let param = Object.keys(this.state);
    let count = 0;
    param = param.splice(1, 11);
    param.forEach(value => {
      const valueCapitalize = value.replace(/\b\w/g, l => l.toUpperCase());
      const VerValue = `Ver${valueCapitalize}`;
      if (this.state[value] == "") {
        this.setState({ [VerValue]: "border border-danger" });
        count += 1;
      } else {
        this.setState({ [VerValue]: "" });
      }
    });
    if (count == 0) {
      this.calculations();
    }
  };
  calculations = () => {
    const rate = Content.Prices.hourlyRate;
    const {
      height,
      width,
      depth,
      type,
      qtyDoors,
      wall,
      drawers,
      baskets,
      rails,
      shelves,
      lights
    } = this.state;
    let unpackingTime = 10;
    let frameTime = 30;
    let doorTime = 0;
    let totalTime = 0;
    //Frame
    if (height >= 200) {
      frameTime += 15;
    }
    if (width >= 100 && width <= 200) {
      frameTime *= 2;
    } else if (width > 200) {
      frameTime *= 3;
    }
    if (wall == "yes") {
      frameTime += 15;
    }

    //Doors
    if (type == "sliding") {
      frameTime += 20;
      doorTime = 30;
    } else if (type == "hinged") {
      doorTime = 10;
    }
    doorTime *= qtyDoors;

    //Internal items
    const drawersTime = 15 * drawers;
    const basketsTime = 10 * baskets;
    const railsTime = 10 * rails;
    const shelvesTime = 10 * shelves;
    const lightsTime = 15 * lights;
    const totalInternal =
      drawersTime + basketsTime + railsTime + shelvesTime + lightsTime;

    totalTime = unpackingTime + frameTime + doorTime + totalInternal;
    const totalCost = Math.floor((totalTime * rate) / 60) + 0.99;

    const itemName = "Wardrobe";
    this.setState({ price: totalCost, item: itemName }, tracker(itemName + " - £" + totalCost));
    this.showPrice = true;
  };

  render() {
    const {
      height,
      width,
      depth,
      qtyDoors,
      wall,
      drawers,
      baskets,
      rails,
      shelves,
      lights
    } = this.state;
    return (
      <div className="container">
        <h4 className="font-weight-light pt-5" id="wardrobe">
          Wardrobe
        </h4>
        <div className="row pt-4">
          <div className="col-md-3 my-auto">
            <label>Dimensions, cm</label>
          </div>
          <div className="col-md-3 my-2 my-sm-0">
            <input
              type="number"
              className={`form-control ${this.state.VerHeight}`}
              placeholder="Height in cm"
              name="height"
              value={height}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3 my-2 my-sm-0">
            <input
              type="number"
              className={`form-control ${this.state.VerWidth}`}
              placeholder="Width in cm"
              name="width"
              value={width}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3 my-2 my-sm-0">
            <input
              type="number"
              className={`form-control ${this.state.VerDepth}`}
              placeholder="Depth in cm"
              name="depth"
              value={depth}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row pt-4 ">
          <div className="col-md-3  my-auto">
            <label>Type of the doors</label>
          </div>
          <div
            className={`col d-flex form-control border mx-3 ${this.state.VerType}`}
          >
            <div className="col-6">
              <input
                className="form-check-input"
                type="radio"
                id="exampleRadios1"
                value="sliding"
                name="type"
                onChange={this.handleChange}
              />
              <label
                className="form-check-label"
                name="type"
                htmlFor="exampleRadios1"
              >
                Sliding
              </label>
            </div>
            <div className="col-6">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="exampleRadios2"
                value="hinged"
                onChange={this.handleChange}
              />
              <label className="form-check-label " htmlFor="exampleRadios2">
                Hinged
              </label>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3  my-auto">
            <label>Quantity of the doors</label>
          </div>
          <div className="col-md-3">
            <input
              className={`form-control ${this.state.VerQtyDoors}`}
              type="number"
              placeholder="Quantity"              
              name="qtyDoors"
              value={qtyDoors}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3  my-auto">
            <label>Secure to the wall</label>
          </div>
          <div className={`col d-flex form-control border mx-3 ${this.state.VerWall}`}>
            <div className="col-6">
              <input
                className="form-check-input"
                type="radio"
                id="wallyes"
                value="yes"
                name="wall"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="wallyes">
                Yes
              </label>
            </div>
            <div className="col-6">
              <input
                className="form-check-input"
                type="radio"
                name="wall"
                id="wallno"
                value="no"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="wallno">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3">
            <label htmlFor="" className="">
              Internal items
            </label>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right my-auto">
            <label className="">Drawers</label>
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className={`form-control ${this.state.VerDrawers}`}
              placeholder="Quantity"
              min="0"
              name="drawers"
              value={drawers}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right  my-auto">
            <label className="">Baskets</label>
          </div>
          <div className="col-md-3">
            <input
              className={`form-control ${this.state.VerBaskets}`}
              type="number"
              placeholder="Quantity"
              min="0"
              name="baskets"
              value={baskets}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right  my-auto">
            <label className="">Rails</label>
          </div>
          <div className="col-md-3">
            <input
              className={`form-control ${this.state.VerRails}`}
              type="number"
              placeholder="Quantity"
              min="0"
              name="rails"
              value={rails}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right  my-auto">
            <label className="">Shelves</label>
          </div>
          <div className="col-md-3">
            <input
              className={`form-control ${this.state.VerShelves}`}
              type="number"
              placeholder="Quantity"
              min="0"
              name="shelves"
              value={shelves}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right  my-auto">
            <label className="">Lights</label>
          </div>
          <div className="col-md-3">
            <input
              className={`form-control ${this.state.VerLights}`}
              type="number"
              placeholder="Quantity"
              min="0"
              name="lights"
              value={lights}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-4">
          <button
            className="btn btn-secondary d-block mx-auto px-5"
            onClick={this.verification}
          >
            Get the Price
          </button>
        </div>
        {this.showPrice && (
          <AddToOrder content={this.state} addItem={this.props.addItem} />
        )}
      </div>
    );
  }
}
