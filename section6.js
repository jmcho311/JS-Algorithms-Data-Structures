// Optional Challenges

// 3. Frequency Counter: sameFrequency  (my solution)
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time: O(n)
function sameFrequency (a, b) {
    let num1 = a.toString();
    let num2 = b.toString();    
    if (num1.length !== num2.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < num1.length; i++) {
        let num = num1[i];
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
    }

    for (let i = 0; i < num2.length; i++) {
        let num = num2[i];
        if (!lookup[num]) {
            return false;
        } else {
            lookup[num] -= 1;
        }
    }
    return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(35948, 498135);
sameFrequency(22, 222);

// 3. Frequency Counter: sameFrequency  (Instructor solution)
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}


// =================================================================================

// 4. Frequency Counter: Multiple Pointers - areThereDuplicates  (my solution)
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates() {
    if (arguments.length === 1) return false;
    let duplicates = {};
    for (let val in arguments) {
        duplicates[arguments[val]] = (duplicates[arguments[val]] || 0) + 1
    }
    console.log(duplicates)
    for (let key in duplicates) {
        if(duplicates[key] > 1) return true;
    }
    return false;
}

areThereDuplicates(1, 2, 3);
areThereDuplicates(1, 2, 2);
areThereDuplicates('a', 'b', 'c', 'a');

// 4. Frequency Counter: Multiple Pointers - areThereDuplicates  (Instructor solution)
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false;
}

// 4. (Multiple Pointers - Instructor solution)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}

// 4. (One Liner Soltion - Instrutor solution)
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}


// =================================================================================

// 5. Multiple Pointers - averagePair  (my solution)
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, avg){

}

averagePair([1, 2, 3], 2.5)  // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1)  // false
averagePair([], 4)  // false

// 5. Multiple Pointers - averagePair  (Instructor solution)
function averagePair(arr, num) {
    let start = 0
    let end = arr.length-1;
    while(start < end){
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
} 

averagePair([1, 2, 3], 2.5)  // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1)  // false
averagePair([], 4)  // false


// =================================================================================

// 6. Multiple Pointers - isSubsequence  (my solution)
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 
function isSubsequence() {

}

isSubsequence('hello', 'hello world');  // true
isSubsequence('sing', 'sting');  // true
isSubsequence('abc', 'abracadabra');  // true
isSubsequence('abc', 'acb');  // false (order matters)

// 6. Multiple Pointers - isSubsequence  (Instructor solution - Iterative)
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

// 6. Multiple Pointers - isSubsequence  (Instructor solution - Recursive but not O(1) Space)
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}


// =================================================================================

// 7. Sliding Window - maxSubarraySum  (my solution)
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array but [100, 300] is not.
function maxSubarraySum() {

}

maxSubarraySum([100, 200, 300, 400], 2);  // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);  // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);  // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);  // 5
maxSubarraySum([2, 3], 3);  // null

// 7. Sliding Window - maxSubarraySum  (Instructor solution)
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;

    let total = 0;
    for (let i=0; i<num; i++){
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i-num];
        total = Math.max(total, currentTotal);
    }
    return total;
}


// =================================================================================

// 8. Sliding Window - minSubArrayLen  (my solution)
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen() {

}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);  // 2 -> because [4, 3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9);  // 2 -> because [5, 4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);  // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);  // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);  // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);  // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);  // 0

// 8. Sliding Window - minSubArrayLen  (Instructor solution)
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
        if(total < sum && end < nums.length){
        total += nums[end];
            end++;
        }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
                total -= nums[start];
                start++;
        } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}


// =================================================================================

// 9. Sliding Window - findLongestSubstring  (my solution)
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring() {

}

findLongestSubstring('');  // 0
findLongestSubstring('rithmschool');  // 7
findLongestSubstring('thisisawesome');  // 6
findLongestSubstring('thecatinthehat');  // 7
findLongestSubstring('bbbbbbbb');  // 1
findLongestSubstring('longestsubstring');  // 8
findLongestSubstring('thisishowwedoit');  // 6

// 9. Sliding Window - findLongestSubstring  (Instructor solution)
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
      // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}