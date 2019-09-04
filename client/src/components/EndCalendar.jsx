import React from 'react'
import styled from 'styled-Components'

const Modal = styled.div`
  z-index:1;
  background: white;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 0px 4px 15px 1px #C8C8C8;
  visibility: visible;
  position: absolute;
  top: 70px;
  width: 328px;
  height: 400px;
  margin: 0px 0px 16px;
  padding: 16px 16px;
  display:flex;
  flex-direction: column;
`;

const ButtonWords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const DisplayWords = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 18px;
  color: #404040;
  font-weight: bold;
`;

const LeftRight = styled.button`
  background-color: white;
  text-align: center;
  width: 40px;
  height: 40px;
  border: 1px solid #D3D3D3;
  &:hover {
    cursor: pointer;
  };
  &:focus {
    outline: 0;
  };
  &:active {
    background-color: #D3D3D3;
  }
`;

const WeekWords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const WeekWord = styled.div`
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 13px;
  color: #404040;
`

const TableDates = styled.table`
  width: 100%;
  height: 60%;
  border-collapse: collapse;
  padding-bottom: 20px;
`;

const TableCellRows = styled.tr`
height: 40px;
`;

const TableCells = styled.td`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid #D3D3D3;
  justify-content: center;
  text-align: center;
  &:hover {
    background-color:  #D3D3D3;
  }
`;

const TableCellsHover = styled(TableCells)`
cursor: pointer;
background-color: ${props => {
  if (props.keyProp <= props.day) {
    return '#80fff5'
  }
  return "white"
}};
color:  ${props => {
  if (props.keyProp <= props.day) {
    return 'white'
  }
  return "black"
}};
&:hover {
  background-color:#80fff5;
  color: white;
}
`;

const TableCellGray = styled(TableCells)`
  cursor: default;
  text-decoration: line-through;
  color: #D3D3D3;
  &:hover {
    background-color: white;
  }
`;

const TableCellStart = styled(TableCells)`
  background-color:  #00a699;
  color: white;
  &:hover {
    background-color:  #00a699;
    color: white;
  }
