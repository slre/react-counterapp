import { getHeroByIdAsync } from "../../base/09-promesas";
import heros from "../../data/heros";

describe('Testing Promises', () => { 
  test('getHEroByIdAsync must return async Hero', ( done ) => { 
    const id = 1;
    getHeroByIdAsync( id ).then( (hero)=>{
      expect( hero ).toBe( heros[0] );
      done();
    }) 
   });
   test('Error if Hero does not exist', ( done ) => { 
    const id = 10;
    getHeroByIdAsync( id )
    .catch( (error)=>{
      expect( error ).toBe( 'Could find the Hero' );
      done();
    }) 
   });
 })