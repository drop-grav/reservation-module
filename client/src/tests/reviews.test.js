import React from 'react'
import {shallow} from 'enzyme'
import Reviews from '../components/Reviews.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe ('reviews component', () => {
  it('should have a parent component', ()=> {
    const wrapper = shallow(<Reviews/>)
    expect(wrapper.find("StyledDiv").exists()).toBe(true)
  })
  it('should render with stars', ()=> {
    const wrapper = shallow(<Reviews rating = {3.5} ratingAmount = {1000}/>)
    expect(wrapper.find("Stars").text()).toBe("★★★★")
  })
  it('should have the right rating amount', ()=> {
    const wrapper = shallow(<Reviews rating = {3.5} ratingAmount = {1000}/>)
    expect(wrapper.find("StyledDiv").text()).toBe("★★★★1000")
  })
})