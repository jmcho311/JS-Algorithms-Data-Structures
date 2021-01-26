// Snippet #1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))

var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


// Snippet #2 
function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6))

var time1 = performance.now();
addUpTo(100000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


// Snippet #3
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

printAllPairs(2)


// Snippet #4
// function charCount(str) {
//     // make object to return at end
//     var result = {};
//     // loop over string, for each charater...
//     for(var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         // if the char is a number/letter AND is a key in object, add one to count
//         if(result[char] > 0) {
//             result[char]++;
//         }
//         // if the char is a number/letter AND not in object, add it to object and set value to 1
//         else {
//             result[char] = 1;
//         };
//     }
//     // if character is something else (space, period, etc.) don't do anything
//     return result;
// }


// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { //lower alpha (a-z)
        return false;
    }
    return true;
}

charCount("Hello My Name Is Jane!")