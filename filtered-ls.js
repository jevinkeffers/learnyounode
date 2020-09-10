'use strict'

const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const extension = '.' + process.argv[3];

function printList (directory, extension) {
    fs.readdir(directory, function (err, list) {
        if (err) {
            return console.log(err)
        }
        list.map(function(file) {
            if (path.extname(file) === extension) {
                console.log(file);
            }
        })
    })
};

printList(directory, extension);