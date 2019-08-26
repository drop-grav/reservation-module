import React from 'react'
import Costs from './Costs.jsx'
import Reviews from './Reviews.jsx'


function CostsAndReviews (props) {
    return (
      <div>
        <Costs cost = {props.state.cost}/>
        <Reviews rating = {props.state.rating} ratingAmount = {props.state.ratingAmount}/>
      </div>
    )
  }

export default CostsAndReviews;