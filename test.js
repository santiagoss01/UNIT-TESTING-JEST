test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test ("1.2 dollar should be 127.9 yen", function(){
    
    const { fromDollarToYen} = require ('./app.js')

    const Yen = fromDollarToYen(850)
    const expected = (850 * 1.2) * 127.9;
    expect(fromDollarToYen(850)).toBe(130458);
})

test ('127.9 yen should be 0.8 pounds', function(){

    const {fromYentoGBP} = require ('./app.js')

    const pound = fromYentoGBP (500)
    const Yeneuro = 500 / 127.9;
    const expected = Yeneuro * 0.8;
    expect(fromYentoGBP(500)).toBe(3.127443315089914);

})
