import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width:376px;
  height:21.8px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  `;

  const StyledReportButton = styled.button`
  height:20px;
  border: none;
  display:flex;
  background: white;
  &:hover {
    cursor: pointer;
  };
`;

const Flag = styled.img`
  width:15px;
  height:15px;
  padding-right: 5px;
`;

const StyledReportWords = styled.div`
  color: #686868;
  font-size:14px;
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-stretch: normal;
  &:hover {
    text-decoration: underline
  };
  display: inline-block;
`;

function ReportListing (props) {
  return (
    <StyledDiv>
      <StyledReportButton href="#">
        <Flag src="https://cdn.clipart.email/edf73ce7a4365cd5ca93f548690f2250_flag-outline-clip-art-at-clkercom-vector-clip-art-online-_546-597.png">
        </Flag>
        <StyledReportWords>Report this Listing</StyledReportWords>
      </StyledReportButton>
    </StyledDiv>
  )
}

export default ReportListing