// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('this is mukhtar from coding money') --> 'This Is Mukhtar From Coding Money'
//   capitalize('what is titlecase?') --> 'What Is Titlecase?'
//   capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

function capitalize(str) {
    const words = str.split(' ');
    const result=[]

    // for(let word of words){
    //     result.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return result.join(" ");

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalize('this is monkey'));










// In JavaScript, the map() method is used to transform each element of an array by applying a function to it, and then
//  returns a new array with the transformed elements. The original array remains unchanged. Here's a basic example:

// const numbers = [1, 2, 3, 4, 5];

// // Using map to double each number in the array
// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]