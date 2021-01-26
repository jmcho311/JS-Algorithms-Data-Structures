// Call Stack
function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)]
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!")
}

wakeUp();


// Our first recursive function
function countDown(num) {
    if (num <= 0) {                 // this is our base case
        console.log("all done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);                 // this is our recursive call
}

countDown(5);


// Our second recursive function
function sumRange(num) {
    if (num === 1) return 1;        // this is our base case
    return num + sumRange(num-1);   // sumRange(num-1) is our recursive call
}

sumRange(5);


// Writing Factorial Iteratively
function factorial(num) {
    let total = 1;
    for(let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

factorial(3);

// Writing Factorial Recursively
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}

factorial(3);


// Helper Method Recursion
function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])


// Pure Recursion
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])