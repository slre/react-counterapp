import { getHeroById, getHerosByOwner } from "../../base/08-imp-exp";
import heros from "../../data/heros";


describe('Test Heros Functions', () => { 
  test('Return Hero for Id', () => { 
    const iD = 1;
    const hero = getHeroById(iD);
    const herosdata = heros.find( (h) => h.id === iD);
    expect( hero ).toEqual( herosdata);
   })
   test('Return Udefined if id does not exist', () => { 
    const iD = 123;
    const hero = getHeroById(iD);
    expect( hero ).toBe( undefined );
   })

   test('Return Array DC Heros', () => { 
    const owner = 'DC';
    const herosDC = getHerosByOwner(owner);
    const herosByOwnerData = heros.filter( (hero) => hero.owner === owner );
    expect( herosDC ).toEqual( herosByOwnerData);
    expect( herosDC.length ).toBe( herosByOwnerData.length);
   })
   
   

})