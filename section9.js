// Bonus Challenging Recursion Problems

// 15. Reverse: Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse() {

}

reverse("awesome")  // "emosewa"
reverse("rithmschool")  // "loohcsmhtir"

// 15. Reverse (Instructor solution)


// =================================================================================

// 16. isPalindrome: Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome() {

}

isPalindrome('awesome')  // false
isPalindrome('foobar')  // false
isPalindrome('tacocat')  // true

// 16. isPalindrome (Instructor solution)


// =================================================================================

// 17. someRecursive: Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
function someRecursive() {

}

// SAMPLE INPUT / OUPUT
// const isOdd = val => val % 2 !== 0;
someRecursive([1, 2, 3, 4], isOdd) // true
someRecursive([4, 6, 8, 9], isOdd) // true
someRecursive([4, 6, 8], isOdd) // false
someRecursive([4, 6, 8], val => val > 10) // false

// 17. someRecursive (Instructor solution)


// =================================================================================

// 18. flatten: Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten() {

}

flatten([1, 2, 3, [4, 5]])  // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [5]]])  // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]])  // [1, 2, 3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])  // [1, 2, 3]

// 18. flatten (Instructor solution)


// =================================================================================

// 19. capitalizeFirst: Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst() {

}

capitalizeFirst(['car', 'taco', 'banana']);  // ['Car', 'Taco', 'Banana']

// 19. capitalizeFirst (Instructor solution)


// =================================================================================

// 20. nestedEvenSum: Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum() {

}

var obj1 = {
    outer: 2, 
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2, 
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c:2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}

nestedEvenSum(obj1);  // 6
nestedEvenSum(obj2);  // 10

// 20. nestedEvenSum (Instructor solution)


// =================================================================================

// 21. capitalizeWords: Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords() {

}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words);  // ['I', 'AM', 'LEARNING', 'RECURSION]

// 21. capitalizeWords (Instructor solution)


// =================================================================================

// 22. stringifyNumbers: Write a function called stringifyNumnbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
function stringifyNumbers() {

}

// let obj = {
    // num: 1,
    // test: [],
    // data: {
        // val: 4,
        // info: {
            // isRight: true,
            // random: 66
        // }
    // }
// }

stringifyNumbers(obj);

// 22. stringifyNumbers (Instructor solution)


// =================================================================================

// 23. collectStrings: Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
function collectStrings() {

}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])

// 23. collectStrings (Instructor solution)