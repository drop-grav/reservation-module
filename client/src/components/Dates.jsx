import React from 'react'
import styled from 'styled-components'
import StartCalendar from './StartCalendar.jsx'
import EndCalendar from './EndCalendar.jsx'

const DatesWord = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #505050;
  padding-bottom: 3px;
`;
const DatesOuter = styled.div`
  padding-bottom: 13px;
  position: relative;
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
  align-items: baseline;
`;
const ArrowHolder = styled.div`
width: 20%
margin-left: 20px;
margin-right: 20px;
display: flex;
align-items: center;
justify-content: center;

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
  width: 60%;
  outline: 0;
  background: ${props => props.start || props.end ? "#80fff5":" white"}
  border: ${props => props.start  || props.end ? "1px solid #80fff5" : "none"}
  border-radius: 3px;
`;

const CalendarWords = styled.div`
font-family:Roboto,Helvetica Neue,sans-serif;
font-size: 17px;
color: #404040;
`;

class Dates extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      start: false,
      end: false,
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        start:false,
        end:false,
      })
    }
  }


  onShow (string) {
    if (string === "start") {
      if (this.state.end === true) {
        this.setState({
          end: false,
        })
      }
    }
    if (this.state.start === true) {
      this.setState({
        start: false,
      })
    }
    const bool = this.state[string]
    var obj = {}
    obj[string] = !bool
    this.setState(obj)
  }

  onSwitch(string) {
    if (string === "start") {
      var makeAsync =()=> {
        return Promise.resolve(
        )
      }
      makeAsync().then((result) => {
        document.getElementById("checkOutButton").click()
        document.getElementById("checkOutButton").focus()
      })
    } else if (this.props.state.startDate !== null && string === "end") {
      this.setState({
        start: false,
        end: false,
      })
    } else {
      this.setState({
        start:true,
        end: false,
      })
    }
  }
  checkInDate(date) {
    const zeroPad = (value, length) => {
      return `${value}`.padStart(length, '0');
    }
    if (this.props.state.startDate === null) {
      return <CalendarWords id = "checkIn">Check-in</CalendarWords>
    }
    return <CalendarWords id = "checkIn">
    {zeroPad(this.props.state.startDate.month, 2)}/{zeroPad(this.props.state.startDate.day, 2)}/{this.props.state.startDate.year}
    </CalendarWords>
  }

  checkOutDate(date) {
    const zeroPad = (value, length) => {
      return `${value}`.padStart(length, '0');
    }
    if (this.props.state.endDate === null) {
      return <CalendarWords id = "checkOut">Checkout</CalendarWords>
    }
    return <CalendarWords id = "checkOut">
    {zeroPad(this.props.state.endDate.month, 2)}/{zeroPad(this.props.state.endDate.day, 2)}/{this.props.state.endDate.year}
    </CalendarWords>
  }


  render () {
    return (
      <DatesOuter ref = {this.setWrapperRef}>
        <DatesWord>Dates</DatesWord>
        <StartCalendar show = {this.state.start} onShow = {this.onShow.bind(this)} state = {this.props.state} key = {"startCalendar"} onSelect = {this.props.onSelect} onClear = {this.props.onClear} onSwitch = {this.onSwitch.bind(this)}
        />
        <EndCalendar show = {this.state.end} onShow = {this.onShow.bind(this)} state = {this.props.state} key = {"endCalendar"} onSelect = {this.props.onSelect} onClear = {this.props.onClear} onSwitch = {this.onSwitch.bind(this)}
        />
        <DatesBox>
          <StyledCheck onClick = {()=> this.onShow("start")} start = {this.state.start}>
            {this.checkInDate()}
          </StyledCheck>
          <ArrowHolder>
            <ArrowRight></ArrowRight>
          </ArrowHolder>
          <StyledCheck  id = "checkOutButton" onClick = {()=> this.onShow("end")} end = {this.state.end}>
            {this.checkOutDate()}
          </StyledCheck>
        </DatesBox>
      </DatesOuter>
    )
  }
}

export default Dates