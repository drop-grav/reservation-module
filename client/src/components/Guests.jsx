import React from 'react'
import styled from 'styled-components'
import GuestsModal from './GuestsModal.jsx'

const GuestsWord = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #505050;
  padding-bottom: 3px;
`;

const GuestsBox = styled.div`
  height: 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-color: #DCDCDC;
  border-style: solid;
  border-width: 1px;
  display: flex;
  align-items: flex-end;
`;

const GuestsButton = styled.button`
  height: 100%;
  width: 100%;
  background: white;
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 20px;
  &:hover {
    cursor: pointer;
  };
`;

const GuestsWords = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 17px;
  color: #404040;
`;

const ArrowDown = styled.i`
  border: solid black;
  height: 5px;
  width: 5px;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  align-self: flex-start;
`;

const ArrowUp = styled.i`
  border: solid black;
  height: 5px;
  width: 5px;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

class Guests extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
    this.showGuestsModal = this.showGuestsModal.bind(this)
  }

  showGuestsModal(boolean) {
    const newBool = boolean === true ? false : true;
      this.setState({
        show: newBool
      })
  }

  renderArrow() {
    return this.state.show === false ? <ArrowDown/> : <ArrowUp/>
  }

  render () {
    const numGuests = this.props.state.adultsChosen + this.props.state.childrenChosen
    const word = numGuests === 1 ? "guest ": "guests ";
    const infantWord = this.props.state.infantsChosen === 0 ? "" :
      this.props.state.infantsChosen === 1 ? `, ${this.props.state.infantsChosen} infant` : `, ${this.props.state.infantsChosen} infants`
    return (
      <div>
        <GuestsWord>Guests</GuestsWord>
        <GuestsBox onClick = {() => this.showGuestsModal(this.state.show)}>
          <GuestsButton>
            <GuestsWords>
              {numGuests} {word} {infantWord}
            </GuestsWords>
            {this.renderArrow()}
          </GuestsButton>
        </GuestsBox>
        <GuestsModal show = {this.state.show} showGuestsModal = {this.showGuestsModal} state = {this.props.state}
        onAdd = {this.props.onAdd} onSub = {this.props.onSub}
        ></GuestsModal>
      </div>
    )
  }
}

export default Guests