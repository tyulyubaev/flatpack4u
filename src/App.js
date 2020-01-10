import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import encode from "./components/encode";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Main from "./components/home/Main";
import Footer from "./components/Footer";
import Prices from "./components/prices/Prices";
import About from "./components/About";
import Reviews from "./components/reviews/reviews";
import Quote from "./components/quote/Quote";
import Gallery from "./components/gallery/gallery";
import productToString from "./components/productToString";
import { MessagePostcode, Message } from "./components/Messages";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: false,
      alert: false
    };

    this.state.items = [];
    this.state.products = [];
    this.state.windowHeight = window.innerHeight;
    this.state.contacts = {
      name: "",
      email: "",
      phone: "",
      postcode: "",
      date: "",
      link: "",
      parking: "No",
      carry: "No",
      note: "",
      submit: false
    };

    this.addItem = this.addItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.updateContactsDetails = this.updateContactsDetails.bind(this);
    this.handleContactsChange = this.handleContactsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alert = this.alert.bind(this);
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
  }
  toggleMessage = value => {
    this.setState({ message: value });
  };

  alert = param => {
    this.setState({ alert: param });
  };
  addItem = item => {
    this.state.items.push(item);
    this.setState(this.state.items);
    this.addProduct(item);
  };
  addProduct = product => {
    const productId = Object.keys(this.state.products).length + 1;
    const productToAdd = {
      id: productId,
      link: productToString(product),
      qty: 1
    };
    this.state.products.push(productToAdd);
    this.setState(this.state.products);
  };

  handleContactsChange = e => {
    this.updateContactsDetails(e.target.name, e.target.value);
  };

  updateContactsDetails = (name, value) => {
    this.setState(prevState => ({
      contacts: {
        ...prevState.contacts,
        [name]: value
      }
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.submit == true) {
      this.handleSubmit();
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateScreenSize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }
  updateScreenSize() {
    const height = window.innerHeight;
    this.setState({ windowHeight: height });
  }
  handleSubmit = () => {    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...this.state.contacts
      })
    })
      .then(() => {})
      .catch(error => alert(error));
  };

  render() {
    return (
      <div
        className="d-flex flex-column "
        style={{ minHeight: this.state.windowHeight }}
      >
        <BrowserRouter>
          {this.state.alert && <MessagePostcode />}
          
          <Header
            updateContactsDetails={this.updateContactsDetails}
            alert={this.alert}
          />
          <Switch>
            <Route exact path={"/"} render={props => <Main {...props} />} />
            <Route
              path="/prices"
              render={props => <Prices {...props} addItem={this.addItem} />}
            />
            <Route
              path="/gallery"
              render={props => <Gallery {...props} component={Gallery} />}
            />
            <Route
              path="/quote"
              render={props => (
                <Quote
                  {...props}
                  data={this.state}
                  addContacts={this.addContacts}
                  handleContactsChange={this.handleContactsChange}
                  updateContactsDetails={this.updateContactsDetails}
                  handleSubmit={this.handleSubmit}
                  alert={this.alert}
                />
              )}
            />
            <Route path="/reviews" render={props => <Reviews {...props} />} />
            <Route path="/about" render={props => <About {...props} />} />
            {/* <Route path="/" component={Main}/>       */}
          </Switch>
          <Footer position={this.state.footerPosition} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
