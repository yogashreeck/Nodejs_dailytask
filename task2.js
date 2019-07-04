// 1st question
var fs = require("fs");
fs.readFile('input.txt', 'utf-8', function (err, qus1) {
    if (err) {
        return console.log("document cannot be find")
    }
    console.log(qus1);
});

//2nd question
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function (err, qus2) {
    if (err) {
      return console.log(err);
    }
    console.log(qus2);
});
var qust = fs.readFileSync('sample.txt','utf8');
console.log(qust);


//3rd question

goToWork(DoWork);
goToWork(project);

function DoWork() {
    console.log("Come to Office");
}
function project() {
    console.log("Project is Completed");
}
function goToWork(doNext) {
    doNext();
}

//4th question
var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log(" readFile asynchronously ");