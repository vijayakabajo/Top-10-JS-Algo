function maxChar(str){
    let charMap = {};
    let max = 0;
    let maxChar = ''       //Character set


    // for(char of str){
    //     if(!charMap[char]){
    //         charMap[char]=1;
    //     }else{
    //         charMap[char]++;
    //     }
    // }
    
    //in One Line->
    for(let char of str){
        charMap[char] = charMap[char]+1 || 1;
    }

                                                        
    for(let key in charMap){   //O for object which means not to use of instead use in, of is used in array/strings
        if(charMap[key] > max){                             //trick to remember
            max=charMap[key];
            maxChar=key;
        }
    }
return maxChar
}
console.log(maxChar("bajobbbasjo"));



