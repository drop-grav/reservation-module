import React from 'react'
import {shallow} from 'enzyme'
import Costs from '../components/Costs.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe ('costs component', () => {
  it ('should have the correct amount shown', ()=> {
    const wrapper = shallow(<Costs cost = {100} />)
    expect(wrapper.find("EnlargedDiv").text()).toEqual("$100")
  })
  it ('should have the per night showing', ()=> {
    const wrapper = shallow(<Costs cost = {100} />)
    expect(wrapper.find("NotEnlargedDiv").text()).toEqual("per night")
  })
})