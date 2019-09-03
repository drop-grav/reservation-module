import React from 'react'
import {shallow} from 'enzyme'
import ReservationButton from '../components/ReservationButton.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('reservationButton', () => {
  it('displays words on the button', ()=> {
    const wrapper = shallow(<ReservationButton/>)
    expect(wrapper.find('StyledButton').text()).toEqual("Reserve")
  })
  it('displays words at the bottom of the button', ()=> {
    const wrapper = shallow(<ReservationButton/>)
    expect(wrapper.find('ReservedReminder').text()).toEqual("You won't be charged yet")
  })
})