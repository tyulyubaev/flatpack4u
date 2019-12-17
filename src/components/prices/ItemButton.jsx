import React, { Component } from "react";

export default class ItemButton extends Component {
  render() {
    const element = this.props.value;
    const name = element.name;
    const picture = element.picture;
    const title = element.title
    const id = element.id
    const color = element.color
    const ItemPicture = element.svg;

    return (  
       <div className="col-sm-6 col-md-3 p-2 mx-5 mx-sm-0">
         <a
          href={"#" + name}
          id = {id}
          className="btn btn-info text-capitalize col"
          role="button"
          aria-pressed="true"
          onClick={() => this.props.showType(name)}
          onMouseEnter={() => {            
            document.getElementById(picture).style.fill = "#FFB48F";            
          }}
          onMouseLeave={() => {
            document.getElementById(picture).style.fill = "white";            
          }}
        >
          <ItemPicture />
          <p className="mt-auto text-capitalize">{title}</p>
        </a>         
      </div>
        
             
    );
  }
}
