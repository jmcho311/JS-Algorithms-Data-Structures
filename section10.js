// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1. 
// Don't use indexOf to implement this function
// Examples:
// linearSearch([10, 15, 20, 25, 30], 15)  // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)  // 5
// linearSearch([100], 100)  // 0
// linearSearch([1, 2, 3, 4, 5], 6)  // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)  // -1
// linearSearch([100], 200)  // -1

function linearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } else {
            return -1
        }
    } 
}

// Linear Search Exercise (Instructor solution)
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}


// =================================================================================

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// Examples:
// binarySearch([1, 2, 3, 4, 5] ,2) // 1
// binarySearch([1, 2, 3, 4, 5] ,3) // 2
// binarySearch([1, 2, 3, 4, 5] ,5) // 4
// binarySearch([1, 2, 3, 4, 5] ,6) // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] ,10) // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] ,95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] ,100) // -1

function binarySearch (arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === val) {
            return indexOf(avg);
        } else if (avg < val) {
            let start = indexOf(avg);
        } else if (avg > val) {
            let end = indexOf(avg);
        }
    }
    return -1;
}

// Binary Search Exercise (Instructor solution - original)
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end);
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
    // return arr[middle] === elem ? middle : -1;  ternary for line 74 - 77
}

// Binary Search Exercise (Instructor solution - original refactored)
// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }


// =================================================================================

// Naive String Search 
// Loop over the longer string
// Loop over the shorter string
// If the characters don’t match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count
function stringSearch(long, short) {
    let count = 0;

}


// Naive String Search (Instructor Solution)
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) {
                break;
            }
            if(j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")