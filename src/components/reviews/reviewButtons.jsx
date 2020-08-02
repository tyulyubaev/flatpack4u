import React, { Component } from "react";

export default class reviewButtons extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Reviews</h2>
        <hr className="mt-2"/>
        <div className="d-flex justify-content-center flex-wrap my-3">
            <div className="m-1">
                <button className="btn btn-secondary " onClick={()=>{document.getElementById("leaveReview").scrollIntoView()}}>Leave a Review</button>
            </div>
            <div className="m-1">                
                <a className="btn btn-secondary " href="https://search.google.com/local/writereview?placeid=ChIJxSlk7mICdkgRseQpkfJRxRg" role="button" target="_blank" rel="noopener noreferrer">Review us on Google</a>
            </div>
        </div>
      </div>
    );
  }
}