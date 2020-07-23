import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import ButtonGetPrice from "./ButtonGetPrice";
import tracker from "../tracker";
const { Content } = require("../Content");

export default class Hanging extends Component {
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
    if (this.state.type === "") {
      this.setState({ typeVal: false });
    } else {
      this.setState({ typeVal: true });
    }
    if (this.state.wall === "") {
      this.setState({ wallVal: false });
    } else {
      this.setState({ wallVal: true });
    }
    if (this.state.width === "") {
      this.setState({ widthVal: false });
    } else {
      this.setState({ widthVal: true });
    }
    if (this.state.width > 200) {
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
    let totalCost = 0;
    const itemCost = Content.Prices;

    switch (type) {
      case "Mirror":
        if (width < 50) {
          totalCost = itemCost.mirrorUpTo50cm;
        } else if (width < 100) {
          totalCost = itemCost.mirrorUpTo100cm;
        } else if (width <= 200) {
          totalCost = itemCost.mirrorUpTo200cm;
        }
        if (wall === "Brick wall") {
          totalCost += 5;
        }

        break;
      case "Shelf":
        if (width < 50) {
          totalCost = itemCost.shelfUpTo50cm;
        } else if (width < 100) {
          totalCost = itemCost.shelfUpTo100cm;
        } else if (width <= 200) {
          totalCost = itemCost.shelfUpTo200cm;
        }
        if (wall === "Plasterboard") {
          totalCost += 5;
        }
        break;
      case "Picture":
        if (width < 50) {
          totalCost = itemCost.pictureUpTo50cm;
        } else if (width < 100) {
          totalCost = itemCost.pictureUpTo50cm;
        } else if (width <= 200) {
          totalCost = itemCost.pictureUpTo50cm;
        }
        if (wall === "Brick wall") {
          totalCost += 5;
        }
        break;
    }
    totalCost = Math.floor(totalCost) - 0.01;
    const itemName = "Hanging";
    this.setState(
      { price: totalCost, item: itemName }
    );
    this.showPrice = true;
  };
  render() {
    return (
      <div className="container">
        <div className="form-row justify-content-center">
          <div className="col-md-6 px-0">
            <ItemToHang handleChange={this.handleChange} data={this.state} />
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

class ItemToHang extends Component {
  render() {
    const handleChange = this.props.handleChange;
    const label = "col-6 my-auto";
    const inputType =
      this.props.data.typeVal === false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";
    const inputWidth =
      this.props.data.widthVal === false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";

    const inputWidthExceed = this.props.data.width <= 300 ? "d-none" : "";

    const inputWall =
      this.props.data.wallVal === false
        ? "form-control col border border-danger rounded-lg"
        : "form-control col";
    return (
      <div>
        <h4
          className="font-weight-light pt-5 pb-3 text-capitalize"
          id="hanging"
        >
          Shelves, Pictures and Mirrors Hanging
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
            <option>Mirror</option>
            <option>Shelf</option>
            <option>Picture</option>
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
          Width should be less than 200cm
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
