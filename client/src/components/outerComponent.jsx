import React from 'react'
import styled from 'styled-components'
import CostsAndReviews from './CostsAndReviews.jsx'
import FadedLine from './fadedLine.jsx'
import Reservations from './Reservations.jsx'
import ReservationButton from './ReservationButton.jsx'

const StyledOuter = styled.div`
  width:360px;
  height: 340px;
  border-style: solid;
  border-width: 1px;
  border-color: #DCDCDC;
  padding: 15px 24px;
  margin: 15px;
`;

function OuterComponent(props) {
  return (
    <StyledOuter>
      <CostsAndReviews state = {props.state}/>
      <FadedLine/>
      <Reservations state = {props.state}/>
      <ReservationButton/>
    </StyledOuter>
  )
}

export default OuterComponent