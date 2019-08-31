import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  width: 500px;
  z-index:1;
  background: white;
  border: 1px solid #D3D3D3;
  border-top: 2px solid #1c828c;
  border-radius: 4px;
  box-shadow: 0px 4px 15px 1px #C8C8C8;
  visibility: visible;
  position: absolute;
  width: 328px;
  height: 300px;
  margin: 0px 0px 16px;
  padding: 16px 16px;
  display:flex;
  flex-direction: column;
`;

const FunctionalComp = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const TextBox = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

const TextBig = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding-top: 18px;
`;


const TextSmall = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
`;

const ButtonsBox = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
border-radius: 100%;
border: 1px solid #1c828c;
width: 40px;
height: 40px;
background: white;
font-size: 17px;
color: #1c828c;
`;

const Number = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 15px;
font-weight: bold;
padding: 15px;
`;

const CloseButtonWrapper = styled.div`
display:flex;
justify-content: flex-end;
margin: 15px;
padding: 15px;
`;

const CloseButton = styled.button`
  width:16px;
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 15px;
  font-weight: bold;
  border: none;
  color: #1c828c;
  background: white;
  text-align: right;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;


function GuestsModal (props) {
  if (props.show === false) {
    return null;
  }
  return (
    <Modal>
      <FunctionalComp>
        <TextBox>
          <TextWrapper>
            <TextBig>
              Adults
            </TextBig>
          </TextWrapper>
          <TextWrapper>
            <TextBig>
              Children
            </TextBig>
            <TextSmall>
              Ages 2-12
            </TextSmall>
          </TextWrapper>
          <TextWrapper>
            <TextBig>
              Infants
            </TextBig>
            <TextSmall>
              Under 2
            </TextSmall>
          </TextWrapper>
        </TextBox>
        <ButtonsBox>
          <ButtonsWrapper>
            <Button onClick = {() =>props.onSub("adultsChosen")}>-</Button>
            <Number>{props.state.adultsChosen}</Number>
            <Button onClick = {() =>props.onAdd("adultsChosen")}>+</Button>
          </ButtonsWrapper>
          <ButtonsWrapper>
            <Button onClick = {() =>props.onSub("childrenChosen")}>-</Button>
            <Number>{props.state.childrenChosen}</Number>
            <Button onClick = {() =>props.onAdd("childrenChosen")}>+</Button>
          </ButtonsWrapper>
          <ButtonsWrapper>
            <Button onClick = {() =>props.onSub("infantsChosen")}>-</Button>
            <Number>{props.state.infantsChosen}</Number>
            <Button onClick = {() =>props.onAdd("infantsChosen")}>+</Button>
          </ButtonsWrapper>
        </ButtonsBox>
      </FunctionalComp>
      <TextSmall>
        {props.state.guestsAllowed} Guests maximum. infants don't count toward the number of guests.
      </TextSmall>
      <CloseButtonWrapper>
        <CloseButton onClick = {() => props.showGuestsModal(props.show)}>
          Close
        </CloseButton>
      </CloseButtonWrapper>
    </Modal>
  )
}

export default GuestsModal