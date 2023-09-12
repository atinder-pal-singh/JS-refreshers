
function higherOrder(callback) {
    const date = new Date();
    const dayofmonth = date.getUTCDate();
    console.log(dayofmonth);

    setTimeout(() => {
        callback("result");
    }, dayofmonth * 1000);
}

function callback(result) {
    console.log(`Async call ${result}`);
}

higherOrder(callback);