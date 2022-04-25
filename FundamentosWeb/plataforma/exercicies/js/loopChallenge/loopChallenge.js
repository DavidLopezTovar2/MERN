

function printOdd() {
    console.log("Print odd numbers");
    for(var i=0; i<21; i++){
        if (i%2 != 0) {
            console.log(i);
        }
    }
}

function reduceMultiplesTree() {
    console.log("Multiples of tree");
    for(var i=0; i<=100; i++){
        if (i%3 == 0) {
            console.log(i);
        }
    }
}

function secuence() {
    console.log("Print secuence");
    var i=4;
    while(i>=-4){
        console.log(i);
        i -= 1.5;
    }
}

function sigma() {
    console.log("Sigma");
    var sum=0;
    for(var i=0; i<=100; i++){
        sum += i;
    }
    console.log(sum);
}

function factorial() {
    console.log("Factorial");
    var mult=1;
    for(var i=1; i<=12; i++){
        mult *= i;
    }
    console.log(mult);
}

printOdd();
reduceMultiplesTree();
secuence();
sigma();
factorial();