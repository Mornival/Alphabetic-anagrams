listPosition('CBA');
listPosition('BAAA');


function listPosition(word) {
    let lettersAtWord = word.split('');
    let letters = word.split('');
    letters = letters.sort();
    let numb = 1;
    console.log(lettersAtWord);
    for (let i = 0; i < word.length; i++) {
        let fact = factorialWithString(lettersAtWord);
        for (let j = 0; j < letters.length; j++) {
            if (lettersAtWord[0] == letters[j]) {
                numb += Povts(lettersAtWord,fact * j);
                lettersAtWord.shift();
                let stakan = [];
                for (let k = 0; k < lettersAtWord.length; k++) {
                    stakan.push(lettersAtWord[k]);
                }
                letters = stakan.sort();
                j = letters.length + 1;
            }
        }
    }
    console.log(numb);
    return numb;
}

function factorialWithString(word2) {
    let word1 = [];
    let leng = word2.length;
    for(let i = 0; i < word2.length; i++){
        word1.push(word2[i]);
    }
    return (factorial(leng - 1));
}

function factorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return result;
}


function Povts(word,numbe){
    let wordd = [];
    for(let i = 0; i < word.length;i++){
        wordd.push(word[i]);
    }
    let numberr = numbe;
    wordd = wordd.sort();
    let Povtors = [];
    for(let i = 0;i < word.length; i++){
        let povtor = 0;
        let s = wordd[0];
        for(let j = 0; j < wordd.length; j++){
            if(s == wordd[j]){
                povtor++;
            }
        }
        for(let j = 0; j < wordd.length; j++){
            if(s == wordd[0]){
                wordd.shift();
            }
        }
        if(povtor > 0){
            Povtors.push(povtor);
        }
    }
    for(i = 0;i < Povtors.length;i++){
        numberr /= factorial(Povtors[i]);
    }
    console.log(Povtors);
    return numberr;
}
