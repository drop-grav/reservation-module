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
      adultsChosen: 1,
      childrenChosen: 0,
      infantsChosen: 0,
      daysChosen: null,
    }
    this.onAddGuest = this.onAddGuest.bind(this);
    this.onSubGuest = this.onSubGuest.bind(this);
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

  onAddGuest(string) {
    if (this.state.adultsChosen + this.state.childrenChosen === this.state.guestsAllowed) {
      return;
    } else if (string === "infantsChosen") {
      if (this.state.guestsInfants === this.state.infantsChosen) {
        return;
      }
    }
    var num = this.state[string]
    num++
    var object = {};
    object[string] = num;
    this.setState(object)
  }

  onSubGuest(string) {
    if (string === "adultsChosen") {
      if (this.state.adultsChosen === 1) {
        return;
      }
    } else if (string === "childrenChosen" || string === "infantsChosen") {
      if (this.state[string] === 0) {
        return;
      }
    }
    var num = this.state[string]
    num--
    var object = {};
    object[string] = num;
    this.setState(object)
  }

  render () {
    return (
      <div>
        <OuterComponent state = {this.state} onAdd = {this.onAddGuest.bind(this)} onSub = {this.onSubGuest.bind(this)}/>
        <ReportListing/>
      </div>
    )
  }
}

export default App