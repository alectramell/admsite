var fs = require('fs');
var request = require('request');

// Get HTML file..
request('https://raw.githubusercontent.com/alectramell/admsite/master/index.html').pipe(fs.createWriteStream('gotcha.html'))

// Read HTML file..
console.log('..Checking File..');

var data = fs.readFileSync('app.html', 'utf8');

console.log(data);

// Finish Download..

console.log('clear');

console.log('Download Complete!');
