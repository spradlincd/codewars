// 06/14/2022
// 4kyu Sum Strings as Numbers

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) { 
  let arrA = Array.from(a);
  let arrB = Array.from(b);
  let tempArr = [];
  let carry = 0;

  /* pad out the arrays */

  diff = arrA.length - arrB.length;
  // if arrA is bigger than arrB, add leading zeros to arrB
  if (diff > 0) {
    for (let i = 0; i < diff; i++) arrB.unshift('0');
  } 
  // if arrB is bigger than arrA, add leading zeros to arrA
  else if (diff < 0) {
    diff = diff * -1;
    for (let i = 0; i < diff; i++) arrA.unshift('0');
  } 
  // else the numbers have the same number of digits, so nothing needs to be done

  /* perform the addition */
  for (let i = arrA.length-1; i >= 0; i--) {
    tempArr[i] = Number(arrA[i]) + Number(arrB[i]) + carry;
    if (tempArr[i] >= 10) {
      carry = 1
      tempArr[i] = tempArr[i] - 10;
    } else {
      carry = 0;
    }
  }
  if (carry === 1) tempArr.unshift(1);
  
  /* remove any leading zeros */
  let count = 0;
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] != 0) break;
    count++;
  }
  for (let i = 0; i < count; i++) {
    tempArr.shift();
  }

  /* remove any commas */
  let str = tempArr.join('');
  // if (str.length == 1) str = str.concat(',');

  // for (let i = 0; i < str.length; i++) {
  //   if (str.charAt(i) === ',') {
  //     str = str.replace(str.charAt(i), '');
  //   }
  // }

  return str;
}

console.log(sumStrings('0', '5')); //Function must return a string value: expected { '0': '5' } to equal '5'
console.log(sumStrings('00103', '08567'));
console.log(sumStrings('800', '9567'));
console.log(sumStrings('8797', '45'));
console.log(sumStrings('1','2')); // => '3')
console.log(sumStrings('123','456')); // '579'
console.log(sumStrings('123','4560')); // '4683'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));