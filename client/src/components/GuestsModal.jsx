import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  z-index:1;
  background: white;
  border: 1px solid #D3D3D3;
  border-top: 2px solid #00a699;
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
TextBig.displayName = 'TextBig'


const TextSmall = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
`;
TextSmall.displayName = 'TextSmall'

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
ButtonsWrapper.displayName = "ButtonsWrapper"


const GrayButton = styled.button`
  border-radius: 100%;
  border: 1px solid #008489;
  width: 40px;
  height: 40px;
  background: white;
  font-size: 17px;
  color: #008489;
  opacity: 0.2;
  &:focus {
    outline: 0;
  };
`;

const Button = styled(GrayButton)`
  opacity: 1.0;
  transition: box-shadow .5s;
  &:hover {
    cursor: pointer;
  };
  &:active {
    outline: 0;
    box-shadow :  0 0 0 5px white, 0 0 0 6px #808080;
  }
`;
Button.displayName = "Button"


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
    color: #008489;
    background: white;
    text-align: right;
    &:focus {
      outline: 0;
    };
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;
CloseButton.displayName = "CloseButton"

function GuestsModal (props) {
  if (props.show === false) {
    return null;
  }
  const changeButton = (name, type) => {
    if (name === "adultsChosen" || name === "childrenChosen") {
      //for adults and children changing the type
      //for subtraction for adults and children buttons
      if (type === "-") {
        if (name === "adultsChosen") {
          return props.state[name] === 1 ? <GrayButton id ={"adultsChosen-"}>{type}</GrayButton> : <Button id = {"adultsChosenminus"}onClick = {() =>props.onSub(name)} >{type}</Button>
        }
        return props.state[name] === 0 ? <GrayButton>{type}</GrayButton> : <Button  id = {`childrenChosenminus`} onClick = {() =>props.onSub(name)}>{type}</Button>
      }
      //for addition for adults and children buttons
      return  props.state.adultsChosen + props.state.childrenChosen === props.state.guestsAllowed ?
       <GrayButton id = {`${name}Grayadd`}>{type}</GrayButton> : <Button  id = {`${name}plus`} onClick = {() =>props.onAdd(name)}>{type}</Button>
    }
    //for the infants plus and minus
    if (type === "-") {
      return props.state[name] === 0 ? <GrayButton>{type}</GrayButton> : <Button id = "infantsChosenminus" onClick = {() =>props.onSub(name)}>{type}</Button>
    }
    return props.state[name] === props.state.guestsInfants ? <GrayButton>{type}</GrayButton> : <Button id = "infantsChosenplus" onClick = {() => props.onAdd(name)}>{type}</Button>
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
            {changeButton("adultsChosen", "-" )}
            <Number id ="adultsNumber">{props.state.adultsChosen}</Number>
            {changeButton("adultsChosen", "+" )}
          </ButtonsWrapper>
          <ButtonsWrapper>
            {changeButton("childrenChosen", "-" )}
            <Number id = {"childrensNumber"}>{props.state.childrenChosen}</Number>
            {changeButton("childrenChosen", "+" )}
          </ButtonsWrapper>
          <ButtonsWrapper>
            {changeButton("infantsChosen", "-" )}
            <Number id = {"infantsNumber"}>{props.state.infantsChosen}</Number>
            {changeButton("infantsChosen", "+" )}
          </ButtonsWrapper>
        </ButtonsBox>
      </FunctionalComp>
      <TextSmall id = "guestsMaximumInModal">
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