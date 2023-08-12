module.exports = function check(str, bracketsConfig) {
  let arr1 = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    
    for (let j = 0; j < bracketsConfig[i].length; j++) {
        arr1.push(bracketsConfig[i][j])    
        
    }
    }
    console.log(arr1);
    //let arr2 = [];
    let counterLeftBracket = 0;
    let counterRightBracket = 0;
    for (let i = 0; i < arr1.length; i++) {
     if (arr1[i] === '[' || arr1[i] === '('|| arr1[i] === '{') {counterLeftBracket += 1};
     if (arr1[i] === ']' || arr1[i] === ')'|| arr1[i] === '}') {counterRightBracket += 1};

        
    }
    //let arr3 = [];
    let counterOfEven = 0;
    let counterOfOdd = 0;
    for (let i = 0; i < str.length; i++) {
     if (str[i] === '[' || str[i] === '('|| str[i] === '{' || str[i] === '1'|| str[i] === '3'|| str[i] === '5'|| str[i] === '7') {counterOfEven += 1};
     if (str[i] === ']' || str[i] === ')'|| str[i] === '}'|| str[i] === '2'|| str[i] === '4'|| str[i] === '6'|| str[i] === '8') {counterOfOdd += 1};
        
        
    }


    let firstParam;
    let secondParam;

    if (counterLeftBracket === counterRightBracket) {secondParam = true};
    if (counterLeftBracket !== counterRightBracket) {secondParam = false};
    if (counterOfEven === counterOfOdd) {firstParam === true};
    if (counterOfEven !== counterOfOdd) {firstParam === false};
    
    
    if (firstParam === true && secondParam === true) return true;
    return false;
    //return true;
    

}