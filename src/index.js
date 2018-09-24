// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

let sum = currency;                                                  
let coinH, coinQ, coinD, coinN, coinP;                               //coins quantity
let result={};                                                       //new object
if (sum >= 10000){
    result['error']="You are rich, my friend! We don't have so much coins for exchange";   //error message
    return result;
    }
    else if (sum <= 0){
        return result;                                               //empty object
        }
        else{
            coinH = (sum - sum % 50) / 50;                           
            sum = sum % 50; 
            coinQ = (sum - sum % 25) / 25; 
            sum = sum % 25; 
            coinD = (sum - sum % 10) / 10; 
            sum = sum % 10; 
            coinN = (sum - sum % 5) / 5; 
            sum = sum % 5; 
            coinP = sum;
            if (coinH!==0){result["H"]=coinH};                      //object filling
            if (coinQ!==0){result["Q"]=coinQ};
            if (coinD!==0){result["D"]=coinD};
            if (coinN!==0){result["N"]=coinN};
            if (coinP!==0){result["P"]=coinP};
            return result;
            }
}
