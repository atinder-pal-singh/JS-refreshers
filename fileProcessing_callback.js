const fs = require('fs');

function readFileCallback(fileName, callback) {
    
    //read the contents of the file
    fs.readFile(fileName, "utf8", callback);
}

function printText(err, data) {
    if (err) throw err;
    console.log(data);
}

readFileCallback("a.txt", printText);