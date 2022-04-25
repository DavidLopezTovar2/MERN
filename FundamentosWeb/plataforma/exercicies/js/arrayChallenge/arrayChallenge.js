
function alwaysHungry(array) {
    console.log("Always hungry");
    var element = false;
    for(var i=0; i<array.length; i++){
        if (array[i] == 'comida') {
            console.log('Delicioso');
            element = true;
        }
    }
    if (element == false) {
        console.log('Tengo hambre');
    }
}

function highPass(arr, cutoff) {
    console.log("High pass");
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);  
        }
    }
    return filteredArr;
}

function betterThanAverage(arr) {
    console.log("Better ThanAverage");
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    sum /= arr.length;
    var count = 0
    for(var i=0; i<arr.length; i++){
        if (arr[i] > sum) {
            count ++;
        }
    }
    return count;
}

function reverse(arr) {
    console.log("Reverse");
    var reverseArray = [];
    var lenghtArray = arr.length;
    for(var i=0; i<lenghtArray; i++){
        reverseArray.push(arr.pop());
    }
    return reverseArray;
}
   
function fibonacciArray(n) {
    console.log("Finobacci");
    var fibArr = [0, 1];
    for(var i=0; i<n-2; i++){
        fibArr.push(fibArr[i] + fibArr[i+1]);
    }
    return fibArr;
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
alwaysHungry([4, 1, 5, 7, 2]);

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

var result = fibonacciArray(10);
console.log(result); 