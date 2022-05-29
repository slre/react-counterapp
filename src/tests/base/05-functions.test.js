import { getUser,getUsuarioActivo } from "../../base/05-funciones";

describe('Test 05-funciones', () => { 
  test('Testing getUser', () => { 
    const userTest = {
      uid: 'ABC123',
      username: 'Ysmir'
    }
    const user = getUser()
    expect( userTest ).toEqual(user)
  })
  
  test('Testing getUsuarioActivo', () => { 
     const userActiveTest = {
        uid: 'ABC567',
        username: 'Ysmir'
     }
     const userActive = getUsuarioActivo('Ysmir')
     expect( userActiveTest  ).toEqual( userActive );
  })
})