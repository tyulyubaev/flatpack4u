import React, { Component } from "react";
import Wardrobe from "./wardrobe";
import Chest from "./chestOfDrawers";
import Bed from "./bed";
import Handyman from "./handyman";
import RowButtons from "./RowButtons"


export default class Prices extends Component {
  constructor() {
    super();    
    this.state = {};
    this.state.color="white"
    this.state.elements = {
      showWardrobe: false,
      showChest: false,
      showBed: false,
      showHandyman: false
    };

    this.Visibility = this.Visibility.bind(this);
    this.addItem = this.addItem.bind(this);
    this.showType = this.showType.bind(this);
  }

  Visibility = value => {
    const array = Object.keys(this.state.elements)    
    array.forEach(key=>(this.state.elements[key]=value))   
    this.setState(this.state.elements)       
  };

  addItem = item => {
    this.props.addItem(item);
  };

  showType = type => {
    this.Visibility(false);    
    switch (type) {
      case "wardrobe":
        this.state.elements.showWardrobe = true;
        this.setState(this.state.elements)  
        break;
      case "chest":        
        this.state.elements.showChest = true;
        this.setState(this.state.elements)  
        break;
      case "bed":        
        this.state.elements.showBed = true;
        this.setState(this.state.elements)  
        break;
      case "handyman":        
        this.state.elements.showHandyman = true;
        this.setState(this.state.elements)  
        break;
    }
  };

  render() {        
    return (
      <div className="container pb-5">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Price Calculator
        </h2>
        <hr className="mt-2 mb-4" />        
          <RowButtons showType={this.showType}/>         
        <div>
          {this.state.elements.showWardrobe && <Wardrobe addItem={this.addItem} />}
          {this.state.elements.showChest && <Chest addItem={this.addItem} />}
          {this.state.elements.showBed && <Bed addItem={this.addItem} />}
          {this.state.elements.showHandyman && <Handyman addItem={this.addItem} />}
        </div>
      </div>
    );
  }
}
