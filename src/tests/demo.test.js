// test('Must Be True',()=>{
//   const isActive = true;
//   if( isActive){
//     throw new Error('Not Active');
//   }
// });
describe('Testing demo.test.js', () => {  

  test('Strings must be equal', () => { 
    // 1. Inicialization
    const msg1 = 'Hello world';
    // 2. stimulus
    const msg2 = `Hello world`; 
    // 3.Observe behavior
    expect(msg1).toBe(msg2);// msg1===msg2   
  })
})