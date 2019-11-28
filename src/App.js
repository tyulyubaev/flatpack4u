import React, { Component } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Prices from "./components/Prices";
import Quote from "./components/quote/Quote";

class App extends Component {
  constructor(props){
    super(props);    
  } 
  render() {    
    return (
      <BrowserRouter>
        <Header dataUpdate={this.dataUpdate}/>
        <Switch>
          <Route 
            exact 
            path={"/"} 
            render = {props => (
              <Main {...props} />
            )}/>
          <Route path="/prices" component={Prices} />
          <Route path="/quote" component={Quote} />    
          <Route path="/" component={Main}/>      
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;

