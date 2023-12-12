function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for (let i=0; i<str.length; i++){
        if (i>= startIndex && i <=endIndex){
            newStr = newStr + str[i];
        }
    }
}