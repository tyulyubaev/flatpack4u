import React, { Component } from 'react';

class featuretteRight extends Component {
    render() { 
        return (
            <div className="row featurette">
                <div className="col-md-8 order-md-2">
                    <h2 className="featurette-heading">{this.props.content.heading}<span className="text-muted">{this.props.content.muted}</span></h2>
                    <p className="lead">{this.props.content.lead}</p>
                </div>
                <div className="col-md-4 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="300" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>
        );
    }
} 
export default featuretteRight;