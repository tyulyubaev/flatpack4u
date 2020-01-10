import React, { Component } from "react";
import { Rating } from "./starRating";
import { message } from "../Messages";
import encode from "../encode";

export default class leaveReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameVal: true,
      rating: 0,
      ratingVal: true,
      review: "",
      reviewVal: true,
      message: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "review",
        name: this.state.name,
        rating: this.state.rating,
        review: this.state.review
      })
    })
      .then(this.setState({message: true}))
      .catch(error => alert(error));

    // e.preventDefault();
  };

  handleRating = rating => {
    this.setState({ rating });
  };

  formValidation = () => {
    if (this.state.name === "") {
      this.setState({ nameVal: false });
    } else {
      this.setState({ nameVal: true });
    }

    if (this.state.rating == 0) {
      this.setState({ ratingVal: false });
    } else {
      this.setState({ ratingVal: true });
    }

    if (this.state.review == "") {
      this.setState({ reviewVal: false });
    } else {
      this.setState({ reviewVal: true });
    }

    const data = Object.values(this.state);
    const validation = data.findIndex(param => param == false);
    console.log(validation);
    if (validation == 6) {
      this.handleSubmit();
    }
  };

  render() {
    const { name, review } = this.state;
    const content = "Thank you so much for your valuable feedback!";
    const val = this.state.message
    return (
      <div className="container" id="leaveReview">        
        {message(val, content)}
        <div className="row justify-content-md-center text-center">
          <div className="col-12 pt-5 pb-3">
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
                className={
                  this.state.nameVal
                    ? "form-control"
                    : "form-control border border-danger"
                }
                id="exampleFormControlInput1"
                placeholder="Please enter your name"
              />
            </div>
            <div
              className={
                this.state.ratingVal
                  ? "mt-4 py-1"
                  : "mt-4 py-1 border rounded border-danger "
              }
              id="ratingBorder"
            >
              <h5>Rating</h5>
              <Rating handleRating={this.handleRating} />
            </div>
            <div className="mt-4">
              <h5>Review</h5>
              <textarea
                className={
                  this.state.reviewVal
                    ? "form-control"
                    : "form-control border border-danger"
                }
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
                onClick={() => {                  
                  this.formValidation();
                }}
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
