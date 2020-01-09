import React, { Component } from "react";
import AddToOrder from "./addToOrder";
const { Content } = require("../Content");

export default class chestOfDrawers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      qty: "",      
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculations = this.calculations.bind(this);
    this.verification = this.verification.bind(this)
  }
  handleChange = e => {    
    this.setState({ [e.target.name]: e.target.value });
  };
  verification = () =>{
    if (this.state.qty ==""){this.setState({qtyVal: false})} else {this.setState({qtyVal: true})};
    if (this.state.qty!==""){this.calculations()}
  }
  calculations = () => {    
    const rate = Content.Prices.hourlyRate;
    const qty = this.state.qty;

    const totalTime = qty * 15;
    const totalCost = Math.floor((totalTime * rate) / 60) + 0.99;
    const itemName = `Chest of ${qty} drawers`;
    
    this.setState({ price: totalCost, item: itemName });
    this.showPrice = true;
  };

  render() {    
    return (
      <div className="container">
        <div className="form-row justify-content-center">
          <div className="col-lg-6 px-0">

          <h4 className="font-weight-light pt-5 text-capitalize" id="chest">
          Chest of drawers
        </h4>
        <div className="row pt-4">
          <div className="col-8 col-lg-6 my-auto">
            <label className="mb-0">Quantity of the drawers</label>
          </div>
          <div className="col my-auto4">
            <input
              type="number"
              className={this.state.qtyVal==false ? "form-control border border-danger" : "form-control"}
              
              placeholder="Qty"
              name="qty"
              value={this.state.qty}
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
          </div>
        </div>
        {this.showPrice && (
          <AddToOrder content={this.state} addItem={this.props.addItem} />
        )}
      </div>
    );
  }
}
