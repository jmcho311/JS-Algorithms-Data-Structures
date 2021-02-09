// Selection Sort
// Store the first element as the smallest value you’ve seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value(index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.



// Selection Sort (Instructor solution)
// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) =>
//         ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//     for (let i = 0; i < arr.length; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[lowest] > arr[j]) {
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) swap(arr, i, lowest);
//     }
//     return arr;
// }

selectionSort([0,2,34,22,10,19,17]);


// =================================================================================

// Insertion Sort
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// Repeat until the array is sorted


// Insertion Sort (Instructor solution)
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])


// =================================================================================

