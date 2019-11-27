import React from "react";

export default class Contacts extends React.Component {
    render() {
      return (
        <form>
          <div className="col-lg-6 mx-auto text-center pt-1">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label text-right">Name:</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
            </div>
  
            <div className="form-group row">
              <label className="col-sm-4 col-form-label text-right">Email:</label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label text-right">Phone:</label>
              <div className="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="inputPhone"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label text-right">
                Date of visit:
              </label>
              <div className="col-sm-8">
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label text-right">Note:</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="inputNote" rows="3"></textarea>
              </div>
            </div>
          </div>
        </form>
      );
    }
  }


  