/*Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.*/

function unusedDigits(...arr) {
    let n = arr.toString().split(",");              // create an array of strings
    let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b = "";
    for  (let i = 0; i<n.length; i++) {             // create string from array n
        b += String(n[i]);
    }
    for (let i = 0; i < b.length; i++) {
        for (let y=0; y<arrNum.length; y++) {       // remove entry from array arrNum
            if (b[i]==arrNum[y]) {
                arrNum.splice(y, 1);
            }
        }
    }
    let num = "";
    for (let i = 0; i < arrNum.length; i++) {       // convert array to string
        num += String(arrNum[i]);
    }
    return num;
}