// We setup constants just for the ease of reading later in our logic (Not required at all)
const MAX_ALPHABET_LETTER = 26;
const MIN_ALPHABET_LETTER = 0;
// Our function that cipher's a string by a certain amount
function caesarCipher(string, shiftAmount) {
//    Variable setup
    let alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer = ""
    let isUpperCase = false

//  Loop over each character in the given string
    for (let char of string){
//      If the character is not lower, or upper case add it to the answer string and continue to the next char
        if (!alphabetLower.includes(char) && !alphabetUpper.includes(char)) {
            answer += char
            continue
//      If the letter is upper, set isUpper to true otherwise make sure isUpperCase is false
        } else if (alphabetUpper.includes(char)) {
            isUpperCase = true
        } else {
            isUpperCase = false
        }

//      Let's ask which alphabet to use and set it to alphabet
        alphabet = isUpperCase ? alphabetUpper : alphabetLower
        let shiftIndex = alphabet.indexOf(char) + shiftAmount
//      Make sure the character doesn't go beyond it's bounds, and if so adjust it, otherwise add to answer string
        if (shiftIndex > MAX_ALPHABET_LETTER) {
            answer += alphabet[(shiftIndex - MAX_ALPHABET_LETTER)]
        }
        else if (shiftIndex < MIN_ALPHABET_LETTER) {
            answer += alphabet[(MAX_ALPHABET_LETTER - Math.abs(shiftIndex))]
        }
        else {
            answer += alphabet[shiftIndex]
        }
    }
//    Return answer array
    return answer
}

console.log(caesarCipher("Boy! What a string!", -5) === "Wjt! Rcvo v nomdib!")
console.log(caesarCipher("Hello zach168! Yes here.", 5) === "Mjqqt efhm168! Djx mjwj.")
console.log(caesarCipher("Hello Zach168! Yes here.", -5) === "Czggj Uvxc168! Tzn czmz.")

