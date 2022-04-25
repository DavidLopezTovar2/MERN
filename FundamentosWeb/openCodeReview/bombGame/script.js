const { functionsIn } = require("lodash");

window.onload = starBombs();
var interval;
var state;
var time = 10;

function starBombs(){
    state = 'Active';
    interval = setInterval(reduceTime, 1000);
}

function reduceTime() {
    if (time > 0) {
        
    } else{
        
    }   
}