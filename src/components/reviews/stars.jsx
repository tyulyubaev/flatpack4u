import React, { Component } from "react";

function Stars(qty) {
  const Quantity = qty.qty;
  let rows = [];
  for (let i = 1; i <= Quantity; i++) {
    rows.push(<Star key={i} />);
  }
  return rows;
}

class Star extends Component {
  render() {
    return (
      <div>
        <svg height="24" width="24">
          <g transform="translate(0 -1028.4)">
            <path
              d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z"
              fill="#f1c40f"
              stroke="#f39c12"
              strokeWidth=".69755"
              transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)"
            />
          </g>
        </svg>
      </div>
    );
  }
}

class StarForRating extends Component {
  render() {
    let color = "white";
    if (this.props.rating == true) {
      color = "#f1c40f";
    } else {
      color = "white";
    }
    return (
      <div>
        <svg height="24" width="24">
          <g transform="translate(0 -1028.4)">
            <path
              d="m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z"
              fill={color}
              stroke="#f39c12"
              strokeWidth=".69755"
              transform="matrix(1.4336 0 0 1.4336 -1.7602 1028.9)"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export { Star, Stars, StarForRating };
