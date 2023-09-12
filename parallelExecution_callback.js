const { resolveCaa } = require('dns');
const fs = require('fs');

async function parallelFileOperation() {
    let result = [];
    const responses = await Promise.all([readFiles(), WriteToFile()]);

    for(let resp of responses) {
        result.push(resp);
    }
    console.log(result);
}

function readFiles() {
    return new Promise((resolve,reject) => {
        if (fs.existsSync("a.txt")) {
            fs.readFile("a.txt", "utf8", (err, data) => {
                resolve(data);
            });
        } else {
            reject("File Not Found");
        }
    })
}

function WriteToFile() {
    return new Promise((resolve,reject) => {
        //write to file
        fs.writeFile("b.txt", "Hello!", (err, data) => {
            if (err) reject("0");
            resolve(1);
        });
    })
}

parallelFileOperation();