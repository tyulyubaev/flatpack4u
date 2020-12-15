import React, { Component } from "react";
import {Stars} from '../reviews/stars'; 
import {Content} from '../Content';
const imgQuotation = require("../../assets/images/quotation.svg");

console.log(Content.Reviews[1].name);
class reviewesCarousel extends Component {
  
  
    render() {         
        return(          
  <div className="container p-0">
    <div className="bg-secondary text-center mt-5 pt-5">
    <img
                className="m-3"
                src={imgQuotation}
                width="100"
                height="100"
              /> 
    <br/> 
  </div>
    
   
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>  
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>   
  </ol>
  <div className="carousel-inner bg-secondary text-light">

  <div className="carousel-item active" data-interval="15000">
      <div className="text-center m-4 px-4" >  
      <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
        <p>    
        "{Content.Reviews[0].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[0].name}, {Content.Reviews[0].location}</h5>
        <br/>
      </div> 
    </div>

  <div className="carousel-item" data-interval="15000">
      <div className="text-center m-4 px-4" >  
      <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
      <p>    
        "{Content.Reviews[1].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[1].name}, {Content.Reviews[1].location}</h5>
        <br/>
      </div> 
    </div>
  
    <div className="carousel-item" data-interval="15000">       
      <div className="text-center m-4 px-4" >  
      <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
      <p>    
        "{Content.Reviews[2].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[2].name}, {Content.Reviews[2].location}</h5>
        <br/>
      </div>    
    </div>
    <div className="carousel-item" data-interval="15000">
    <div className="text-center m-4 px-4" >  
    <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
      <p>    
        "{Content.Reviews[3].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[3].name}, {Content.Reviews[3].location}</h5>
        <br/>
      </div>       
    </div>
    <div className="carousel-item" data-interval="15000">
      <div className="text-center m-4 px-4" >  
      <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
      <p>    
        "{Content.Reviews[4].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[4].name}, {Content.Reviews[4].location}</h5>
        <br/>
      </div> 
    </div>
    <div className="carousel-item" data-interval="15000">
      <div className="text-center m-4 px-4" >  
      <div className="d-inline-flex mb-3">
        <Stars qty={5}/>
      </div>
      <p>    
        "{Content.Reviews[5].content}"
        </p>
        <br/>
        <h5>{Content.Reviews[5].name}, {Content.Reviews[5].location}</h5>
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

