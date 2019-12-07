import React, { Component } from "react";
import Wardrobe from './wardrobe'

export default class Prices extends Component {
  showWardrobe=true  

  addItem = (item) =>{    
    this.props.addItem(item)
  }
  showType = () => {     
    this.showWardrobe=true
  }

  render() {        
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Prices
        </h2>
        <hr className="mt-2 mb-4" />
        <div className="row">
          <div className="col">
            <a href="#" className="btn btn-secondary btn-lg active text-capitalize col p-3" role="button" aria-pressed="true" onClick={this.showType}>Wardrobe</a>            
          </div>
          <div className="col">
            <a href="#" className="btn btn-secondary btn-lg active text-capitalize col p-3" role="button" aria-pressed="true">Chest of drawers</a>
          </div>
          <div className="col">
            <a href="#" className="btn btn-secondary btn-lg active text-capitalize col p-3" role="button" aria-pressed="true">Bed</a>
          </div>
          <div className="col">
            <a href="#" className="btn btn-secondary btn-lg active text-capitalize col p-3" role="button" aria-pressed="true">Other</a>
          </div>

        </div>
        <div  id="wardrobe" style={{ display: "block" }}>
          {this.showWardrobe && <Wardrobe addItem={this.addItem}/>}
          
        </div>
                  
      </div>
      
    );
  }
}
