import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { CheckPostcode } from "./DataValidation";
import logo from "../logo.png";
import tracker from "./tracker";

class Header extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(postcode) {
    tracker(postcode);
    const id = "inputPostcode";
    const valid = CheckPostcode(postcode, id);
    if (valid === true) {
      this.props.messageVisibility("alert", false);
      this.props.updateContactsDetails("postcode", postcode);
      this.props.history.push("/quote");
    } else if (valid === false) {
      this.props.messageVisibility("alert", true);
    }
  }
  render() {
    return (
      <header className="">
        <nav
          className="navbar navbar-expand-lg navbar-light my-0 py-0"
          style={{ backgroundColor: "#b69674" }}
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="#"
              onClick={() => this.props.history.push("/")}
            >
              <img
                src={logo}
                className="mr-auto"
                alt="..."
                width="40"
                height="40"
              />
              FlatPack4U
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample07"
              aria-controls="navbarsExample07"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav ml-auto my-lg-0 text-center ">
                <li
                  className="nav-item my-auto mx-3"
                  data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link "
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className="nav-item my-auto"
                  data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/prices"
                  >
                    Prices
                  </NavLink>
                </li>
                {/* <li
                  className="nav-item my-auto"
                  // data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/rates"
                  >
                    Compare Rates
                  </NavLink>
                </li> */}
                <li
                  className="nav-item my-auto mx-3"
                  data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/reviews"
                  >
                    Reviews
                  </NavLink>
                </li>
                <li
                  className="nav-item my-auto mx-3"
                  data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li
                  className="nav-item my-auto mx-3"
                  data-toggle="collapse"
                  data-target="#navbarsExample07"
                >
                  <NavLink
                    exact
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/about"
                  >
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>            
          </div>
        </nav>
        {/* <div>
          <Version />
        </div>     */}
      </header>
    );
  }
}

export default withRouter(Header);
