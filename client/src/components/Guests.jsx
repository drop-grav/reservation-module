import React from 'react'
import styled from 'styled-components'

const GuestsWord = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 12px;
font-weight: bold;
color: #505050;
padding-bottom: 3px;
`;

const GuestsBox = styled.div`
height: 22px;
width: 95.5%;
margin-left: auto;
margin-right: auto;
border-color: #DCDCDC;
border-style: solid;
border-width: 1px;
display: flex;
align-items: flex-end;
padding: 8px;
`;

const GuestsWords = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
color: #404040;
`;


function Guests (props) {
  const word = props.state.guestsChosen === 1 ? "guest": "guests";

  return (
    <div>
      <GuestsWord>Guests</GuestsWord>
      <GuestsBox>
        <GuestsWords>
          {props.state.guestsChosen} {word}
        </GuestsWords>
      </GuestsBox>
    </div>
  )
}

export default Guests