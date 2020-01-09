import React, { Component } from "react";

export default class About extends Component {
  render() {
    const image = require("../assets/images/ya.jpg");
    const { Content } = require("./Content");
    const aboutUs = Content.aboutUs;
    console.log(aboutUs);
    return (
      <div className="container">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          About Us
        </h2>
        <hr className="mt-2 mb-4" />

        <div className="row">
          <div className="col-3">
            <img className="img-thumbnail rounded" src={image} alt="" />
          </div>
          <div className="col">
            <p className="lead">
              My name is Michael and I'm furniture assembly specialist with
              over 5 years of experience that's why I provide high quality
              service at an affordable price and in a short time to achieve your
              satisfaction. I can montage everything that comes flat packed and
              has an instruction.
            </p>

            <p className="lead font-weight-normal">Why you should choose FlatPack4U:</p>
            <ul className="">
              <li className="lead">fully insured;</li>
              <li className="lead">don’t have any call out charges;</li>
              
              <li className="lead">
                keep you informed in advance about specific time of visit so you
                don’t need to wait all day;
              </li>
              <li className="lead">
                guarantee that flat pack assembly meets the build instructions;
              </li>
              <li className="lead">
                have all the needed tools and spare parts so would be able to
                assemble and repair any of your furniture.
              </li>
              <li className="lead">
                can assist you to move your new furniture within the room
                without any additional cost;
              </li>
            </ul>
            <p className="lead">
              I specialise in flat pack assembly, disassembly and repair of:
            </p>
            <ul>
              <li className="lead">
                <span className="font-weight-normal">home furniture:</span> beds, wardrobes, sideboards, dining tables,
                chest of drawers, bedside tables, book shelves, cabinets, coffee
                tables etc;
              </li>
              <li className="lead"><span className="font-weight-normal">office furniture:</span> desks, chairs, shelves, tables;
</li>
              <li className="lead"><span className="font-weight-normal">garden sheds:</span> all different sizes from metal and wooden materials;
</li>
              <li className="lead"><span className="font-weight-normal">fitness equipment:</span> treadmills, stairmasters, exercise bikes, elliptical trainers, rowing machines, multi-gyms, smith machines;</li>
              <li className="lead"><span className="font-weight-normal">playground equipment:</span> climbing frames, swings, ladders, slides, trampolines;
</li>
              <li className="lead"><span className="font-weight-normal">garden furniture:</span> dining sets, sofa sets, benches, tables, swing seats;
</li>
              
            </ul>
            <p className="lead">I can assemble flat pack from all the popular retailers in the UK and worldwide: <span className="font-weight-normal">
  Argos, Asda, B&Q, Bensons for Beds, Dwell, Furniture 123, Habitat, Harveys, Heals, Homebase, Ikea, John Lewis, Mamas & Papas, Peter Jones, The Range, Tesco.</span>
</p>
<p className="lead">I'm ready to build your flat pack items at any day and time during the week, <span className="font-weight-normal">work from 8am till 10pm from Monday to Sunday</span> and happy to offer same day service as well.
</p>
          </div>
        </div>
      </div>
    );
  }
}
