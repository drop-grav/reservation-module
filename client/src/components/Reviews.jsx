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
StyledDiv.displayName = 'StyledDiv'

const Stars = styled.div`
padding-left: 5px;
display: flex;
`;
Stars.displayName = `Stars`

//for the stars that are full styling
const StarFull = styled.div`
max-width: 100%;
overflow: hidden;
color: green;
`;
StarFull.displayName = `StarFull`
// for the stars that are half styling
const StarHalf = styled.div`
max-width:19%;
overflow: hidden;
color: green;
`;
StarHalf.displayName = `StarHalf`

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
  return (
    <StyledDiv>
      <Stars>
        {starsFull.map((star, i) => <StarFull key = {i}>{star}</StarFull>)}
        {starsHalf.map((star, i) => <StarHalf key = {i}>{star}</StarHalf>)}
      </Stars>
     {props.ratingAmount}
    </StyledDiv>
  )
}


export default Reviews