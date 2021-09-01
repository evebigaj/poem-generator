//todo remove spaces at end and stop using .pop()

const { txtToWordArray } = require("./txt-to-word.js")

const poemParts  = {
commonNouns: txtToWordArray("./common-nouns.txt"),
uncommonNouns: txtToWordArray("./uncommon-nouns.txt")
}


function makeListPoem(){
    console.log('The Poem That Was Really a Program')
    console.log('')
    //poem will have between 3 and 14 lines (inclusive)
let lineNumber = Math.floor(Math.random()*12 + 3)
for( i = 0; i < lineNumber; i++){
    let commonNounIndex = Math.floor(Math.random()*poemParts.commonNouns.length);
    let commonNoun = poemParts.commonNouns[commonNounIndex];
    let uncommonNounIndex = Math.floor(Math.random()*poemParts.uncommonNouns.length);
    let uncommonNoun = poemParts.uncommonNouns[uncommonNounIndex];
    let article = '';
    let vowels = ['a', 'e', 'o', 'u']
    if(vowels.includes(uncommonNoun[0])){
        article = 'an'
    }
    else{article = 'a'}
    console.log(`The ${commonNoun} that was really ${article} ${uncommonNoun}.`)

}

}

makeListPoem()


