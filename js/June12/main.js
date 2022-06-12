// 06/12/2022
// 5kyu Calculating with Functions

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));

*/

// since JS does not allow you to override functions,
// assume there there is a possibility of a parameter for each function
// and alter the given signature to hold a potential array param

// check to see if there is a parameter (arr)
// if arr is undefined, create the array and add the called digit at index 0 and return
// if arr exists, add the number into index 0 with unshift, 
//     and return the calculation instead by calling the calc(arr) function
function zero(arr) { 
  if (arr === undefined) { let arr = [0]; return arr; }
  else { arr.unshift(0); return calc(arr); } 
 }
function one(arr) { 
  if (arr === undefined) { let arr = [1]; return arr; }
  else { arr.unshift(1); return calc(arr); } 
 }
function two(arr) {   
  if (arr === undefined) { let arr = [2]; return arr; }
  else { arr.unshift(2); return calc(arr); } 
}
function three(arr) { 
  if (arr === undefined) { let arr = [3]; return arr; }
  else { arr.unshift(3); return calc(arr); } 
 }
function four(arr) { 
  if (arr === undefined) { let arr = [4]; return arr; }
  else { arr.unshift(4); return calc(arr); } 
 }
function five(arr) { 
  if (arr === undefined) { let arr = [5]; return arr; }
  else { arr.unshift(5); return calc(arr); } 
 }
function six(arr) { 
  if (arr === undefined) { let arr = [6]; return arr; }
  else { arr.unshift(6); return calc(arr); } 
 }
function seven(arr) { 
  if (arr === undefined) { let arr = [7]; return arr; }
  else { arr.unshift(7); return calc(arr); } 
 }
function eight(arr) { 
  if (arr === undefined) { let arr = [8]; return arr; }
  else { arr.unshift(8); return calc(arr); } 
 }
function nine(arr) {
  if (arr === undefined) { let arr = [9]; return arr; }
  else { arr.unshift(9); return calc(arr); } 
}

// calc is only called with an array of length 3
// calc checks the sign and performs the calculation
// integer division is performed by rounding the result down before returning
function calc(arr) {
  if (arr[1] === '+') return arr[0] + arr[2];
  else if (arr[1] === '-') return arr[0] - arr[2];
  else if (arr[1] === '*') return arr[0] * arr[2];
  else return Math.floor(arr[0] / arr[2]);
}

// these functions are only called if an array exists, so unshift the sign into the array
function plus(arr) {  arr.unshift('+'); return arr; }
function minus(arr) { arr.unshift('-'); return arr; }
function times(arr) { arr.unshift('*'); return arr; }
function dividedBy(arr) { arr.unshift('/'); return arr; }
