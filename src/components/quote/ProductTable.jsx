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
        <div>
          {product}
          <button
            type="button"
            onClick={() => {
              this.props.onRowAdd();            
            }}
            className="btn pull-right btn-outline-secondary"
          >
            Add More Items
          </button>
        </div>
      );
    }
  }

  export default ProductTable;