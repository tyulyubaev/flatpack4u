import React from "react";
import { webValidation } from "../DataValidation";

class ProductRow extends React.Component {
    render() {
      // console.log(this.props.product)
      return (
        <div className="form-row" >
          <div className="form-group col-sm-9"> 
            <input
              type="text"
              className="form-control"
              placeholder="Web link to the item (https://www...)"
              name="link"
              id={this.props.product.id}
              value={this.props.product.link}
              onChange={this.props.onProductTableUpdate}                         
            //   onBlur={webValidation(this.props.product.id, this.props.product.link)}
            />
          </div>
          <div className="form-group col-sm-3">
            <div className="input-group">
              <input                
                type="number"
                min="1"
                className="form-control"
                aria-label="Quantity"
                placeholder="Quantity"
                aria-describedby="button-addon2"
                name="qty"                
                id={this.props.product.id}
                value={this.props.product.qty}
                onChange={this.props.onProductTableUpdate}
                // onBlur={webValidation(this.props.product.id,"",this.props.product.qty)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    this.props.onDelEvent(this.props.product);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default ProductRow;