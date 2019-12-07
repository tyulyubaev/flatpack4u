import React, { Component } from 'react'
import ItemImage from './itemImage'

export default class Gallery extends Component {
    render() {
        function importAll(r) {           
            return r.keys();
          }          
        const images = importAll(require.context('../../assets/images/images/', false, /\.(png|jpe?g|JPG|JPEG|svg)$/));        
        const items = images.map((image,index)=><ItemImage key={index} number={image}/>)
        
        return (
            <div>
                <div className="container">

                    <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Gallery</h2>

                    <hr className="mt-2 mb-4"/>

                    <div className="d-flex flex-wrap justify-content-center">
                        {items}                        
                    </div>

                </div>
            </div>
        )
    }
}
