import React from "react";
import { CheckPostcode } from "../DataValidation";
import { phoneValidation } from "../DataValidation";
import { emailValidation } from "../DataValidation";

export default class Contacts extends React.Component {
  render() {
    const postcodeValidation = () => {
      const valid = CheckPostcode(
        this.props.data.contacts.postcode,
        "postcodeValue"
      );
      if (valid === false) {
        this.props.messageVisibility("alert", true);
        window.scrollTo(0, 0);
      } else {
        this.props.messageVisibility("alert", false);
      }
    };

    return (
      <div className="col-lg-6 mx-auto text-left mt-3">
        

        {/* Name */}
        {/* <div className="form-group row">
          <label className="col-sm-4 col-form-label ">Name:</label>
          <input
            type="text"
            className="form-control col"
            id="inputName"
            placeholder="Your name"
            name="name"
            onChange={this.props.handleContactsChange}
          />
        </div> */}
        {/* <div className="form-group row">
          <label className="col-sm-4 col-form-label">Postcode:<span style={{color:"red"}}>*</span></label>
          <input
            type="text"
            className="form-control col"
            id="postcodeValue"
            placeholder="Your postcode"
            defaultValue={this.props.data.contacts.postcode}
            name="postcode"
            onChange={this.props.handleContactsChange}
            onBlur={postcodeValidation}            
          />
        </div> */}

        {/* Phone */}
        {/* <div className="form-group row">
          <label className="col-sm-4 col-form-label">Phone:<span style={{color:"red"}}>*</span></label>
          <input
            type="text"
            className="form-control col"
            id="inputPhone"
            placeholder="Contact phone number"
            name="phone"
            onChange={this.props.handleContactsChange}
          />
        </div> */}

        {/*Date of visit
         <div className="form-group row">
          <label className="col-sm-3 col-form-label">Date of visit:</label>
          <input
            type="text"
            className="form-control col"
            id="inputDate"
            placeholder="Prefered date of visit"
            name="date"
            onChange={this.props.handleContactsChange}
          />
        </div> */}

        {/* Parking */}
        {/* <div className="form-group row">
          <label className="col-sm-8 col-form-label" htmlFor="parking">
            Parking space available:
          </label>
          <select
            className="form-control col"
            id="parking"
            name="parking"
            onChange={this.props.handleContactsChange}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
          
          <label
            className="col-sm-8 alert alert-success py-0"
            htmlFor="parking"
          >
            (Save up to £5 an hour)
          </label>
        </div> */}

        {/* Carry items */}
        {/* <div className="form-group row">
          <label className="col-sm-8 col-form-label" htmlFor="carry">
            Need to carry items upstairs
          </label>
          <select
            className="form-control col"
            id="carry"
            name="carry"
            onChange={this.props.handleContactsChange}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
          <label className="col-sm-8 alert alert-success py-0" htmlFor="carry">
            (Save up to £20)
          </label>
        </div> */}

        <div className="form-group row mb-0">
          {/* <label className="col-sm-4 col-form-label">
            Details:<span style={{ color: "red" }}>*</span>
          </label> */}
          <textarea
            placeholder="Please provide us your task details here (more info means more accurate price estimates)"
            className="form-control col"
            id="inputNote"
            rows="4"
            name="note"
            onChange={this.props.handleContactsChange}
          ></textarea>
        </div>
        {/* <div classname="form-group row"style={{ fontSize: "0.8rem" }}>
          <p className="">
            More info means more accurate price estimates
          </p>
        </div> */}

        {/* Name */}
        <div className="form-group row mt-4">
          <input
            type="text"
            className="form-control col"
            id="inputName"
            placeholder="Your name"
            name="name"
            onChange={this.props.handleContactsChange}
          />
        </div>

        <div className="form-group row mb-3">
          {/* <label className="col-sm-4 col-form-label">
            Phone Number:<span style={{ color: "red" }}>*</span>
          </label> */}
          <input
            type="text"
            className="form-control col my-auto"
            id="inputPhone"
            placeholder="Phone number"
            name="phone"
            onChange={this.props.handleContactsChange}
            onBlur={phoneValidation(this.props.data.contacts)}
          />
         
          {/* <p className="text-muted px-2" style={{ fontSize: "0.7rem" }}>
         Please check your <b>Junk/Spam</b> folder just in case our price quote got delivered there. 
          </p> */}
        
        </div>
        <div className="form-group row mb-0">
          {/* <label className="col-sm-4 col-form-label">
            Phone Number:<span style={{ color: "red" }}>*</span>
          </label> */}
          <input
            type="text"
            className="form-control col my-auto"
            id="inputEmail"
            placeholder="Email address"
            name="email"
            onChange={this.props.handleContactsChange}
            onBlur={emailValidation(this.props.data.contacts)}
          />
         
          {/* <p className="text-muted px-2" style={{ fontSize: "0.7rem" }}>
         Please check your <b>Junk/Spam</b> folder just in case our price quote got delivered there. 
          </p> */}
        
        </div>
        
      </div>
    );
  }
}
