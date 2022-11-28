const repeatString = function(myString, num) {
    if(num > 0){
        return myString.repeat(num);
    }
    else if(num == 0 || myString == ""){
        return "";
    }
    else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
