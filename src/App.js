import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Prices from "./components/prices/Prices";
import About from "./components/About";
import Reviews from "./components/reviews/reviews";
import Quote from "./components/quote/Quote";
import Gallery from "./components/gallery/gallery";
import productToString from "./components/productToString";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.items = [];
    this.state.products = [];
    this.state.contacts = {
      name:"",
      email:"",
      phone:"",
      postcode:"",
      date:"",
      link:"",
      parking:"No",
      carry:"No",
      note:""
    };

    this.addItem = this.addItem.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.updateContactsDetails = this.updateContactsDetails.bind(this);
    this.handleContactsChange = this.handleContactsChange.bind(this);   
  }
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
    this.updateContactsDetails(e.target.name, e.target.value) 
  };  

  updateContactsDetails = (name, value)=> {
    this.setState(prevState => ({
      contacts: {
        ...prevState.contacts,
        [name]: value
      }
    }));
    console.log(this.state.contacts)
  };

  render() {
    return (
      <BrowserRouter>
        <Header updateContactsDetails={this.updateContactsDetails} />
        <Switch>
          <Route exact path={"/"} render={props => <Main {...props} />} />
          <Route
            path="/prices"
            render={props => <Prices {...props} addItem={this.addItem} />}
          />
          <Route path="/gallery" component={Gallery} />
          <Route
            path="/quote"
            render={props => (
              <Quote
                {...props}
                data={this.state}
                addContacts={this.addContacts}
                handleContactsChange={this.handleContactsChange}
                updateContactsDetails={this.updateContactsDetails}
              />
            )}
          />
          <Route path="/reviews" component={Reviews} />
          <Route path="/about" component={About} />
          {/* <Route path="/" component={Main}/>       */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
