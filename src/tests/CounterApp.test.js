import React from 'react';
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom'; 

describe('Testing <CounterApp>', () => { 

  //let wrapper; // UNDEFINED: if not initialized, 'looses' intelligence from editor
  let wrapper = shallow(<CounterApp  />); // Keep intelligence editof functionallity 
  beforeEach( ()=>{
    
    wrapper = shallow(<CounterApp  />);

  })

  test('Should show <CounterApp /> correctly', () => {
    // const wrapper = shallow( 
    //   <CounterApp  
    //   />);
    expect( wrapper ).toMatchSnapshot();
  });
  test('Should show <CounterApp /> correctly', () => {
    const value = 100;
    const wrapper = shallow( 
      <CounterApp  
        value={ value }
      />);
    const defautlVaue = wrapper.find('h2').text();
     expect( defautlVaue ).toBe( value.toString() );
  });
  test('Increase 1', () => { 
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect( counterText ).toBe('11');
   })
   test('Decrease 1', () => { 
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect( counterText ).toBe('9');
   })
   test('Reset to default value at clicking reset', () => { 
    const wrapper = shallow( <CounterApp  value = { 105 } />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect( counterText ).toBe('105');
    
   })
 })