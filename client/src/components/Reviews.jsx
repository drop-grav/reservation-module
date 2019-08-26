import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
display: flex;
font-weight: bold;
color: #505050;
align-items: baseline;
padding-bottom: 20px;
`;

const Stars = styled.div`
padding-left: 5px;
display: flex;
`;
//for the stars that are full styling
const StarFull = styled.div`
max-width: 100%;
overflow: hidden;
color: green;
`;
// for the stars that are half styling
const StarHalf = styled.div`
max-width:19%;
overflow: hidden;
color: green;
`;

function Reviews (props) {
  //for calculating the stars full and half
  var starsFull = [];
  var starsHalf = [];
  var ratings = props.rating;
  while (ratings >= 1) {
    starsFull.push("★")
    ratings--
  }
  while (ratings >= 0) {
    starsHalf.push("★")
    ratings--
  }
  console.log(ratings, "this is ratings")
  return (
    <StyledDiv>
      <Stars>
        {starsFull.map(star => <StarFull>{star}</StarFull>)}
        {starsHalf.map(star => <StarHalf>{star}</StarHalf>)}
      </Stars>
     {props.ratingAmount}
    </StyledDiv>
  )
}


export default Reviews