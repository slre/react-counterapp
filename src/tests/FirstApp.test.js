import React from 'react';
import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';
import  '@testing-library/jest-dom'; 

describe('Testing <FirstApp>', () => { 
  // test('Should show Alo alo', () => { 
  //   const greet = 'Alo alo';
  //   const { getByText } = render( <FirstApp greet = { greet }/> );
  //   expect( getByText(greet) ).toBeInTheDocument();
  // })
  test('Should show <FirstApp /> correctly', () => {
    const msg = 'Alo Alo';
    const sub = 'I am a subtitle'; 
    const wrapper = shallow( 
      <FirstApp  
        greet={ msg }
        subtitle = {sub}  
      />);
    //expect( wrapper ).toMatchSnapshot();

    const txtParagraph = wrapper.find('p').text();
    expect( txtParagraph ).toBe( sub );
    
  });
 })