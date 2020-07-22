import React from "react";
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    render() {    
      let onProductTableUpdate = this.props.onProductTableUpdate;
      let rowDel = this.props.onRowDel;
      let product = this.props.products.map(product => {
        return (          
          <ProductRow
            onProductTableUpdate={onProductTableUpdate}
            product={product}
            onDelEvent={rowDel}
            key={product.id}
          />
        );
      });
      return (
        <div className="text-centre">
          {/* <div className="row" >
            <div className="col-1 mx-2">
              <p className="">ID</p>
            </div>
            <div className="col-8 mx-2 text-left">
              <p className="">Product</p>
            </div>
            <div className="col-2">
              <p className="">Quantity</p>
            </div>
          </div> */}
          {product}
          <div className="col-lg-6 mx-auto text-right">
           <button
            type="button"
            onClick={() => {
              this.props.onRowAdd();            
            }}
            className="btn btn-outline-secondary px-3 mb-4"
          >
            Add more
            </button>
          </div>
        </div>
      );
    }
  }

  export default ProductTable;