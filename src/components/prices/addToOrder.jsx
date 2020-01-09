import React, { Component } from 'react'
import { withRouter} from "react-router-dom";

class addToOrder extends Component {
    render() {                
        return (
        <div id="priceAlert">        
            <div className="row alert alert-success">
                <div className="col-sm-8 d-sm-flex text-center ">
                    <h5 className="text-capitalize my-auto pb-2 pb-sm-0">Estimated price: £{this.props.content.price}</h5>
                    <button className="btn btn-success mx-sm-3 py-1" onClick={()=>{this.props.addItem(this.props.content)}}>Add to Order</button>    
                </div>                
                <div className="col-sm text-center text-sm-right pt-4 pt-sm-0">                  
                  <button className="btn btn-success" onClick={()=>{this.props.history.push('/quote')}}>View Order</button>  
                </div>
            </div>

            <div className="row alert alert-danger ">
                <div className="my-auto col-sm-9 ">
                    <p className="my-0">Not happy with the price? Just send us a link to the item and we quickly review it.</p>
                </div>
                <div className="col-sm-3 text-right">                    
                    <button className="btn btn-outline-dark" onClick={()=>{this.props.history.push('/quote')}}>Send Link</button> 
                </div>
            </div>   
        </div>
        )
    }
}

export default withRouter(addToOrder);