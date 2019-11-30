import React, { Component } from 'react'
import ListReviews from './listReviews'
import LeaveReview from './leaveReview'

export default class Reviews extends Component {
    render() {
        return (
            <div>
                {/* <ListReviews/> */}
                <LeaveReview/>
            </div>
        )
    }
}
