import React from "react";

class ProductRow extends React.Component {
    render() {
      return (
        <div className="form-row" >
          <div className="form-group d-none d-sm-block col-2 col-md-1">
            <p className="form-control">{this.props.product.id}</p>
          </div>
          <div className="form-group col-8 col-sm-7 col-md-9"> 
            <input
              type="text"
              className="form-control"
              placeholder="Paste web page link here"
              name="link"
              id={this.props.product.id}
              value={this.props.product.link}
              onChange={this.props.onProductTableUpdate}                         
            //   onBlur={webValidation(this.props.product.id, this.props.product.link)}
            />
          </div>
          <div className="form-group col-4 col-sm-3 col-md-2">
            <div className="input-group">
              <input                
                type="number"
                min="1"
                className="form-control px-2"
                aria-label="Quantity"
                placeholder="Qty"
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