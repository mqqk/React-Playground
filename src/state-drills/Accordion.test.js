import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Compnent',() =>{

    // The component renders an empty li when the sections prop is not supplied.
    // The component renders no sections as active by default.
    // The component opens a clicked section.
    // The component only opens the last section when multiple sections have been clicked.

    const sectionsProp = [
        {
          title:'Section 1',
          content:'First Section has anything but Latin'
        },
        {
          title:'Section 2',
          content:'This wil all make perfect sense later'
        },
        {
          title:'Section 3',
          content:'Keep it rolling'
        }
      
      ]

      it('renders an empty li when the section prop is not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()

      })

      it('renders no section as active by defaul',() =>{
          const wrapper = renderer.create(<Accordion sections={sectionsProp}/>)
          expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('component opens a clicked seaction',() =>{
          const wrapper = shallow(<Accordion sections={sectionsProp}/>)
          wrapper.find('button').at(1).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('component only opens last section when others have been clicked', () => {
          const wrapper = shallow(<Accordion sections={sectionsProp} />)
          wrapper.find('button').at(1).simulate('click')
          wrapper.find('button').at(2).simulate('click')
          expect(toJson(wrapper)).toMatchSnapshot()
      })




})