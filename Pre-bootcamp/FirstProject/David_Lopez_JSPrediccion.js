function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//La poredicción 1 imprimira por consola: Nací en 1980

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}

//La poredicción 2 imprimira por consola: Nací en 1980

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}

//La poredicción 2 imprimira por consola:
//  ¡Sumando números!
//  num1 is: 10
//  num2 is: 20
//  30

if (x > 100) {    
    console.log("mayor que 100");
}
else if (x > 50) {    
    console.log(" 50");
}
else if(x > 25) {
    console.log("mayor que 25");
}
else {    
    console.log("número pequeño");
}


var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
user.push("jello");
console.log(user); 

var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
user.pop();
console.log(user); 


