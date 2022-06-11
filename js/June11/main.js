// 06/11/2022
// 5kyu Moving Zeros to the End

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zeroArr = [], otherArr = [];

  // iterate through arr, if it is a zero, add to zeroArr, otherwise add to end of other arr
  // concatenate the two arrays and return the result

  arr.forEach (thing => {
    if (thing === 0) zeroArr.push(0);
    else otherArr.push(thing);
  }); 
  return otherArr.concat(zeroArr);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0])