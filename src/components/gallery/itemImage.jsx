import React, { Component } from "react";

export default class image extends Component {
  render() {
    const number = this.props.number.slice(2);
    const Image = require(`../../assets/images/images/${number}`);
    return (
      
        <div className="col-12 col-md-7 p-2 ">
                <img className="img-thumbnail rounded mx-auto d-block" src={Image} alt=""/>                   
        </div>
     
    );
  }
}
