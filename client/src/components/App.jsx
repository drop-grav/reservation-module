import React from 'react'
import styled from 'styled-components'
import OuterComponent from './outerComponent.jsx'
import ReportListing from './ReportListing.jsx'
import $ from 'jquery'


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cost: null,
      rating: null,
      ratingAmount: null,
      guestsAllowed: null,
      guestsInfants: null,
      cleaningFee: null,
      serviceFee: null,
      occupancyFee: null,
      daysMinimum: null,
      guestsChosen: 1,
      guestsInfantsChosen: null,
      daysChosen: null,
    }
  }
  componentDidMount() {
    this.getListingdata()
  }

  getListingdata () {
    $.ajax({
      url: 'http://localhost:3000/api/listingData/1',
      success: (result) => {
        this.setState({
          cost: result.perNight,
          rating: result.Rating,
          ratingAmount: result.RatingAmount,
          guestsAllowed: result.guestsAllowed,
          guestsInfants: result.guestsInfants,
          cleaningFee: result.cleaningFee,
          serviceFee: result.serviceFee,
          occupancyFee: result.occupancyFee,
          daysMinimum: result.daysMinimum,
        })
      },
    });
  }

  render () {
    return (
      <div>
        <OuterComponent state = {this.state}/>
        <ReportListing/>
      </div>
    )
  }
}

export default App