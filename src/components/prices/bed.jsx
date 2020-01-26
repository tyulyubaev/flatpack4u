import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import ButtonGetPrice from './ButtonGetPrice'
import tracker from "../tracker"
const { Content } = require("../Content");

export default class chestOfDrawers extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      type: "",
      drawers: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculations = this.calculations.bind(this);
    this.verification = this.verification.bind(this);
  }
  verification = () =>{
    if (this.state.size ===""){this.setState({sizeVal: false})} else {this.setState({sizeVal: true})};
    if (this.state.type ===""){this.setState({typeVal: false})} else {this.setState({typeVal: true})};    
    if (this.state.size!=="" && this.state.type!==""){this.calculations()}
  }
  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  calculations = () => {
    const rate = Content.Prices.hourlyRate;
    const { size, type, drawers } = this.state;
    let totalTime = 0;

    if (size === "single") {
      switch (type) {
        case "normal":
          totalTime = 50;
          break;
        case "ottoman":
          totalTime = 80;
          break;
        case "storage":
          totalTime = 60 + drawers * 15;
          break;
      }
    }
    if (size === "double") {
      switch (type) {
        case "normal":
          totalTime = 60;
          break;
        case "ottoman":
          totalTime = 110;
          break;
        case "storage":
          totalTime = 80 + drawers * 15;
          break;
      }
    }
    const totalCost = Math.floor((totalTime * rate) / 60) + 0.99;
    const itemName = "Bed";

    this.setState({ price: totalCost, item: itemName }, tracker(itemName + " - £" + totalCost));
    this.showPrice = true;
  };

  render() {      
    return (
      <div className="container">
            <div className="form-row justify-content-center">
                <div className="col-lg-4 px-0">
                    <h4 className="font-weight-light pt-5 pb-3" id="bed">
                    Bed
                    </h4>
                    <Size param={this.state} handleChange={this.handleChange}/>
                    <Type param={this.state} handleChange={this.handleChange}/> 
                    <ButtonGetPrice verification={this.verification}/>  
                </div> 
            </div> 
        {this.showPrice && (
          <AddToOrder content={this.state} addItem={this.props.addItem} />
        )}
        
      </div>
    );
  }
}

class Size extends Component {
    render() {            
        return (
        <div className="form-group">
            <div className={this.props.param.sizeVal===false ? 'row py-1 my-2 border border-danger rounded-lg': 'row my-2 py-1' }>
                <div className="col-3">
                    <label className="">Size</label>
                </div>
                <div className="col"> 
                    <div className="form-check my-1">
                        <input
                        className="form-check-input"
                        type="radio"
                        id="single"
                        value="single"
                        name="size"
                        onChange={this.props.handleChange}  
                        required                
                        />
                        <label className="form-check-label" htmlFor="single">
                        Single
                        </label>                    
                    </div>
                    <div className="form-check my-1">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="size"
                        id="double"
                        value="double"
                        onChange={this.props.handleChange}
                        required
                        />
                        <label className="form-check-label" htmlFor="double">
                        Double
                        </label>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class Type extends Component {
    render() {
        const handleChange=this.props.handleChange
        // console.log(this.props)
        return(            
        <div>
            <div className={this.props.param.typeVal===false ? 'row py-1 border border-danger rounded-lg': 'row py-1' }>
                <div className="col-3">
                    <label className="mb-0">Type</label>
                </div>

                <div className="col"> 
                    <div className="form-check my-1">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="normal"
                            value="normal"
                            name="type"
                            onChange={handleChange}
                            onClick={() => (this.showDrawers = false)}
                            />
                        <label className="form-check-label" htmlFor="normal">
                        Normal
                        </label>
                    </div>
                    
                    <div className="form-check my-1">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="ottoman"
                        value="ottoman"
                        onChange={handleChange}
                        onClick={() => (this.showDrawers = false)}
                        />
                        <label className="form-check-label" htmlFor="ottoman">
                        Ottoman
                        </label>
                    </div>

                    <div className="form-check my-1">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="storage"
                        value="storage"
                        onChange={handleChange}
                        onClick={() => (this.showDrawers = true)}
                        />
                        <label className="form-check-label" htmlFor="storage">
                        Storage bed with drawers
                        </label>
                    </div>

                    <div>
                        {this.showDrawers && (
                        <DrawersQty handleChange={handleChange}/>
                        )}
                    </div>

                </div>
            </div> 
        </div>  
        )
    }
}

class DrawersQty extends Component {
    render() {        
      return (
        <div className="form-group form-row">
          <label className="mr-3 my-auto" htmlFor="drawers">
            Quantity of the drawers:
          </label>
          <select
            id="drawers"
            name="drawers"
            className="form-control col-3"
            onChange={this.props.handleChange}            
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      );
    }
  }