// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//------------------------------------------------------------------------------------------------//

function charMap(str){
    const charMap={};
    str=str.toLowerCase().replace(/[\W]/g,'')     //  \W not a word replaced with '' // REFER // https://fireship.io/lessons/regex-cheat-sheet-js/
    for(char of str){
        charMap[char] = ++charMap[char] || 1
    }
    return charMap;
}

function anagrams(stringA, stringB) {
    const charMapA=charMap(stringA);
    const charMapB=charMap(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

    for( let key in charMapA){
        if(charMapA[key] !== charMapB[key]) return false
    }

    return true;
}


console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));