`;

const CloseButton = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonWords = styled.button`
  color:  #00a699;
  font-family:Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  };
  &:focus {
    outline: 0;
  };
  background-color: white;
  border: none;
  `;

class Calendar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedDate: null,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      lastMonth: null,
      nextMonth: null,
      lastYear: null,
      nextYear: null,
      reservationDates: [],
      daysinmonth: null,
      blackDate: null,
      startDate: null,
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    switch(this.state.month) {
      case 0:
        this.setState({
          lastMonth: 11,
          nextMonth: this.state.month + 1,
          lastYear: this.state.year - 1,
          nextYear: this.state.year + 1,
        })
        break;
      case 11:
        this.setState({
            lastMonth: this.state.month - 1,
            nextMonth: 0,
            lastYear: this.state.year - 1,
            nextYear: this.state.year + 1,
        })
        break;
      default:
        this.setState({
          lastMonth: this.state.month - 1,
          nextMonth: this.state.month + 1,
          lastYear: this.state.year - 1,
          nextYear: this.state.year + 1,
        })
        break;
    }
  }

  renderMonthYear() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
      "October", "November", "December" ]
    return ` ${months[this.state.month]} ${this.state.year}`
  }

  onHoverDate(number) {
    if (number <=31) {
      this.setState({
        selectedDate: number
      })
      return;
    }
    this.setState({
      selectedDate:null,
    })
  }

  renderDay() {
    //for padding number with 0
    const zeroPad = (value, length) => {
      return `${value}`.padStart(length, '0');
    }
    //reservation dates prepared and put in state
    let reservationDates = [];
    if (this.state.reservationDates.length === 0) {
      for (var reservation of this.props.state.reservations) {
        var startMonth = new Date(reservation.startDate).getMonth()
        var startDay = new Date(reservation.startDate).getDate()
        var endMonth = new Date(reservation.endDate).getMonth()
        var endDay = new Date(reservation.endDate).getDate()
        reservationDates.push({startMonth: startMonth, startDay: startDay, endMonth: endMonth, endDay: endDay,})
      }
      this.setState({
        reservationDates: reservationDates,
      })
    }
    //reservation dates in a 3-month period you're in
    const reservationsInMonth = [];
    for (var reservation of this.state.reservationDates) {
      if (reservation.startMonth === this.state.month || reservation.startMonth === this.state.lastMonth|| reservation.startMonth === this.state.nextMonth) {
        reservationsInMonth.push(reservation)
      }
    }
    //all dates between reservation dates
    const reservationDatesInMonth =[];
    for (var reservation of reservationsInMonth) {
      var counter = 0;
      var date1 = new Date (this.state.year, reservation.startMonth, reservation.startDay)
      var date2 = new Date (this.state.year, reservation.endMonth, reservation.endDay)
      var onDate = new Date(date1);
      var max = (date2.getTime() - date1.getTime())/(1000*3600*24)
      while (counter <= max) {
        let date = {month: onDate.getMonth(), day: onDate.getDate()};
        reservationDatesInMonth.push(date)
        onDate.setDate(onDate.getDate() + 1)
        counter++
      }
    }
    //for getting the amount of days in a month
    const getMonthDays = (month = this.state.month, year = this.state.year) => {
      const months30 = [3, 5, 8, 10];
      const leapYear = year % 4 === 0;
      return month === 1
        ? leapYear
          ? 29
          : 28
        : months30.includes(month)
          ? 30
          : 31;
    }
    //for getting the first day of the month
    const getMonthFirstDay = (month = this.state.month, year = this.state.year) => {
      return (new Date(year, month, 1).getDay());
    }
    //variables of month days and the first day of the month
    const monthDays = getMonthDays();
    const monthFirstDay = getMonthFirstDay();
    //blank boxes for empty days
    const blanks = [];
    for (let i = 0; i < monthFirstDay; i++) {
      blanks.push(
        <td className = "calendar-day empty">{""}</td>
      )
    }
    //the days in the month chosen
    let daysInMonth = [];
    //if there's a start date, then make a start date variable
    var startDate = null;
    if (this.props.state.startDate !== null) {
      let tempStart = this.props.state.startDate
      startDate = new Date (tempStart.year, tempStart.month, tempStart.day)
    }
    //if there's a blackout date, then make a blackout date variable
    var blackDate = null;
    if (this.props.state.blackDate !== null) {
      let blackout = this.props.state.blackDate
      blackDate = new Date(blackout.year, blackout.month, blackout.day)
    }
  //for making the days to put in//
    for (let d = 1; d <= monthDays; d++) {
      let date = new Date(this.state.year, this.state.month, d)
  //for crossing out dates before start date if black date is selected
      if ((blackDate !== null && date > blackDate ) || date < startDate) {
        daysInMonth.push(
          <TableCellGray key = {d} className = {"calendar-day gray"}>{d}</TableCellGray>
        )
        continue;
  //if there's a start date, then make it green
      } else if (startDate !== null && startDate.getDate() === d && startDate.getMonth() === this.state.month) {
        daysInMonth.push(
          <TableCellStart key = {d} className = {"calendar-day start"}>{d}</TableCellStart>
        )
        continue;
      }
  //adding the hover-green function to change color if it's passed the start date
      let month = this.state.month
      let year = this.state.year
      if (startDate !== null) {
        daysInMonth.push(
          <TableCellsHover day ={this.state.selectedDate} key = {d} className = {"calendar-day"} onClick = {() => {this.props.onSelect("endDate",d, month, year); this.props.onSwitch("end")}} onMouseEnter={()=>{this.onHoverDate(d)}} onMouseLeave = {()=>{this.onHoverDate(32)}} keyProp = {d}>
            {d}
        </TableCellsHover>
        )
        continue;
      }
  //pushes a normal cell if no start date is selected that turns gray when hovered over
      daysInMonth.push (
        <TableCells key = {d} className = {"calendar-day"} onClick = {() => {this.props.onSelect("endDate", d, month, year); this.props.onSwitch("end")}}>
            {d}
        </TableCells>
      );
    }
  //turn cells to gray cells if reservation date exists
    for (let j = 0; j < reservationDatesInMonth.length; j++) {
      let reservation = reservationDatesInMonth[j];
      let blackout = null;
      let blackDate = null;
      for (let i = 0; i < daysInMonth.length; i++) {
        if (daysInMonth[i].key === `${reservation.day}` && this.state.month === reservation.month) {
          daysInMonth.splice(i, 1, <TableCellGray key = {reservation.day} className = {"calendar-day gray"}>{reservation.day}</TableCellGray>)
          if (this.props.state.startDate !== null) {
            blackout = new Date(this.state.year, this.state.month, i)
            blackDate = {year: blackout.getFullYear(), month: blackout.getMonth(), day: i + 1}
          }
          if (this.props.state.blackDate === null && startDate !== null && blackout > startDate) {
            this.props.onBlack(blackDate)
            return;
          }
        }
      }
    }
    //calendar structure
    let totalSlots = [...blanks, ...daysInMonth]
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row)
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
        cells = [];
      }
    })
    //deletes empty rows
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length === 0) {
        rows.splice(i, 1)
      }
    }
    //wrapping rows in td
    let daysinmonth = rows.map((d, i) => {
      return <TableCellRows>{d}</TableCellRows>
    })
    //return the calendar
    return daysinmonth;
  }

  changeMonthYear (leftRight) {
    //for left
    if (leftRight === "left") {
      switch(this.state.month) {
        case 0:
          this.setState({
            year: this.state.year - 1,
            month: 11,
            lastMonth: 10,
            nextMonth: 0,
          })
          break;
        case 1:
          this.setState({
            month: 0,
            lastMonth: 11,
            nextMonth: 1,
          })
          break;
        case 11:
            this.setState({
            month: 10,
            lastMonth: 9,
            nextMonth: 11,
          })
          break;
        default:
          this.setState({
            month: this.state.month - 1,
            lastMonth: this.state.lastMonth - 1,
            nextMonth: this.state.nextMonth - 1
          })
          break;
      }
    //for right
    } else {
      switch(this.state.month) {
        case 11:
          this.setState({
            year: this.state.year + 1,
            month: 0,
            lastMonth: 11,
            nextMonth: 1,
          })
          break;
        case 10:
          this.setState({
            month: 11,
            lastMonth: 10,
            nextMonth: 0,
          })
          break;
        case 0:
          this.setState({
            month: 1,
            lastMonth: 0,
            nextMonth: 2,
          })
          break;
        default:
          this.setState({
            month: this.state.month + 1,
            lastMonth: this.state.lastMonth + 1,
            nextMonth: this.state.nextMonth + 1,
          })
          break;
      }
    }
  }

  rerenderMonthYear() {
    const newYear = new Date (this.props.state.startDate.year, this.props.state.startDate.month).getFullYear()
    const newMonth = new Date (this.props.state.startDate.year, this.props.state.startDate.month).getMonth()
    if ((this.state.month !== newMonth || this.state.year !== newYear) && this.props.show === false) {
      this.setState({
        year: newYear,
        month: newMonth,
      })
    }
  }

  blackoutNull () {
    let propDate = this.props.state.startDate
    let stateDate = this.state.startDate
    if (stateDate === null) {
      this.setState({
        startDate: propDate
      })
      return;
    }
    if ((stateDate.day !== propDate.day || stateDate.month !== propDate.month || stateDate.year !== propDate.year || propDate === null || propDate === null)) {
      console.log("hitting")
      this.setState({
        startDate: propDate,
      }, ()=> {this.renderDay()})
      this.props.onBlack(null)
      return;
    }
  }

  onReset() {
    this.setState({
      startDate: null,
    })
    this.props.onBlack(null)
  }

  render () {
    //changes state of year and month to start date if exists
    if (this.props.state.startDate !== null) {
      this.rerenderMonthYear();
      this.renderDay();
      this.blackoutNull()
    }
    const weekName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    return this.props.show === false ? null :
    (
      <Modal>
        <ButtonWords>
          <LeftRight onClick = {() => this.changeMonthYear("left")}>
            Left
          </LeftRight>
          <DisplayWords>
            {this.renderMonthYear()}
          </DisplayWords>
          <LeftRight onClick = {() => this.changeMonthYear("right")}>
            Right
          </LeftRight>
        </ButtonWords>
        <WeekWords>
          {weekName.map(name =><WeekWord>{name}</WeekWord>)}
        </WeekWords>
        <TableDates>
          <tbody>
            {this.renderDay()}
          </tbody>
        </TableDates>
        <CloseButton>
          <CloseButtonWords onClick = {() => {this.props.onClear(); this.onReset(); this.props.onSwitch(); this.blackoutNull()}}>
            Clear Dates
          </CloseButtonWords>
        </CloseButton>
      </Modal>
    )
  }
}

export default Calendar