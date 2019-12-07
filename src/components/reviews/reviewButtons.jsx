import React, { Component } from "react";

export default class reviewButtons extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Request Details</h2>
        <hr className="mt-2 mb-4"/>
        <div className="d-flex justify-content-center">
            <div className="p-4">
                <button className="btn btn-primary text-capitalize" onClick={()=>{document.getElementById("leaveReview").scrollIntoView()}}>Leave a review here</button>
            </div>
            <div className="p-4">                
                <a className="btn btn-primary text-capitalize" href="https://search.google.com/local/writereview?placeid=ChIJxSlk7mICdkgRseQpkfJRxRg" role="button" target="_blank">Review us on Google</a>
            </div>
        </div>
      </div>
    );
  }
}