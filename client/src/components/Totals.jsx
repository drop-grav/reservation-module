import React from 'react'
import styled from 'styled-components'
import FadedLine from './fadedLine.jsx'

const TotalsOutside = styled.div`
width: 100%;
height: 300px;
display:flex;
flex-direction: column;
`;
TotalsOutside.displayName = "TotalsOutside"

const Container = styled.div`
padding-top: 20px;
height: 40px;
display: flex;
flex-direction: row;
justify-content: space-between;
font-weight: ${props=> props.primary? "bold" : "normal"}
`

const ContainerWords = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: ${props=> props.primary? "bold" : "normal"}
`;

const ContainerNum = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: ${props=> props.primary? "bold" : "normal"}
`
function Totals (props) {
  if (props.state.startDate === null || props.state.endDate === null) {
    return null
  }
  const daysInBetween = ((new Date(props.state.endDate.year, props.state.endDate.month, props.state.endDate.day).getTime())-(new Date(props.state.startDate.year, props.state.startDate.month, props.state.startDate.day).getTime()))/(1000 * 60 * 60 * 24) + 1

  const totalNightsDays = props.state.cost * daysInBetween

  const total= totalNightsDays + props.state.cleaningFee + props.state.occupancyFee + props.state.serviceFee
  return (
    <TotalsOutside>
      <Container>
        <ContainerWords>${props.state.cost} x {daysInBetween} nights</ContainerWords>
        <ContainerNum>${totalNightsDays}</ContainerNum>
      </Container>
      <FadedLine></FadedLine>
      <Container>
        <ContainerWords>Cleaning Fee</ContainerWords>
        <ContainerNum>${props.state.cleaningFee}</ContainerNum>
      </Container>
      <FadedLine></FadedLine>
      <Container>
        <ContainerWords>Service Fee</ContainerWords>
        <ContainerNum>${props.state.serviceFee}</ContainerNum>
      </Container>
      <FadedLine></FadedLine>
      <Container>
        <ContainerWords>Occupancy taxes and fees</ContainerWords>
        <ContainerNum>${props.state.occupancyFee}</ContainerNum>
      </Container>
      <FadedLine></FadedLine>
      <Container>
        <ContainerWords primary>Total</ContainerWords>
        <ContainerNum primary>${total}</ContainerNum>
      </Container>
    </TotalsOutside>
  )
}

export default Totals