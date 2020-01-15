import React, { Component } from "react";

export default class Company extends Component {
  render() {     
      const par = {...this.props.content}           
      const pos=this.props.pos+1;
      const company = par.company
      const link = par.link
      const minCharge = "£" + par.minCharge
      const hourlyRate  ="£" + par.hourlyRate

    return (
      <div>
        <div className="row text-center my-3">
          <div className="col-2">{pos}</div>
          <div className="col-4 "><a href={link} target="_blank">{company}</a></div>
          <div className="col-3">{minCharge}</div>
          <div className="col-3">{hourlyRate}</div>
        </div>
      </div>
    );
  }
}
