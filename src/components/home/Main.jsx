import React, { Component } from 'react';
import Carousel from './Carousel';
import Figures from './Figures';
import FeaturetteLeft from './FeaturetteLeft';
import FeaturetteRight from './FeaturetteRight';

const {Content} = require('../Content');

class main extends Component {   

    render() {   
        const img1 = require("../../assets/images/zurich.jpg");   
        const img2 = require("../../assets/images/quality.svg");   
        const img3 = require("../../assets/images/fees.svg");             
        return (                  
            <main role="main">                       
                <Carousel content={Content.Carousel}/>
                <div className="container marketing p-4 mx-auto">
                    <Figures content={Content.Figures} />
                    <hr className="featurette-divider my-5"></hr>
                    {/* <FeaturetteLeft img={img1} content={Content.Featurette[0]} />
                    <hr className="featurette-divider my-5"></hr>
                    <FeaturetteRight img={img2} content={Content.Featurette[1]} />
                    <hr className="featurette-divider my-5"></hr>
                    <FeaturetteLeft img={img3} content={Content.Featurette[2]} />              */}
                        
                </div> 
                
                
          </main>
        );
    }
}
 
export default main;