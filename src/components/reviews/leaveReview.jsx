import React, { Component } from "react";
import { StarInactive } from "./stars";
import StarRating from "./starRating";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class leaveReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: 0,
      review: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "review", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    // e.preventDefault();
  };

  handleRating = rating => {
    this.setState({ rating });
  };
  render() {
    const { name, review } = this.state;
    const checkRating = () => {
      document.getElementById("ratingBorder").style.border = "";
      if (this.state.rating == 0) {
        document.getElementById("ratingBorder").style.border =
          "medium solid red";
      } else {
          this.handleSubmit()
      }
    };
    return (
      <div className="container" id="leaveReview">
          <div className="row justify-content-md-center text-center">
          <div className="col-6 pt-5 pb-3">
            <h3>Leave a Review</h3>
          </div>
          </div>
          
          
        <div className="row justify-content-md-center ">        
          <div className="col-md-6">              
            <div>
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Please enter your name"
              />
            </div>
            <div className="mt-4 pt-1" id="ratingBorder">
              <h5>Rating</h5>
              <StarRating handleRating={this.handleRating} />
            </div>
            <div>
              <h5>Review</h5>
              <textarea
                className="form-control"
                name="review"
                value={review}
                placeholder="Please share details of your own experience"
                id="exampleFormControlTextarea1"
                rows="4"
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="py-4 mx-auto col-5">
              <button
                className="btn btn-primary btn-block"
                onClick={() => checkRating()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
