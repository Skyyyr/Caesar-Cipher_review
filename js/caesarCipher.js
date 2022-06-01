// exports.caesarCipher = function(string, shiftAmount) {
function caesarCipher(string, shiftAmount) {
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let alphabetUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer=""
    for (let char of string){
        if (alphabet.includes(char)) {
            let shiftIndex=alphabet.indexOf(char)+shiftAmount
            if (shiftIndex>25) {
                answer+=alphabet[(shiftIndex-26)]
            }
            else if (shiftIndex<0) {
                answer+=alphabet[(26-Math.abs(shiftIndex))]       
            }
            else {
                answer+=alphabet[shiftIndex]
            }
        }
        else if (alphabetUpper.includes(char)) {
            let shiftIndex=alphabetUpper.indexOf(char)+shiftAmount
            if (shiftIndex>26) {
                answer+=alphabetUpper[(shiftIndex-26)]
            }
            else if (shiftIndex<0) {
                answer+=alphabetUpper[(26-Math.abs(shiftIndex))]        
            }
            else {
                answer+=alphabetUpper[shiftIndex]
            }
        }
        else {
            answer+=char
        }
    }
    return answer
}

// console.log(caesarCipher("Boy! What a string!", -5)) //=== "Wjt! Rcvo v nomdib!")
// console.log(caesarCipher("Hello zach168! Yes here.", 5)) //=== "Mjqqt efhm168! Djx mjwj.")
// console.log(caesarCipher("Hello Zach168! Yes here.", -5)) //=== "Czggj Uvxc168! Tzn czmz.")

