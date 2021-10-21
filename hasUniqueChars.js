// Write your code below
// given a word, return true if that word contains only unique characters. return false otherwise

function hasUniqueChars(word){
let uniqueChars = new Set([])
for (let i = 0; i < word.length; i++){
    uniqueChars.add(word[i])
}
return uniqueChars.size === word.length
}

let result1 = hasUniqueChars('moons')

console.log(result1)


