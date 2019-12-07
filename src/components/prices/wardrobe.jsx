import React, { Component } from "react";
import AddToOrder from './addToOrder'
const { Content } = require("../Content");


export default class wardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:"",
      height: "",
      width: "",
      depth: "",
      type: "",
      qtyDoors: 1,
      wall: "no",
      drawers: "",
      baskets: "",
      rails: "",
      shelves: "",
      lights: "",
      price: ""
    };
    this.showPrice = true

    this.handleChange = this.handleChange.bind(this);
    this.calculations = this.calculations.bind(this);        
  }
  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
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
    const totalInternal  = drawersTime+basketsTime+railsTime+shelvesTime+lightsTime

    totalTime = unpackingTime + frameTime + doorTime+totalInternal;
    const totalCost = Math.floor(totalTime * rate /60)+0.99;

    const itemName = "Wardrobe"
    this.setState({price: totalCost, item: itemName});
    this.showPrice=true
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
        <h4 className="font-weight-light pt-5" id="itemName">Wardrobe</h4>
        <div className="row pt-4">
          <div className="col-md-3">
            <label>Dimensions, cm</label>
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Height in cm"
              name="height"
              value={height}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Width in cm"
              name="width"
              value={width}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Depth in cm"
              name="depth"
              value={depth}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3">
            <label>Type of the doors</label>
          </div>
          <div className="col-md-2 px-5">
            <input
              className="form-check-input"
              type="radio"
              id="exampleRadios1"
              value="sliding"
              name="type"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Sliding
            </label>
          </div>
          <div className="col-md-2  px-5">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="exampleRadios2"
              value="hinged"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Hinged
            </label>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3">
            <label>Quantity of the doors</label>
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              type="number"
              placeholder="Quantity"
              min="0"
              name="qtyDoors"
              value={qtyDoors}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-3">
            <label>Secure to the wall</label>
          </div>
          <div className="col-md-2 px-5">
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
          <div className="col-md-2  px-5">
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
        <div className="row pt-4">
          <div className="col-md-3">
            <label htmlFor="" className="">
              Internal items
            </label>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right">
            <label className="">Drawers</label>
          </div>
          <div className="col-md-7">
            <input
              type="number"
              placeholder="Quantity"
              min="0"
              name="drawers"
              value={drawers}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3 text-md-right">
            <label className="">Baskets</label>
          </div>
          <div className="col-md-7">
            <input
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
          <div className="col-md-3 text-md-right">
            <label className="">Rails</label>
          </div>
          <div className="col-md-7">
            <input
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
          <div className="col-md-3 text-md-right">
            <label className="">Shelves</label>
          </div>
          <div className="col-md-7">
            <input
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
          <div className="col-md-3 text-md-right">
            <label className="">Lights</label>
          </div>
          <div className="col-md-7">
            <input
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
            onClick={this.calculations}
          >
            Get the Price
          </button>
        </div>
        {this.showPrice && <AddToOrder content={this.state} addItem={this.props.addItem}/>}        
      </div>
    );
  }
}
