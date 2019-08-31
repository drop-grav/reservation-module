import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
padding-bottom: 5px;
width:100%;
height: 50px;
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-width: 1px;
border-radius: 5px;
color: white;
background-color:  #ff3333;
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
font-weight: bold;
&:hover {
  cursor: pointer;
}
`;

const ReservedReminder = styled.div`
padding-top: 15px;
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
font-weight: bold;
color: #686868;
margin-left: auto;
margin-right: auto;
width: 100%;
text-align: center;
`;


function ReservationButton (props) {
  return (
    <div>
      <StyledButton> Reserve </StyledButton>
      <ReservedReminder>You won't be charged yet</ReservedReminder>
    </div>
  )
}

export default ReservationButton