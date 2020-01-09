import React, { Component } from "react";
import ItemButton from "./ItemButton";
import {
  WardrobePicture,
  ChestPicture,
  BedPicture,
  DrillPicture
} from "../../assets/icons/FurnitureIcons";

export default class RowButtons extends Component {
  render() {
    const elements = [
      {
        name: "wardrobe",
        picture: "WardrobePicture",
        svg: WardrobePicture,
        title: "Wardrobe"
      },
      {
        name: "chest",
        picture: "ChestPicture",
        svg: ChestPicture,
        title: "Chest of drawers"
      },
      { name: "bed", picture: "BedPicture", svg: BedPicture, title: "Bed" },
      {
        name: "handyman",
        picture: "DrillPicture",
        svg: DrillPicture,
        title: "Mounting & Installation"
      }
    ];
    const listButtons = elements.map((element, index) => (
      <ItemButton showType={this.props.showType} value={element} key={index} />
    ));
    return <div className="row">{listButtons}</div>;
  }
}
