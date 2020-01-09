import React, { Component } from "react";
import { Rating } from "./starRating";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class leaveReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameVal: true,
      rating: 0,
      ratingVal: true,
      review: "",
      reviewVal: true
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
      body: encode({ "form-name": "review", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    // e.preventDefault();
  };

  handleRating = rating => {
    console.log(rating);
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
    const validation = data.findIndex(param=>param==false);
    if (validation==-1){
      this.handleSubmit()}
  };

  render() {
    const { name, review } = this.state;
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
                onClick={() => this.formValidation()}
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
