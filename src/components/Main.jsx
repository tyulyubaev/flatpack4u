import React, { Component } from 'react';
import Carousel from './Carousel';
import Figures from './Figures';
import FeaturetteLeft from './FeaturetteLeft';
import FeaturetteRight from './FeaturetteRight';

const {Content} = require('./Content');

class main extends Component {

    render() {                
        return (                  
            <main role="main">                       
                <Carousel content={Content.Carousel}/>
                <div className="container marketing p-4 mx-auto">
                    <Figures content={Content.Figures} />
                    <hr className="featurette-divider my-5"></hr>
                    <FeaturetteLeft content={Content.Featurette[0]} />
                    <hr className="featurette-divider my-5"></hr>
                    <FeaturetteRight content={Content.Featurette[1]} />
                    <hr className="featurette-divider my-5"></hr>
                    <FeaturetteLeft content={Content.Featurette[2]} />
                </div> 
          </main>
        );
    }
}
 
export default main;