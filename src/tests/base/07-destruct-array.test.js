import { type } from "@testing-library/user-event/dist/type";
import { retornaArreglo } from "../../base/07-deses-arr";

describe('Testing 07-destruct array', () => { 
  test('Should return string and number ', () => { 
     //const arr = retornaArreglo();
     //expect( arr ).toEqual(['ABC', 123]);
     const [str,num] = retornaArreglo();
     //expect( str ).toBe('ABC');
     expect( typeof str ).toBe( 'string' );

  })

});