import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {StarInactive, Star} from './stars';
 
export default class StarRating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 0
    };
  } 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.handleRating(nextValue)
  } 
  render() {
    const { rating } = this.state;    
    return (                
      <div style={{fontSize: 40}}>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}                
          onStarClick={this.onStarClick.bind(this)}
        />        
      </div>
    );
  }
}