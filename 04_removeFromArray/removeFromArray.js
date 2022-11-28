const removeFromArray = function (myArr, ...removeIndex) {

    console.log(removeIndex);
    removeIndex.forEach(element => {
        for (var i = 0; i <= myArr.length; i++) {
            console.log(element);
            if (myArr[i] === element) {
                myArr.splice(i, 1);
            }
        };
    });

    return myArr;

};

// Do not edit below this line

module.exports = removeFromArray;
