import React, { Component } from "react";
const imgQuotation = require("../../assets/images/quotation.svg");

class reviewesCarousel extends Component {
    render() {
        return(
  <div className="container p-0">
    <div className="bg-secondary text-center mt-5">
    <img
                className="m-3"
                src={imgQuotation}
                width="100"
                height="100"
              /> 
    </div>
   
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner bg-secondary text-light">
  
    <div className="carousel-item active">       
      <div className="text-center m-4 px-4" >  
        <p>    
          "Michael was very professional, Personable, on time and super efficient. I never thought a wardrobe could be assembled that quickly! He offers multiple payment options which is super convenient. I strongly recommend his services."
        </p>
        <br/>
        <h5>Lase, Edgware</h5>
        <br/>
      </div>    
    </div>
    <div className="carousel-item">
    <div className="text-center m-4 px-4" >  
        <p>    
        "I would highly recommend Michael. He was very professional, timely and efficient. He assembled our furniture to a very high standard. He would be our first call if we need anything assembled."
        </p>
        <br/>
        <h5>Anna, Enfield</h5>
        <br/>
      </div>       
    </div>
    <div className="carousel-item">
    <div className="text-center m-4 px-4" >  
        <p>    
        "Michael was brilliant! He was punctual and very professional. He made assembling wardrobes look super easy! I’m very happy with the end products! Thanks Michael!"
        </p>
        <br/>
        <h5>Tasnia, Ilford</h5>
        <br/>
      </div> 
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
        )
    }
}
export default reviewesCarousel;