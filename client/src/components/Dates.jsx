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

const ArrowRight = styled.div`
width: 4px;
height: 4px;
border: solid black;
border-width: 0 1px 1px 0;
display: inline-block;
padding: 3px;
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
align-self: center;
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
        <ArrowRight></ArrowRight>
        <StyledCheck>click me</StyledCheck>
      </DatesBox>
    </DatesOuter>
  )
}

export default Dates