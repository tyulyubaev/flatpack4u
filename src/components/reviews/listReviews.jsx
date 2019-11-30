import React, { Component } from "react";
import Review from "./review";
const { Content } = require("../Content");

export default class ListReviews extends Component {
  render() {
    const conReviews = Content.Reviews;    
    const listReivews = conReviews.map((review, index) => <Review value={review} key={index}/>);
    return (
        <div>{listReivews}</div>
    )
  }
}
