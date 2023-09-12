const fs = require('fs');

function series() {
    fs.readFile("a.txt", "utf8", (err, data) => {
        setTimeout(() => {
            console.log(data);
            fs.writeFile("b.txt", data, (err) => {
                if(err) {  throw err; }
                else {
                    let newdata = data.replace(/\s+/g,' ').trim();
                    console.log(newdata);
                    fs.writeFile("a.txt", newdata, (err) => {
                        if(err) { throw err; }
                        else { 
                            fs.readFile("a.txt", "utf8", (err, data) => {
                                console.log(data);
                                fs.writeFile("a.txt", " ", (err) => {
                                    if(err) { throw err; }
                                    else {
                                        fs.writeFile("b.txt", " ", (errr) => {
                                            if(errr) { throw errr; }
                                        });
                                    }
                                });
                                
                            })
                        }
                    });
                }
            });
        }, 3 * 1000);
    })
}

series();