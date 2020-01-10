import React, { Component } from 'react';

class featuretteLeft extends Component {
    render() {
        const img = this.props.img
        return (            
            <div className="row featurette ">
                <div className="col-sm-8">
                    <h2 className="featurette-heading">{this.props.content.heading}</h2>
                    <p className="lead">{this.props.content.lead}</p>
                </div>
                <div className="col-sm-4 order-first order-sm-last  text-center">
                    <img src={img} alt="" className="img-fluid"/>
                </div>
            </div>
        );
    }
} 
export default featuretteLeft;