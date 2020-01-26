import React, { Component} from "react";
import Company from "./company";

export default class CompareRates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCharge: "",
      buttomCharge: "",
      sortRate: "",
      buttomRate: ""
    };

    this.sortCharge = this.sortCharge.bind(this);
    this.sortRate = this.sortRate.bind(this);
    this.sort = this.sort.bind(this);
  }

  sortCharge = () => {
    const e = this.state;
    if (e.sortCharge === "min") {
      this.setState({ sortCharge: "max", buttomCharge: "dropup" });
      this.sort(content, "minCharge", "min");
    } else if (e.sortCharge === "max") {
      this.setState({ sortCharge: "min", buttomCharge: "" });
      this.sort(content, "minCharge", "max");
    } else {
      this.setState({ sortCharge: "min" });
      this.sort(content, "minCharge", "max");
    }
  };

  sortRate = () => {
    const e = this.state;
    if (e.sortRate === "min") {
      this.setState({ sortRate: "max", buttomRate: "dropup" });
      this.sort(content, "hourlyRate", "min");
    } else if (e.sortRate === "max") {
      this.setState({ sortRate: "min", buttomRate: "" });
      this.sort(content, "hourlyRate", "max");
    } else {
      this.setState({ sortRate: "min" });
      this.sort(content, "hourlyRate", "max");
    }
  };

  sort = (array, param, direction) => {
    const compare = (a, b) => {
      const chargeA = a[param];
      const chargeB = b[param];
      let comparison = 0;
      if (direction === "min") {
        if (chargeA > chargeB) {
          comparison = 1;
        } else if (chargeA < chargeB) {
          comparison = -1;
        }
        return comparison;
      } else if (direction === "max") {
        if (chargeA > chargeB) {
          comparison = -1;
        } else if (chargeA < chargeB) {
          comparison = 1;
        }
        return comparison;
      }
    };
    array.sort(compare);
  };

  render() {
    return (
      <div className="container mb-5">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">
          Compare Rates
        </h2>
        <hr className="mt-2 mb-4" />
        <h4 className="font-weight-light text-center my-5">
          Top 20 independant professional Furniture Assembly Services in London:
        </h4>
        <div className="row text-center">
          <div className="col-2 p-0 my-auto">Pos</div>
          <div className="col-4 p-0 my-auto">Companies</div>
          <div className="col-3 p-0 my-auto">
            <div className={this.state.buttomCharge}>
              <button
                type="button"
                className="btn dropdown-toggle  p-0 m-0 my-auto"
                datatoggle="dropdown"
                ariahaspopup="true"
                ariaexpanded="false"
                onClick={() => this.sortCharge()}
              >Minimum&nbsp;
              <br className="d-sm-none"/>
                Charge
              </button>
            </div>
          </div>
          <div className="col-3 p-0 my-auto">
            <div className={this.state.buttomRate}>
              <button
                type="button"
                className="btn dropdown-toggle  p-0 m-0 my-auto"
                datatoggle="dropdown"
                ariahaspopup="true"
                ariaexpanded="false"
                onClick={() => this.sortRate()}
              >Hourly&nbsp;
              <br className="d-sm-none"/>
                Rate
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-2 mb-4" />
        <ListCompanies />
      </div>
    );
  }
}

class ListCompanies extends Component {
  render() {
    const list = content.map((content, index) => (
      <Company content={content} key={index} pos={index} />
    ));
    return <div>{list}</div>;
  }
}

const content = [
  
  {
    company: "HandymanUK",
    minCharge: 45,
    hourlyRate: 20,
    link: "https://www.handymanuk.online/"
  },
  {
    company: "Silversaints",
    minCharge: 96,
    hourlyRate: 60,
    link: "www.silversaints.com"
  },
  {
    company: "Fantastic Services",
    minCharge: 55,
    hourlyRate: 22.5,
    link: "https://www.fantasticservices.com/furniture-assemblers/"
  },
  {
    company: "Flat Pack Assembly",
    minCharge: 60,
    hourlyRate: 40,
    link: "http://www.flatpackassembly.org.uk/"
  },
  {
    company: "Flat Pack Mates",
    minCharge: 55,
    hourlyRate: 22.5,
    link: "https://flatpackmates.co.uk/"
  },
  {
    company: "Simple Assembly",
    minCharge: 76,
    hourlyRate: 38,
    link: "https://www.simpleassembly.co.uk/"
  },
  {
    company: "PP Flat Pack",
    minCharge: 40,
    hourlyRate: 25,
    link: "http://www.ppflatpack.co.uk/"
  },
  {
    company: "Assemble My Flatpack",
    minCharge: 60,
    hourlyRate: 30,
    link: "http://assemblemyflatpack.co.uk/"
  },
  {
    company: "Flatpack4U",
    minCharge: 35,
    hourlyRate: 25,
    link: "https://www.flatpack4u.co.uk/"
  },
  {
    company: "Unflatpack",
    minCharge: 50,
    hourlyRate: 25,
    link: "https://www.unflatpack.com/"
  },
  {
    company: "Flatpack London",
    minCharge: 40,
    hourlyRate: 25,
    link: "http://www.flatpacklondon.co.uk/"
  }
  ,
  {
    company: "Furniture Assembly Services",
    minCharge: 43,
    hourlyRate: 32,
    link: "https://www.furniture-assembly.org.uk/"
  }
  ,
  {
    company: "The Handy Squad",
    minCharge: 78,
    hourlyRate: 54,
    link: "https://www.handysquad.com/"
  }
  ,
  {
    company: "Fast Assemblers",
    minCharge: 76,
    hourlyRate: 38,
    link: "https://fastassemblers.co.uk/"
  }
  ,
  {
    company: "Screwdriver ",
    minCharge: 52,
    hourlyRate: 44,
    link: "https://www.screwdriver-flatpack.co.uk/"
  }
  ,
  {
    company: "We build your flatpacks",
    minCharge: 40,
    hourlyRate: 30,
    link: "https://webuildyourflatpacks.co.uk/"
  }
  ,
  {
    company: "Flat pack Installation Titan",
    minCharge: 60,
    hourlyRate: 20,
    link: "https://www.fit-flatpacklondon.co.uk/"
  }
  ,
  {
    company: "Just Flat Pack",
    minCharge: 50,
    hourlyRate: "-",
    link: "https://www.justflatpack.co.uk/"
  }
  ,
  {
    company: "The Flatpack Construction Company",
    minCharge: 60,
    hourlyRate: 30,
    link: "http://www.flatpackconstruction.co.uk/"
  }
  ,
  {
    company: "From Flat 2 Clap",
    minCharge: 39,
    hourlyRate: 25,
    link: "http://www.fromflat2clap.co.uk/"
  }
];
