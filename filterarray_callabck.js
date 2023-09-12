
function filterArry(coll, callbck) {
    return coll.filter((element, index, array) => {
        if(callbck(element) === true) {
            return true;
        } else {
            return false;
        }
    });
}

function callbck(val) {
    if((val % 2) === 0) {
        return true;
    } else {
        return false;
    }
}

function testCases(func, inputs, expectedValues) {
    
    //assert: func is a function which accepts a single argument
    //
    //        inputs is an array where inputs[i] is a value to
    //        be passed to the function
    //
    //        expectedValues is an array where expectedValues[i] is 
    //        the expected output of func(inputs[i])
    //        
    //         inputs.length === expectedValues.length
    
    var flag = true;

    for (let i = 0; i < inputs.length; i++) {
        
        if(func(inputs[i]) != expectedValues[i]) {
            flag = false;
            break;
        }
        
    }

    //assert: flag is true if func(inputs[i]) === expectedValues[i]
    //        (0 <= i < inputs.length)

    return flag;
}

const arr = [2,4,6,8,9,11,14];
var newarr = [];

newarr = filterArry(arr, callbck);
console.log(newarr);
