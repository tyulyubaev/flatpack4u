import React, { Component } from "react";
import { StarForRating } from "./stars";

export class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.ratingValue = "";
    this.setRatingValue = this.setRatingValue.bind(this);
  }
  setRatingValue(r) {
    this.setState({ ratingValue: r });
    this.props.handleRating(r)
  }
  render() {
    const ratingValue = this.state.ratingValue;
    let rating = false;
    let qty = 5;
    let starsArray = [];
    for (let i = 1; i <= qty; i += 1) {
      if (i <= ratingValue) {
        rating = true;
      } else {
        rating = false;
      }
      // console.log(i, ratingValue, rating)
      starsArray.push(
        <StarOnClick
          key={i}
          index={i}
          rating={rating}
          setRatingValue={this.setRatingValue}
        />
      );
    }
    return (
      <div className="d-flex" id="starRating">
        {starsArray}
      </div>
    );
  }
}

class StarOnClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onStarClick = this.onStarClick.bind(this);
  }
  onStarClick() {
    this.props.setRatingValue(this.props.index);
  }
  render() {
    return (
      <a
        href="#starRating"
        onClick={() => {
          this.onStarClick();
        }}
      >
        <StarForRating rating={this.props.rating} />
      </a>
    );
  }
}
