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
          qty: "",
        },
      ];
    }
  }

  ItemsToString = () => {
    const link = this.state.products
      .map((product) => `${product.link} - qty: ${product.qty}`)
      .join("\r\n");

    const updateData = () => {
      return new Promise((resolve) => {
        this.props.updateContactsDetails("link", link);
        this.props.updateContactsDetails("submit", true);
        resolve();
      });
    };
    const submit = () => {
      this.props.handleSubmit();
    };

    async function addAsync() {
      await updateData();
      submit();
    }
    addAsync();
  };

  handleRowDel(product) {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }
  handleAddEvent() {
    const lastPosition = this.state.products.length - 1;
    let newId = "";
    if (lastPosition === -1) {
      newId = 1;
    } else {
      newId = this.state.products[lastPosition].id + 1;
    }
    let product = {
      id: newId,
      link: "",
      qty: "",
    };
    this.state.products.push(product);
    this.setState(this.state.products);
  }
  handleProductTable(evt) {
    let item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    let products = this.state.products;
    let newProducts = products.map((product) => {
      for (let key in product) {
        if (key === item.name && product.id === Number(item.id)) {
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
        

        <div
          className="alert mx-auto mt-3 pt-2 pb-0"
          style={{ backgroundColor: "#7FB800" }}
        >
          <p className="text-center text-light px-2 pb-0">
            {/* <b> Great news! We cover your area.</b> <br /> */}
            Great news! We cover your area.
          </p>
          {/* <h2 className="text-center" >Just from £35</h2> */}
        </div>
        {/* <p className="text-dark text-center">Please provide us your task details below. More info means more accurate price estimates</p> */}

        <div class="alert alert-info container pb-0" role="alert">
          <div className="row">
            <div className="col-4 text-center p-0">
              <p>
                <b>Our prices:</b>
              </p>
            </div>
            <div className="col-8 p-0 pl-1">
              <div
                className="carousel slide"
                data-interval="4000"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p>Beds - from £35</p>
                  </div>
                  <div className="carousel-item">
                    <p>Wardrobes - from £45</p>
                  </div>
                  <div className="carousel-item">
                    <p>Chests of drawers - from £15</p>
                  </div>
                  <div className="carousel-item">
                    <p>Bookcases - from £25</p>
                  </div>
                  <div className="carousel-item">
                    <p>TV units - from £40</p>
                  </div>
                  <div className="carousel-item">
                    <p>Desks - from £15</p>
                  </div>
                  <div className="carousel-item">
                    <p>Dining sets - from £45</p>
                  </div>
                  <div className="carousel-item">
                    <p>Storage units- from £25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Request information
        </h2>
        <hr className="mt-1 mb-2" />

        <div className="row">
          <div
            id="modal"
            className="col-10 mx-auto col-md-10 col-lg-10 text-center px-0"
          >
            <div className="">
              {/* <h4 className="p-3 font-weight-light">Items</h4> */}
              {/* <ProductTable
                onProductTableUpdate={this.handleProductTable}
                onRowAdd={this.handleAddEvent}
                onRowDel={this.handleRowDel}
                products={this.state.products}
                filtertext={this.state.filtertext}
              /> */}
              {/* <h4 className="pt-5 pb-3 font-weight-light">
                Contact information
              </h4> */}
              <Contacts
                data={this.props.data}
                handleContactsChange={this.props.handleContactsChange}
                messageVisibility={this.props.messageVisibility}
              />
              <div className="mx-auto pt-3 mb-5">
                <button
                  type="submit"
                  className="btn btn-secondary px-5"
                  onClick={() => {
                    if (CheckData(this.props.data.contacts) !== false) {
                      this.ItemsToString();
                    }
                  }}
                >
                  Send
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
