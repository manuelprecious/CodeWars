// Split the input string and use the loop to find if any of the letters in the string exist in the list of vowels.
function disemvowel(str){
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newArr = []
    let splitStr = str.split("")
    for(let i = 0; i < splitStr.length; i++){
        if(vowels.indexOf(splitStr[i]) === -1){
            newArr.push(splitStr[i])
        }
    }
    return newArr.join("");
}

 console.log(disemvowel("This website is for losers LOL!"))