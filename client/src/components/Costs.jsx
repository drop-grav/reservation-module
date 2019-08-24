import React from 'react'
import styled from 'styled-components'

const EnlargedDiv = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 22px;
font-weight: bold;
color: #383838;
padding-right: 3px;
`;
const notEnlargedDiv = styled.div`
`;

const StyledDiv = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
display: flex;
font-weight: bold;
color: #505050;
align-items: baseline;
padding: 10px 10px 5px 0px
`;

function Costs (props) {
  return (
    <StyledDiv>
      <EnlargedDiv>${props.cost}</EnlargedDiv>
      <notEnlargedDiv> per night</notEnlargedDiv>
    </StyledDiv>
  )
}


export default Costs