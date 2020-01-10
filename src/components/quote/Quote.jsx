import React from "react";
import { CheckData } from "../DataValidation";
import Contacts from "./Contacts";
import ProductTable from "./ProductTable";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.products = [];        
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRowDel = this.handleRowDel.bind(this);
    this.handleProductTable = this.handleProductTable.bind(this);    
    this.ItemsToString = this.ItemsToString.bind(this);

    if (this.props.data.products.length !== 0) {
      this.state.products.unshift(...this.props.data.products);      
    } else {
      this.state.products = [
        {
          id: 1,
          link: "",
          qty: ""
        }
      ];
    }
  }
  
  ItemsToString = () => {
    const link = this.state.products    
      .map(product => `${product.link} - qty: ${product.qty}`)
      .join("\r\n");    
    this.props.updateContactsDetails("link", link)
    this.props.updateContactsDetails("submit", true)
  };  

  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }
  handleAddEvent() {
    const lastPosition = this.state.products.length - 1;
    let newId = "";
    if (lastPosition == -1) {
      newId = 1;
    } else {
      newId = this.state.products[lastPosition].id + 1;
    }
    let product = {
      id: newId,
      link: "",
      qty: ""
    };    
    this.state.products.push(product);
    this.setState(this.state.products);
  }
  handleProductTable(evt) {    
    let item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    }; 
    let products = this.state.products;
    let newProducts = products.map(product => {
      for (let key in product) {
        if (key === item.name && product.id == Number(item.id)) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  }
  

  render() {
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Request Details
        </h2>
        <hr className="mt-2 mb-4" />
        <div className="row">
          <div
            id="modal"
            className="col-10 mx-auto col-md-10 col-lg-10 text-center px-0"
          >
            <div className="">
              <h4 className="p-3 font-weight-light">Items</h4>
              <ProductTable
                onProductTableUpdate={this.handleProductTable}
                onRowAdd={this.handleAddEvent}
                onRowDel={this.handleRowDel}
                products={this.state.products}
                filtertext={this.state.filtertext}
              />
              <h4 className="pt-5 pb-3 font-weight-light">
                Contact information
              </h4>
              <Contacts data={this.props.data} handleContactsChange={this.props.handleContactsChange} alert={this.props.alert}/>
              <div className="mx-auto pt-3 mb-5">
                <button
                  type="submit"
                  className="btn btn-success px-5"
                  onClick={() => {   
                                                                    
                    if (CheckData(this.props.data.contacts) !== false) {   
                      this.ItemsToString();                      
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Quote;


