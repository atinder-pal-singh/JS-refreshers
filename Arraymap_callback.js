
function maparray(collection, callback) {
    newarr = [];
    collection.forEach((element, index, array) => {
        newarr[index] = callback(element);
    });

    console.log(newarr);
}

function callback(val) {
    return val + 1;
}

const arry = [1,2,3,4,5,6,7,8];

maparray(arry, callback);