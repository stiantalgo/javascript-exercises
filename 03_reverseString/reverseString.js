const reverseString = function(str) {
    let reverseWord = "";
    for(let i = (str.length-1); i >= 0; i--){
        reverseWord += str[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
