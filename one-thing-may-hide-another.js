const { txtToWordArray } = require("./txt-to-word.js")

const poemParts  = {
commonNouns: txtToWordArray("./common-nouns.txt"),
uncommonNouns: txtToWordArray("./uncommon-nouns.txt")
}


function makeListPoem(){
    console.log('One Thing May Hide Another')
    console.log('')
    //poem will have between 3 and 14 lines (inclusive)
let lineNumber = Math.floor(Math.random()*12 + 3)
for( i = 0; i < lineNumber; i++){
    let howManyThings = Math.floor(Math.random()*2)
    /*let howManyNouns = poemParts.commonNouns.length + poemParts.uncommonNouns.length
    let index = Math.floor(Math.random()*howManyNouns.length)*/
    let commonNounIndex = Math.floor(Math.random()*poemParts.commonNouns.length);
    let commonNoun = poemParts.commonNouns[commonNounIndex];
    let uncommonNounIndex = Math.floor(Math.random()*poemParts.uncommonNouns.length);
    let uncommonNoun = poemParts.uncommonNouns[uncommonNounIndex];
    let article = '';
    let vowels = ['a', 'e', 'o', 'u', 'i']
    if(vowels.includes(uncommonNoun[0])){
        article = 'an'
    }
    else{article = 'a'}
    switch(howManyThings){
        case 0: console.log(`One ${uncommonNoun} may hide another.`);
        break;
        case 1: console.log(`One ${commonNoun} may hide another, which in turn may hide ${article} ${uncommonNoun}.`);
        break;
        // this is currently using the same common noun twice, 
        //and it's using the article for common noun instead of uncommon
        //case 2: console.log(`One ${commonNoun} may hide another, which in turn may hide ${article} ${commonNoun} and ${article} ${uncommonNoun}.`);
    }
    

}

}

makeListPoem()


