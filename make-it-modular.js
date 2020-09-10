const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
    if(err) {
        console.log(err);
    }
    files.map(file => {
        console.log(file);
    })
})