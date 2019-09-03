import React from 'react'
import {shallow} from 'enzyme'
import GuestsModal from '../components/GuestsModal.jsx'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe ('guests modal', () => {

  it('should  have correct rendering of 3 different types of people', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1}, {"childrenChosen": 0}, {"infantsChosen": 0}}/>)
    expect(wrapper.find('TextBig').length).toBe(3)
  })
  it('should return empty object when show props is null', () => {
    const wrapper = shallow(<GuestsModal show = {false} state = {{"adultsChosen": 1}, {"childrenChosen": 0}, {"infantsChosen": 0}}/>)
    expect(wrapper).toEqual({})
  })
  it('should  have 3 different texts for texts Small', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1}, {"childrenChosen": 0}, {"infantsChosen": 0}}/>)
    expect(wrapper.find('TextSmall').length).toBe(3)
  })
  it('should  have default text of 1 for adults number', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    expect(wrapper.find('#adultsNumber').text()).toEqual("1")
  })
  it('should  have default text of 0 for childrens number', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    expect(wrapper.find('#childrensNumber').text()).toEqual("0")
  })
  it('should  have default text of 0 for infants number', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    expect(wrapper.find('#infantsNumber').text()).toEqual("0")
  })
  it('should close when close button is clicked', () => {
    //imitate show guests modal
    const showGuestsModal = (boolean)=> {
      const newBool = boolean === true? false: true;
      wrapper.setProps({show: newBool})
    }
    const wrapper = shallow(<GuestsModal showGuestsModal = {showGuestsModal} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    //imitate clicking
    const closeButton = wrapper.find("CloseButton")
    closeButton.simulate('click')

    expect(wrapper).toEqual({})
  })
  it('should add one to adults when adults button is called', () => {
    //imitate adding name on adults
    const onAdd = (name) => {
      wrapper.setProps({state: {adultsChosen: 2, childrenChosen: 0, infants: 0}})
    }
    const wrapper = shallow(<GuestsModal onAdd = {onAdd} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    const addButton = wrapper.find("Button").find("#adultsChosenplus")
    addButton.simulate(`click`)

    expect(wrapper.find('#adultsNumber').text()).toEqual("2")
  })
  it('should add one to children when children button is called', () => {
    //imitate adding name on children
    const onAdd = (name) => {
      wrapper.setProps({state: {adultsChosen: 1, childrenChosen: 1, infants: 0}})
    }
    const wrapper = shallow(<GuestsModal onAdd = {onAdd} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    const addButton = wrapper.find("Button").find("#childrenChosenplus")
    addButton.simulate(`click`)
    expect(wrapper.find('#adultsNumber').text()).toEqual("1")
  })
  it('should subtract one to adults when adults button is called', () => {
    //imitate subbing name on adults
    const onSub = (name) => {
      wrapper.setProps({state: {adultsChosen: 1, childrenChosen: 0, infants: 0}})
    }
    const wrapper = shallow(<GuestsModal onSub = {onSub} show = {true} state = {{"adultsChosen": 2, "childrenChosen": 0, "infantsChosen": 0}}/>)
    const subButton = wrapper.find("Button").find("#adultsChosenminus")
    subButton.simulate(`click`)

    expect(wrapper.find('#adultsNumber').text()).toEqual("1")
  })
  it('should sub one to children when childrens button is called', () => {
    //imitate subbing name on children
    const onSub = (name) => {
      wrapper.setProps({state: {adultsChosen: 1, childrenChosen: 0, infants: 0}})
    }
    const wrapper = shallow(<GuestsModal onSub = {onSub} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 1, "infantsChosen": 0}}/>)
    const subButton = wrapper.find("Button").find("#childrenChosenminus")
    subButton.simulate(`click`)
    expect(wrapper.find('#childrensNumber').text()).toEqual("0")
  })
  it('should add one to infants when infants button is called', () => {
    //imitate adding name on children
    const onAdd = (name) => {
      wrapper.setProps({state: {adultsChosen: 1, childrenChosen: 0, infantsChosen: 1}})
    }
    const wrapper = shallow(<GuestsModal onAdd = {onAdd} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 0}}/>)
    const addButton = wrapper.find("Button").find("#infantsChosenplus")
    addButton.simulate(`click`)

    expect(wrapper.find('#infantsNumber').text()).toEqual("1")
  })
  it('should sub one to infants when infants button is called', () => {
    //imitate sub name on children
    const onSub = (name) => {
      wrapper.setProps({state: {adultsChosen: 1, childrenChosen: 0, infantsChosen: 0}})
    }
    const wrapper = shallow(<GuestsModal onSub = {onSub} show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 1}}/>)
    const addButton = wrapper.find("Button").find("#infantsChosenminus")
    addButton.simulate(`click`)

    expect(wrapper.find('#infantsNumber').text()).toEqual("0")
  })
  it('should have maximum guests shown', () => {
    const wrapper = shallow(<GuestsModal show = {true} state = {{"adultsChosen": 1, "childrenChosen": 0, "infantsChosen": 1, guestsAllowed: 4,}}/>)
    expect(wrapper.find('#guestsMaximumInModal').text()).toEqual("4 Guests maximum. infants don't count toward the number of guests.")
  })
  // FIX THIS TEST//
  it('should add one to children when children button is called', () => {
    //imitate adding name on children
    const onAdd = (name) => {
      wrapper.setProps({state: {adultsChosen: 2, childrenChosen: 2, infants: 0}})
    }
    const wrapper = shallow(<GuestsModal onAdd = {onAdd} show = {true} state = {{"adultsChosen": 2, "childrenChosen": 2, "infantsChosen": 0, "guestsAllowed": 4,}}/>)
    const button = wrapper.find('Button').find(`#childrenChosenGrayadd`)
    console.log(button.debug(), "this is the debug")
    expect(button).toEqual({})
  })

})
