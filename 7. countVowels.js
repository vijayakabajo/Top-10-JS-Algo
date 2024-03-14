// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('How are you?') --> 5
//   vowels('Coding Money') --> 4
//   vowels('why?') --> 0 

//------------------------------------------------------------------------------------------------//

// Using Regex
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);     //Regex--> g-global i- case insensetive
//     return matches? matches.length : 0;
// }

// console.log(vowels('Coding Monkey'));


//------------------------------------------------------------------------------------------------//


// Another approach
function vowels(str) {
    const vowelcheck= ['a', 'e', 'i', 'o','u'];

    let count = 0;
    for(let char of str){
        if(vowelcheck.includes(char)){   //if the current char is in the vowelcheck then count++
            count++;
        }
    }
    return count;
}


console.log(vowels('Coding Monkey'));