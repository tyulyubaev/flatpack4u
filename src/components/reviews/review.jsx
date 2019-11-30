import React, { Component } from 'react';
import Stars from './stars'; 
import User from './user';


export default class review extends Component {
    render() {
        const review = this.props.value
        return (
            <div>
                <div className="col-lg-8 col-sm-12 mx-auto">
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="d-none p-4 d-md-flex justify-content-center ">
                            <User/>                            
                        </div>
                        <div className="col px-2 pr-lg-4 py-4 d-flex flex-column position-static">                            
                                <h3 className="mb-0 text-to text-capitalize">{review.name}</h3>
                            <div className="mb-1 text-muted">{review.date}</div>
                            <div className="d-inline-flex">
                                <Stars qty={review.stars}/>
                            </div>
                                                        
                            <p className="card-text mb-auto">{review.content}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
