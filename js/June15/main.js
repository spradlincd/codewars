// 06/15/2022
// 5kyu Product of consecutive Fib numbers

/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array: 

[F(n), F(n+1), true]                      or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod, you will return

[F(n), F(n+1), false]                        or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/

function productFib(prod) {
  /*
    in a loop, do:

    if the current fib num * the next fib num equals prod: return [fibonacci[i], fibonacci[i+1], true]
    else
    if the current fib num * the next fib num is greater than prod: return [fibonacci[i], fibonacci[i+1], false]
    else
    add fibonacci[currentIndex] to fibonacci[currentIndex+1] and push it to the array
    repeat the loop

    once the loop is done, it didn't work, so return the last set of numbers that when multiplied are smaller than prod:
    return [fibonacci[i-2] to fibonacci[i-1], false]
  */

  /* create a Fib array for comparison */
  let fibonacci = [0, 1];
  let testProd = 0;

  /* start the comparison */

  let i = 0;

  for (i = 0; i < fibonacci.length-1; i++) {
      
    //console.log(`fibonacci[${i}]: ${fibonacci[i]}`);
    //console.log(`fibonacci[${i+1}]: ${fibonacci[i+1]}`);

    testProd = fibonacci[i] * fibonacci[i+1];
    //console.log(testProd);

    if (testProd == prod) return [fibonacci[i], fibonacci[i+1], true];
    if (testProd > prod) return [fibonacci[i], fibonacci[i+1], false];
      
    fibonacci.push(fibonacci[i] + fibonacci[i+1]);
    //console.log(fibonacci);
  }

  return [fibonacci[i-2], fibonacci[i-1], false];
}

 console.log(productFib(4895)); // [55, 89, true]
 console.log(productFib(5895)); // [89, 144, false]
 console.log(productFib(74049690)); // [6765, 10946, true]
 console.log(productFib(84049690)); // [10946, 17711, false]
 console.log(productFib(193864606));  // [10946, 17711, true]
 console.log(productFib(447577)); // [610, 987, false]
 console.log(productFib(602070)); // [610, 987, true]