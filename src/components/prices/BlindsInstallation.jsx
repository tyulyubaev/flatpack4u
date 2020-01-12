import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import ButtonGetPrice from "./ButtonGetPrice";
import tracker from "../tracker"
const { Content } = require("../Content");

export default class TVWallMounting extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      width: "",
      wall: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculations = this.calculations.bind(this);
    this.verification = this.verification.bind(this);
  }
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  verification = () => {    
    if (this.state.type == "") {
      this.setState({ typeVal: false });
    } else {
      this.setState({ typeVal: true });
    }
    if (this.state.wall == "") {
      this.setState({ wallVal: false });
    } else {
      this.setState({ wallVal: true });
    }
    if (this.state.width == "") {
      this.setState({ widthVal: false });
    } else {
      this.setState({ widthVal: true });
    }
    if (this.state.width > 300) {
      this.setState({ widthVal: "exceed" });
    }
    if (
      this.state.type !== "" &&
      this.state.wall !== "" &&
      this.state.width !== ""
    ) {
      this.calculations();
    }
  };
  calculations = () => {
    const { type, width, wall } = this.state;
    let totalCost = 10;
    const holeCost = Content.Prices.holeCost;
    let holesQuantity=0;

    if (width < 100) {
      holesQuantity=2;
    } else if (width < 200) {
      holesQuantity=4;
    } else if (width <= 300) {
      holesQuantity=6;
    }
    totalCost += holeCost*holesQuantity

    if (wall=="Brick wall"){totalCost+=9};
    if (type=="Vertical blind"){totalCost+=14};
    
    totalCost = Math.floor(totalCost) + 0.99
    const itemName = "Blinds";
    this.setState({ price: totalCost, item: itemName }, tracker(itemName + " - £" + totalCost));
    this.showPrice = true;
  };

  render() {
    return (
      <div className="container">
        <div className="form-row justify-content-center">
          <div className="col-md-6 px-0">
            <Blinds handleChange={this.handleChange} data={this.state} />
            <ButtonGetPrice verification={this.verification} />
          </div>
        </div>
        {this.showPrice && (
          <AddToOrder content={this.state} addItem={this.props.addItem} />
        )}
      </div>
    );
  }
}

class Blinds extends Component {
  render() {
    const handleChange = this.props.handleChange;
    const label = "col-6 my-auto";
    const inputWidth =
      this.props.data.widthVal == false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";

    const inputWidthExceed = this.props.data.width <= 300 ? "d-none" : "";

    const inputType =
      this.props.data.typeVal == false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";
    const inputWall =
      this.props.data.wallVal == false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";

    return (
      <div>
        <h4
          className="font-weight-light pt-5 pb-3 text-capitalize"
          id="curtains"
        >
          Curtains and blinds installation
        </h4>
        <div className="row mb-3">
          <label htmlFor="" className={label}>
            Type
          </label>
          <select
            className={inputType}
            id="blindType"
            name="type"
            onChange={handleChange}
            defaultValue="select an option"
          >
            <option hidden>select an option</option>
            <option>Curtain pole</option>
            <option>Roller blind</option>
            <option>Vertical blind</option>
            <option>Roman blind</option>
            <option>Venetian blind</option>
          </select>
        </div>

        <div className="row mb-1">
          <label className={label} htmlFor="tvsize">
            Width, cm
          </label>
          <input
            type="number"
            min="0"
            max="300"
            className={inputWidth}
            placeholder="cm"
            name="width"
            onChange={handleChange}
          />
        </div>

        <div
          className={`${inputWidthExceed} row alert alert-danger text-center px-3 py-1 mt-0 justify-content-center`}
          role="alert"
        >
          Widht should be less than 300cm
        </div>

        <div className="row mb-5 mt-3">
          <label htmlFor="" className={label}>
            Type of the wall
          </label>
          <select
            className={inputWall}
            id="wall"
            name="wall"
            onChange={handleChange}
            defaultValue="select an option"
          >
            <option hidden>select an option</option>
            <option>Plasterboard</option>
            <option>Brick wall</option>
          </select>
        </div>
      </div>
    );
  }
}
