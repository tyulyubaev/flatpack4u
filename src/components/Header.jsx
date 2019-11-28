import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CheckPostcode } from "./DataValidation";
import logo from "../logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(postcode) {
    const valid = CheckPostcode(postcode);
    if (valid === "none") {
      redBorder();
    } else if (valid === false) {
      redBorder();
      Message("show");
    } else {
      greenBorder();
      Message("hide");
      this.props.history.push('/quote')
      
    }
  }

  render() {
    return (      
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#84CEEB" }}
        >
          <div className="container ">          
            <a className="navbar-brand" href="/">
              <img
                src={logo}
                className="mr-auto"
                alt="..."
                width="50"
                height="50"
              />
              FlatPack4U
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mr-auto my-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/quote">
                    Quote <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="prices">
                    Prices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="reviews">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="galary">
                    Galary
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>            
            <form className="form-inline mx-auto">
              <input
                className="form-control mr-sm-1 mx-auto w-50"
                type="text"
                placeholder="Enter Postcode"
                id="inputPostcode"
                aria-label="My Postcode"
              />
              <a
                href="#"
                className="btn btn-success my-2 my-sm-0 mx-auto"
                role="button"
                aria-pressed="true"
                onClick={() => {
                  const postcode = document.getElementById("inputPostcode")
                    .value;
                  this.routeChange(postcode);
                }}
              >
                Get a FREE quote
              </a>
            </form>
          </div>
        </nav>        
        <div
          className="alert alert-danger text-center font-weight-bold"
          role="alert"
          id="message"
          style={{ display: "none" }}
        >
          We are very sorry! Unfortunatly we do not cover your area at the
          moment!
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

const Message = message => {
  const x = document.getElementById("message");
  if (message === "show") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const redBorder = () => {
  document.getElementById("inputPostcode").style.border = "medium solid #dc3545";
};

const greenBorder = () => {
  document.getElementById("inputPostcode").style.border = "medium solid #28a745";
};
