import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Tab Component',() => {
    
    const tabsProp=[
        {
            name:'First Tab',
            content:"I'm just going to make something up here."
        },
        {
            name:'Second Tab',
            Content:"Here is something else to make up for Tab 2"
        },
        {
            name:'Third Tab',
            Content:"I hope the weather cools off soon."
        }
      ]


    it('renders without errors', () => {
        const div=document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty given no tabs',() =>{
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()

    })

    it('renders the first tab by default', () =>{
        const wrapper = renderer.create(<Tabs tabs = {tabsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        // console.log('>>>WRAPPER<<<')
        // console.log(wrapper.debug())
        // console.log('FIND (BUTTON)')
        // console.log(wrapper.find('button').at(1).debug())
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

