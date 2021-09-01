// takes .txt file as input and converts to array of strings. 
// input: numbered list within .txt file, each item in list is a new line
// output: array of uncapitalized strings without #s or spaces

console.log('Current directory: ' + process.cwd())

var fs = require("fs");

function txtToString(filePath){return fs.readFileSync(filePath, 'utf8')};

function txtToWordArray(filePath){
let string = txtToString(filePath);
// converting string to array and progressively removing fluff:
let noLineBreaks = string.split('\n');
    //+/g means we're doing this iteratively, otherwise e.g. '10' would be replaced by '0'
    noNumbers = noLineBreaks.map(string => string.replace(/[0-9]+/g,''));
    noPeriods = noNumbers.map(string => string.replace('.', '') );
    noSpaces = noPeriods.map(string => string.replace(/\s+/g, ''));
    noCapitals = noSpaces.map(string => string.toLowerCase());
    //for some reason, I'm getting an extra entry of length zero, so I'm removing it here:
    noCapitals.pop(); 
    return noCapitals

}

module.exports.txtToWordArray = txtToWordArray

// tests
// console.log('Current directory: ' + process.cwd()) checks current directory
 console.log(txtToWordArray("./common-nouns.txt"))
//console.log(txtToWordArray("./uncommon-nouns.txt"))


   