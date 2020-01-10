import React, { Component } from "react";

class featuretteRight extends Component {
  render() {
    const img = this.props.img;
    return (
      <div className="row featurette">
        <div className="col-sm-4 text-center">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-8 text-right">
          <h2 className="featurette-heading">{this.props.content.heading}</h2>
          <p className="lead">{this.props.content.lead}</p>
        </div>
        
      </div>
    );
  }
}
export default featuretteRight;
