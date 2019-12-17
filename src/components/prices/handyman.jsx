import React, { Component } from "react";
import TVWallMounting from "./TVWallMounting";
import BlindsInstallation from "./BlindsInstallation";
import Hanging from "./Hanging";
import {
  TVImage,
  CurtainsImage,
  PictureImage
} from "../../assets/icons/FurnitureIcons";

const { Content } = require("../Content");

export default class handyman extends Component {
  display = (par) => {
    this.showTVMounting = par;    
    this.showBlinds = par;
    this.showHanging = par;
  };

  showType = type => {    
    this.display(false);
    switch (type) {
      case "TVMounting":        
        this.showTVMounting = true;
        break;
      case "Blinds":
        this.showBlinds = true;
        break;
      case "Hanging":
        this.showHanging = true;
        break;
    }
  };

  render() {
    return (
      <div className="container" id="handyman">
        <div className="row pt-lg-5 pt-2">
          <div className="col-lg-4 p-1">
            <a      
              href="#tvmounting"        
              className="btn btn-handy text-capitalize col"    
              role="button"
              aria-pressed="true"          
              onClick={() => this.showType("TVMounting")}      
              onMouseEnter={() => {            
                document.getElementById("TVImage").style.fill = "#AFD275";            
              }}
              onMouseLeave={() => {
                document.getElementById("TVImage").style.fill = "white";            
              }}        
            >
              <div className="row">
                <div className="col-4">
                  <TVImage />
                </div>
                <div className="col d-flex align-items-center text-left">
                  TV Wall Mounting
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-lg-4 p-1">
            <a
              href="#curtains"
              className="btn btn-handy text-capitalize col"
              role="button"
              aria-pressed="true"
              onClick={() => this.showType("Blinds")}
              onMouseEnter={() => {            
                document.getElementById("CurtainsImage").style.fill = "#AFD275";            
              }}
              onMouseLeave={() => {
                document.getElementById("CurtainsImage").style.fill = "white";            
              }}        
            >
              <div className="row">
                <div className="col-4">
                  <CurtainsImage />
                </div>
                <div className="col d-flex align-items-center text-left">
                  Curtains and blinds installation
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 p-1">
            <a
              href="#hanging"
              className="btn btn-handy text-capitalize col"
              role="button"
              aria-pressed="true"
              onClick={() => this.showType("Hanging")}
              onMouseEnter={() => {            
                document.getElementById("PictureImage").style.fill = "#AFD275";            
              }}
              onMouseLeave={() => {
                document.getElementById("PictureImage").style.fill = "white";            
              }}  
            >
              <div className="row">
                <div className="col-4">
                  <PictureImage />
                </div>
                <div className="col d-flex align-items-center text-left">                  
                    Shelves, Pictures and Mirrors Hanging                  
                </div>
              </div>
            </a>
          </div>
        </div>

        {this.showTVMounting && <TVWallMounting addItem={this.props.addItem} />}
        {this.showBlinds && <BlindsInstallation addItem={this.props.addItem} />}
        {this.showHanging && <Hanging addItem={this.props.addItem} />}
      </div>
    );
  }
}
