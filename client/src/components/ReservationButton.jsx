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
background-color:  #ff3333;
color: white;
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
font-weight: bold;
transition: box-shadow .3s;
&:focus {
  outline: 0;
};
&:hover {
  cursor: pointer;
}
&:active {
  background-color: #DC143C;
  outline: 0;
  box-shadow :  0 0 0 5px white, 0 0 0 6px #808080;
}
`;

StyledButton.displayName = "StyledButton"

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

ReservedReminder.displayName = 'ReservedReminder'

function ReservationButton (props) {
  return (
    <div>
      <StyledButton>Reserve</StyledButton>
      <ReservedReminder>You won't be charged yet</ReservedReminder>
    </div>
  )
}

export default ReservationButton