import { getSaludo } from '../../base/02-template-string'
import '@testing-library/jest-dom';


describe('testing 02-templatestring.ts', () => { 
    test('test method getSaludo, must return Hi Ysmir Wulfhart', () => { 
      const name = 'Ysmir';
      const greet = getSaludo(name);
      expect ( greet  ).toBe(`Hola ${name}`);
       
    })

    test('must return Hi Talos Wulfhart if not argument', () => { 
      const greet = getSaludo();
      expect( greet ).toBe( 'Hola Talos' ); 
    })
 })