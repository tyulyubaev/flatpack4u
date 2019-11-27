import React from "react";
import { CheckData} from "../DataValidation";
import Contacts from './Contacts';
import ProductTable from './ProductTable';

const encode = (data) => {
  const message = Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
  console.log(message)
  // return 
}

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.contact = {};
    this.state.products = [
      {
        id: (Date.now() + Math.floor(Math.random() * 999999)).toString(36),
        link: "",
        qty: ""
      }
    ];

    this.dataUpdate = this.dataUpdate.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRowDel = this.handleRowDel.bind(this);
    this.handleProductTable = this.handleProductTable.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ItemsToString = this.ItemsToString.bind(this);
  }

  ItemsToString=()=>{
    const  link = this.state.products.map(product => `Link: ${product.link} Qty: ${product.qty}`).join("\r\n")
    this.state.contact.link = link    
  }


  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state.contact})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    // e.preventDefault();
  };

  dataUpdate() {
    this.setState(this.state.contact);
    console.log(this.state)
  }
  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }
  handleAddEvent() {    
    let product = {
      id: "",
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
        if (key === item.name && product.id === item.id) {
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
        <div className="row">
          <div
            id="modal"
            className="col-10 mx-auto col-md-10 col-lg-10 text-center"
          >
            <div className="p-4"  >
              <h2 className="p-3">Get a Quote</h2>
              <ProductTable
                onProductTableUpdate={this.handleProductTable}
                onRowAdd={this.handleAddEvent}
                onRowDel={this.handleRowDel}
                products={this.state.products}
                filtertext={this.state.filtertext}
              />
              <h4 className="pt-5 pb-3">Contact details</h4>
              <Contacts />
              <div className="col-4 mx-auto pt-5">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                  onClick={() => {
                    this.state.contact = {
                      client: document.getElementById("inputName").value,
                      email: document.getElementById("inputEmail").value,
                      phone: document.getElementById("inputPhone").value,
                      date: document.getElementById("inputDate").value,
                      postcode: document.getElementById("inputPostcode").value,
                      note: document.getElementById("inputNote").value
                    };
                    CheckData(this.state.contact);
                    this.ItemsToString()
                    this.dataUpdate()                    
                    this.handleSubmit();
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
