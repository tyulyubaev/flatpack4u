import React, { Component } from "react";
// import './styles/figures.css'

class figures extends Component {
  state = {};
  render() {
    return (     
        <div className="row mx-auto mt-4">
          <div className="col-lg-4 m-4">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round color-red">
                    <h1 className="textInCircle">{this.props.content.figure1.number}</h1>
                </div>
            </div>  
            <div className="text-center">
              <h3>{this.props.content.figure1.head}</h3>
              <p>{this.props.content.figure1.text}</p>
            </div>          

          </div>

          <div className="col-lg-4 m-4">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round color-yellow">
                    <h1 className="textInCircle">{this.props.content.figure2.number}</h1>
                </div>
            </div>     
            <div className="text-center">
              <h3>{this.props.content.figure2.head}</h3>
              <p>
                {this.props.content.figure2.text}
              </p>
            </div>       

          </div>

          <div className="col-lg-4 m-4">    
            <div className="d-flex justify-content-center">
                <div className="rounded-circle round color-purpur">
                    <h1 className="textInCircle">{this.props.content.figure3.number}</h1>
                </div>
            </div>            
            <div className="text-center">
              <h3>{this.props.content.figure3.head}</h3>
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
