import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import tracker from "../tracker";
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
      if (this.state[value] === "") {
        this.setState({ [VerValue]: "border border-danger" });
        count += 1;
      } else {
        this.setState({ [VerValue]: "" });
      }
    });
    if (count === 0) {
      this.calculations();
    }
  };
  calculations = () => {
    const rate = Content.Prices.hourlyRate;
    const {
      height,
      width,      
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
    if (wall === "yes") {
      frameTime += 15;
    }

    //Doors
    if (type === "sliding") {
      frameTime += 20;
      doorTime = 30;
    } else if (type === "hinged") {
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
    // async function
    const updateData = () => {
      return new Promise(resolve => {        
        this.setState({ price: totalCost, item: itemName });
        this.showPrice = true;
        resolve();
      });
    };
    const submit = () => {
      tracker(this.state)
    };
    async function addAsync() {
      await updateData();
      submit();
    }
    addAsync();
  };

  render() {
    const {
      height,
      width,
      depth,
      qtyDoors,      
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
              className={`form-control ${this.state.VerDepth}`}
              placeholder="Depth in cm"
              name="depth"
              value={depth}
              onChange={this.handleChange}
            />
          </div>
          <AddToOrder content={this.state} addItem={this.props.addItem} />
        </div>
       
           
          
        
      </div>
    );
  }
}
