import React, { Component } from "react";

export default class ItemButton extends Component {
  constructor(){
    super()
    this.state={
      color:"white"
    }
  }
  render() {
    const element = this.props.value;
    const name = element.name;
    const picture = element.picture;
    const title = element.title;
    const id = element.id;    
    const ItemPicture = element.svg;

    return (
      <div className="col-sm-6 col-md-3 p-2 mx-5 mx-sm-0">
        <a
          href={"#" + name}
          id={id}
          className="btn btn-info text-capitalize col"
          role="button"
          aria-pressed="true"
          onClick={() => {           
            this.props.showType(name);                        
          }}
          onMouseDown={() => {  
            this.setState({color:"#FFB48F"})  
          }}
          onMouseOver={() => {
            this.setState({color:"#FFB48F"})  
          }}
          onMouseLeave={() => {
            this.setState({color:"white"})
          }}
        >
          <ItemPicture color={this.state.color}/>
          <p className="mt-auto text-capitalize">{title}</p>
        </a>
      </div>
    );
  }
}
