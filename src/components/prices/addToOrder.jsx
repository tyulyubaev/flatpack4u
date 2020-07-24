import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class addToOrder extends Component {
  render() {
    return (
      <div id="priceAlert">
        <div className="row alert alert-success">
          <div className="col-sm-8 d-sm-flex text-center ">
            <button
              className="btn btn-success mx-sm-3 py-1"
              onClick={() => {
                this.props.addItem(this.props.content);
              }}
            >
              Add to Order
            </button>
          </div>
          <div className="col-sm text-center text-sm-right pt-4 pt-sm-0">
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.history.push("/quote");
              }}
            >
              View Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(addToOrder);
