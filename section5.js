// Frequency Counter: A Naive Solution    // This is O(n^2)
function same (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))


// Frequency Counter: Refactored   O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])


// Frequency: Anagram Challenge  O(n)
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let letter of str1) {
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
    }
    for (let letter of str2) {
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("rat", "car"));
console.log(validAnagram("iceman", "cinema"));


// Frequency: Anagram Challenge  O(n) Instructors Solution
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
      // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
        return false;
        } else {
        lookup[letter] -= 1;
        }
    }

    return true;
}

  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')


// Multiple Pointers: Naive Solution  Time O(n^2) and Space O(1)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])


// Multiple Pointers: Refactored Solution  Time O(n) and Space O(1)
function sumZero (arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}


// Multiple Pointers: Count Unique Values  
function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    for (let j = 1; j < arr.length - 1; j++) {
        if (arr[j] == arr[i]) {
            j++;
        } else {
            for (let i = 0; i < arr.length - 1; i++) {
                arr.splice(arr[i], 1, arr[j])
            }
        }
    }
    return arr[i] + 1;
}

// Multiple Pointers: Count Unique Values  -  Instructors Solution O(n)
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        } 
        // console.log(i, j);
    }
    return i + 1;
}

countUniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7])


// Sliding Window Pattern: Naive Solution  O(n^2)
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
        temp = 0;
        for (let j = 0; j < num; j++){
        temp += arr[i + j];
        }
        if (temp > max) {
        max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// Sliding Window Pattern: Refactored Solution  O(n)
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


// Divide and Conquer Pattern: Naive O(n)
function search (arr, val) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Divide and Conquer Pattern: Refactored O(log n) - Binary Search!
function search (arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 15)
