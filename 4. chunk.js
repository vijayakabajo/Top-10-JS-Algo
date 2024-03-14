// given an array and chunk size
// where each subarray is of length size
// ---Example
// chunk([1,2,3,4],2)---->[[1,2],[3,4]]

//------------------------------------------------------------------------------------------------//

function chunk(arr, size){
  let index=0;
  let chunkArr=[];

  while(index<arr.length){
        chunkArr.push(arr.slice(index, index+size));
        index+= size; 
    }
    return chunkArr;
    
}
console.log(chunk([1,2,3,4],2));


//------------------------------------------------------------------------------------------------//


// slice()
// The slice() method of Array instances returns a shallow
//  copy of a portion of an array into a new array object 
//  selected from start to end (end not included) where 
//  start and end represent the index of items in that 
//  array. The original array will not be modified.





// Examples

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

