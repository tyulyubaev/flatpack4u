import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div
                className="sticky-top alert alert-danger text-center font-weight-bold mb-0"
                role="alert"
                id="message"
            >
                Looks like you have entered wrong postcode or we do not cover your area at the
                moment!
            </div>
        )
    }
}
