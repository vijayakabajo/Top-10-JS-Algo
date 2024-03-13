
  //Method 1
function reverse(str){
    let reversed= '';

    for(let i=0; i<str.length; i++){
        reversed=str[i]+ reversed;
    }
    return reversed;
}



  //Method 2
function reverse2(str){   
    let reversed= '';

    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}



  //Method 3
function reverse3(str){
    let reversed= '';

    let strToArray = str.split('');
    strToArray.reverse();
    return strToArray.join('');
}



  //Method 4 (3)with chaining
function reverse4(str){
    return str.split('').reverse().join('');
}


  //Method 5
function reverseInt(n){
    let reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);  //handling -ve numbers
}





// calls
// console.log(reverse("hgnis yajiv"));
// console.log(reverse2("hgnis yajiv"));
// console.log(reverse3("hgnis yajiv"));
// console.log(reverse4("hgnis yajiv"));
console.log(reverseInt(-98765));
console.log(reverseInt(98765));