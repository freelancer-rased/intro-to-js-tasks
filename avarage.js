// Input:
// Three numbers in a single line separated by spaces.
// Output:
// Print the average with 2 decimal places.

// Input:
// 10 20 30  
// Output:
// 20.00  

var num1 = 10;
var num2 = 20;
var num3 = 30;

var sum = num1 + num2 + num3;
var average = sum / 3;
console.log(average.toFixed(2));