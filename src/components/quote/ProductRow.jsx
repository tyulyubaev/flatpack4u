import React from "react";

class ProductRow extends React.Component {
    render() {
      return (
        <div className="col-lg-6 mx-auto text-left" >
          {/* <div className="form-group d-none d-sm-block col-2 col-md-1">
            <p className="form-control">{this.props.product.id}</p>
          </div> */}
          <div className="form-group row"> 
             <label className="col-sm-4 col-form-label ">Furniture items:</label>
            <input
              type="text"
              className="form-control col"
              placeholder="Item web link"
              name="link"
              id={this.props.product.id}
              value={this.props.product.link}
              onChange={this.props.onProductTableUpdate}                         
            //   onBlur={webValidation(this.props.product.id, this.props.product.link)}
            />
            <input                
                type="number"
                min="1"
                className="form-control col-2"
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
                  className="btn btn-outline-secondary "
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
      );
    }
  }

  export default ProductRow;