import React from "react";

export default class Contacts extends React.Component {
  render() {
    return (
      <div className="col-lg-6 mx-auto text-left">
        <div className="form-group row">
          <label className="col-sm-3 col-form-label ">Name:</label>
          <input
            type="text"
            className="form-control col"
            id="inputName"
            placeholder="Name"
            name="name"
            onChange={this.props.handleContactsChange}
          />
        </div>

        <div className="form-group row ">
          <label className="col-sm-3 col-form-label">Email:</label>
          <input
            type="email"
            className="form-control col"
            id="inputEmail"
            placeholder="Email"
            name="email"
            onChange={this.props.handleContactsChange}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Phone:</label>
          <input
            type="number"
            className="form-control col"
            id="inputPhone"
            placeholder="Phone number"
            name="phone"
            onChange={this.props.handleContactsChange}
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Postcode:</label>
          <input
            type="text"
            className="form-control col"
            id="postcodeValue"
            placeholder="Postcode"
            defaultValue={this.props.data.contacts.postcode}
            name="postcode"
            onChange={this.props.handleContactsChange}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Date of visit</label>
          <input
            type="text"
            className="form-control col"
            id="inputDate"
            placeholder="Date of visit"
            name="date"
            onChange={this.props.handleContactsChange}
          />
        </div>
        {/* Parking */}
        <div className="form-group row">
          <label
            className="col-sm-8 col-form-label"
            htmlFor="parking"
          >
            Parking space available
            <br />
            (Save up to £5 an hour)
          </label>
          <select className="form-control col" id="parking" name="parking"
            onChange={this.props.handleContactsChange}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        {/* Carry items */}
        <div className="form-group row">
          <label
            className="col-sm-8 col-form-label"
            htmlFor="carry"
          >
            Need to carry items upstairs
            <br />
            (Save up to £20)
          </label>
          <select className="form-control col" id="carry" name="carry"
            onChange={this.props.handleContactsChange}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>        

        <div className="form-group row">
          {/* <label className="col-sm-4 col-form-label">Note:</label> */}
          <textarea
            placeholder="Additional information"
            className="form-control"
            id="inputNote"
            rows="3"
            name="note"
            onChange={this.props.handleContactsChange}
          ></textarea>
        </div>
      </div>
    );
  }
}
