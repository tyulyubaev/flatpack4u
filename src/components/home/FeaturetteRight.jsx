import React, { Component } from "react";

class featuretteRight extends Component {
  render() {
    const img = this.props.img;
    return (
      <div className="row featurette">
        <div className="col-md-8 order-md-2 text-right">
          <h2 className="featurette-heading">{this.props.content.heading}</h2>
          <p className="lead">{this.props.content.lead}</p>
        </div>
        <div className="col-md-4 order-md-1">
          <img src={img} alt="" className="img-fluid" />
        </div>
      </div>
    );
  }
}
export default featuretteRight;
