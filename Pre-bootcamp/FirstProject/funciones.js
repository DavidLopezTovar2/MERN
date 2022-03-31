
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// hello
// dojo

function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

// T Diagram
//  var               |       Value
//  result            |         15

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

// T Diagram
//  var               |       Value
//  result            |         18
//  num               |         3

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

// T Diagram
//  var               |       Value
//  num               |         15
//  num2              |         10
//  result            |         10           

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

// T Diagram
//  var               |       Value
//  num               |         15
//  num2              |         10
// result             |         20

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

// T Diagram
//  var               |       Value
//  num               |         3
//  y                 |         6
//  num               |         5
//  y                 |         10
//  result            |         16

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

// T Diagram
//  var               |       Value
//  num1              |         2
//  num2              |         3
//  num1              |         3
//  num2              |         5

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

 // T Diagram
//  var               |       Value
//  num1              |         2
//  num2              |         3
//  num1              |         3
//  num2              |         5

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

 // T Diagram
//  var               |       Value
//  num1              |         2
//  num2              |         3
//  sum               |         5
//  num1              |         3
//  num2              |         5
//  sum               |         8
//  result            |         13

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
5 + 6 + 8
 // T Diagram
//  var               |       Value
//  result            |         19