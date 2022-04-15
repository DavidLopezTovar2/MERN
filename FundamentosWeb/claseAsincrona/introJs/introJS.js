// PRIMERA CLASE ------------------------------------------------

//var => variables, global type. Can't be modified
var sal = 'hey';
//console.log(sal);


//const y let => can change its value

const date ="06/04/2022";

let favFruit = 'apple';
favFruit = 'banana';

//objects
const student1 = {
    name: 'David Lopez',
    age: 22,
    star: 'MERN'
}

const student2 = {
    name: 'Vale Quijano',
    age: 21,
    star: 'VET'
}

const students = [student1,student2];

//Palabra palindroma

//nadan oso solos
//palabra palindromo ajeno
let word = 'solos';

function palindromo(word){
    for(let ini=0, end=word.length-1; ini<word.length/2; ini++, end--){        
        if(word[ini] != word[end]){
            return false;
        }
    }
    return true;
}

if (palindromo(word)){
    console.log(word + " = palindromo");
}
else{
    console.log(word + " = no es palindromo");
}


// SEGUNDA CLASE ------------------------------------------------

function liqueurStore (age){
    if (age < 18){
        return 'No se puede vender';
    }
    else{
        return 'Bienvenido';
    }
}

function liqueurStoreTernary(age){
    age < 18 ? 'No se puede vender':
        'Bienvenido';
}

// ----------------------- Actual JS ----------------------------------------------------------

function greet(){
    const username = document.getElementById('username').value;
    //alert(`Hola ${username}`);
    if (document.getElementById('username').value == ``){
        return;
    }
    let addDiv = `<div class="block-container"> <p>${username}</p> <button onclick="eraseAnswers(this)"><i class="fa-solid fa-square-xmark"></i></button></div>`;
    document.getElementById('answers').innerHTML += addDiv;

    let button = `<button onclick="clearTray(this)">Clean tray</button>`;
    document.getElementById('erase-answers-container').innerHTML = button;
}

function onHover(){
    console.log('Acabas de hacer hover');
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.backgroundColor = 'rgb(70, 70, 252)';
    h1.style.color= 'white';
    h1.style.borderRadius = '5px';
}

function hoverLeft(){
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.backgroundColor = 'rgb(114, 194, 255)';
    h1.style.color= 'black';
}

function eraseAnswers(element){
    element.parentElement.remove();
}

function clearTray(element){
    const node = document.getElementById('answers');
    node.innerHTML = '';
    element.remove();
}