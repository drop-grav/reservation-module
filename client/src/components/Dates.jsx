import React from 'react'
import styled from 'styled-components'

const DatesWord = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
font-weight: bold;
color: #505050;
padding-bottom: 3px;
`;
const DatesOuter = styled.div`
padding-bottom: 13px;
`;
const DatesBox = styled.div`
height: 22px;
width: 95.5%;
padding: 8px;
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-width: 1px;
display: flex;
`;

const Arrow = styled.div`
width: 15%;
height:24px;
`;

const StyledCheck = styled.button`
  width: 50%;
  background: white;
  border: none;
`;


function Dates (props) {
  return (
    <DatesOuter>
      <DatesWord>Dates</DatesWord>
      <DatesBox>
        <StyledCheck>click me</StyledCheck>
        <Arrow/>
        <StyledCheck>click me</StyledCheck>
      </DatesBox>
    </DatesOuter>
  )
}

export default Dates