import React, { Component } from "react";
import AddToOrder from "./addToOrder";
import ButtonGetPrice from './ButtonGetPrice'
const { Content } = require("../Content");

export default class TVWallMounting extends Component {
  constructor() {
    super();
    this.state = {
        tvsize:"",
        wall:"",
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
    if (this.state.tvsize ==""){this.setState({tvsizeVal: false})}else{this.setState({tvsizeVal: true})};
    if (this.state.wall ==""){this.setState({wallVal: false})}else{this.setState({wallVal: true})};
    if (this.state.tvsize!=="" && this.state.wall!==""){this.calculations()}
  };
  calculations = () => {
    const tvPrices = Content.TVPrices
    const { tvsize, wall} = this.state;
    let totalCost=0;

    const priceCalculation=(price)=> {
        const size=price.size
        const cost = price.price
        if (totalCost==0 && tvsize<size){
            totalCost=cost;
            }
    }
    const mapping=tvPrices.map(priceCalculation)
    
    if (wall=="Plasterboard"){totalCost+=15}
    totalCost +=  + 0.99;

    const itemName = "TV Mounting";
    this.setState({ price: totalCost, item: itemName });
    this.showPrice = true;    
  };

  render() {
    return (
      <div className="container">
        <div className="form-row justify-content-center">
          <div className="col-md-6 px-0">
              <TVMounting handleChange={this.handleChange} data={this.state}/>     
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

class TVMounting extends Component {
  render() {
    const handleChange=this.props.handleChange
    const label = "col-6 my-auto"
    const inputSize = this.props.data.tvsizeVal==false ? 'form-control col border border-danger rounded-lg' : 'form-control col'  
    const inputWall = this.props.data.wallVal==false ? 'form-control col border border-danger rounded-lg' : 'form-control col'  
    return (
      <div>
        <h4 className="font-weight-light pt-5 pb-3" id="tvmounting">
          TV wall mounting
        </h4>

        <div className="row mb-3">
            <label className={label} htmlFor="tvsize">TV screen sizes in inches</label>
            <input
              type="number"
              min="0"
              className={inputSize}              
              name="tvsize"            
              onChange={handleChange}
              placeholder="inches"
            />
        </div>

        <div className="row mb-5">
            <label htmlFor="" className={label}>Type of the wall</label>
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

