const fs = require('fs');
const path = require('path');

fs.readFile(__filename, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('read the file with callbacks');
    console.log(data.substr(0, data.indexOf("\n")));
});

const promiseToReturnString = fs.promises.readFile(path.join(__dirname, '..', 'README.md'), 'utf-8');
promiseToReturnString.then(str => {
    console.log('read the file with promises');
    console.log(str.substr(0, str.indexOf("\n")));
});
/* missing handling rejection */
