import React, { Component } from 'react'
import ListReviews from './listReviews'
import LeaveReview from './leaveReview'
import ReviewButtons from './reviewButtons'

export default class Reviews extends Component {
    
    render() {
        return (
            <div>
                <ReviewButtons/>
                <ListReviews/>
                <LeaveReview/>
            </div>
        )
    }
}
