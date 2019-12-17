import React, { Component } from 'react'

export default class ButtonGetPrice extends Component {
    render() {
        return (
            <div>
                <div className="row my-5">
                    <button            
                        className="btn btn-secondary mx-auto px-5"
                        onClick={this.props.verification}
                    >
                        Get the Price
                    </button>
                </div>      
            </div>
        )
    }
}
