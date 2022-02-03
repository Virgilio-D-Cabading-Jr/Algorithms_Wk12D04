/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/


// aclp
// ad#clp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##heH#lg#lo";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#heGPOJ####lljg##o";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    let arrS = [];
    let arrT = [];

    // loop through S string
    for (char of S) {
        // console.log(char);
        if (char !== "#") {
            arrS.push(char);
        } else {
            arrS.pop();
        }

    }
    console.log("ArrS", arrS);

    // loop through T string
    for (char of T) {
        // console.log(char);
        if (char !== "#") {
            arrT.push(char);
        } else {
            arrT.pop();
        }
    }
    console.log("ArrT", arrT);

    // edge case
    if (arrS.length !== arrT.length) {
        return false;
    }

    // loop through the two arrays, and try to find if any elements in the same index are not equal
    for (let i=0; i<arrS.length; i++) {
        if ( arrS[i] !== arrT[i] ) {
            return false
        }
    }
    return true;
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))