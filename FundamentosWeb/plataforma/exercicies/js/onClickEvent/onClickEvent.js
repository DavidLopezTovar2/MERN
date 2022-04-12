

function removeButton(element){
    element.remove();
};

function ninjaAlert(){
    alert('Ninja was liked');
}

function changeStatus(element){
    element.innerText == 'Login' ? element.innerText = 'Logout':
        element.innerText = 'Login';
}