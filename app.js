// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// we include fromEuroToDollar here as well because it needs to be exported


const fromDollarToYen = (valueInDollar)=>{
    let valueInyen = (valueInDollar * 1.2) * 127.9;
    return valueInyen;
}

const fromYentoGBP = (valueinyen)=>{
    let yenEuro = valueinyen / 127.9;
    let valueInGBP = yenEuro * 0.8;
    return valueInGBP;
}

module.exports = {  fromEuroToDollar, fromDollarToYen,fromYentoGBP }
