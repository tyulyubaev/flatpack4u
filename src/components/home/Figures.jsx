import React, { Component } from "react";
// import './styles/figures.css'

class figures extends Component {
  state = {};
  render() {
    return (     
        <div className="row mx-auto mb-5">
          
          <div className="col-lg-4 pt-3">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round" style={{ backgroundColor: "#0057a3", color: "white" }}>
                    <h1 className="textInCircle">{this.props.content.figure1.number}</h1>
                </div>
            </div>  
            <div className="text-center">
              <h4>{this.props.content.figure1.head}</h4>
              <p>{this.props.content.figure1.text}</p>
            </div> 
          </div>

          <div className="col-lg-4 pt-5">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round "style={{ backgroundColor: "#0057a3", color: "white" }}>
                    <h1 className="textInCircle">{this.props.content.figure2.number}</h1>
                </div>
            </div>     
            <div className="text-center">
              <h4>{this.props.content.figure2.head}</h4>
              <p>
                {this.props.content.figure2.text}
              </p>
            </div>       

          </div>

          <div className="col-lg-4 pt-5">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round "style={{ backgroundColor: "#0057a3", color: "white" }}>
                    <h1 className="textInCircle">{this.props.content.figure3.number}</h1>
                </div>
            </div>            
            <div className="text-center">
              <h4>{this.props.content.figure3.head}</h4>
              <p>
                {this.props.content.figure3.text}
              </p>
            </div>

          </div>                  
        </div>
    );
  }
}

export default figures;
