import { getImage } from "../../base/11-async-await";

describe('Testing Async Await Image', ( ) => { 
  test('Should return img url ', async () => {

    const url = await  getImage();
    //expect( typeof url ).toBe('string'); 
    expect( url.includes('https://') ).toBe(true); 
   })
 })