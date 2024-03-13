function palindrome(str){
    let temp=str;
    let reversed = str.split('').reverse().join('');
    return temp === reversed ? true : false;
}

console.log(palindrome("aea"));
