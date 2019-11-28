import React from "react";

export default class Contacts extends React.Component {
  render() {
    return (
      <div className="col-lg-6 mx-auto">
        <div className="form-group row">
          {/* <label className="col-sm-4 col-form-label">Name:</label> */}
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
          />
        </div>

        <div className="form-group row ">
          {/* <label className="col-sm-4 col-form-label">Email:</label> */}
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>

        <div className="form-group row">
          {/* <label className="col-sm-4 col-form-label">Phone:</label> */}
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            placeholder="Phone number"
          />
        </div>

        <div className="form-group row">
          {/* <label className="col-sm-4 col-form-label">
                Date of visit:
              </label> */}
          <input
            type="text"
            className="form-control"
            id="inputDate"
            placeholder="Date of visit"
          />
        </div>
        <div className="form-check m-3 text-left">
          <input
            className="form-check-input"
            type="checkbox"
            id="parkingCheck"
          />
          <label className="form-check-label" style={{ color: "#6c757d" }}>
            Parking space available
          </label>
          <br/>
          <label className="form-check-label" style={{ color: "#6c757d" }}>
            (Save up to £5 an hour)
          </label>
        </div>
        <div className="form-check m-3 text-left">
          <input
            className="form-check-input"
            type="checkbox"
            id="liftCheck"            
          />
          <label className="form-check-label" style={{ color: "#6c757d" }}>
            Don't need to carry items upstairs
          </label>
          <br/>
          <label className="form-check-label" style={{ color: "#6c757d" }}>
            (Save up to £20)
          </label>
        </div>
        <div className="form-group row">
          {/* <label className="col-sm-4 col-form-label">Note:</label> */}
          <textarea
            placeholder="Additional information"
            className="form-control"
            id="inputNote"
            rows="3"
          ></textarea>
        </div>
      </div>
    );
  }
}
