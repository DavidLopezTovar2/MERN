
function cartUpdate(){
    alert('Your cart is empty!')
}

function onHover(element){
    element.src = 'imgs/succulents-2.jpg';
}

function hoverLeft(element){
    element.src = 'imgs/succulents-1.jpg';
}

function removeCookiesBanner(element){
    element.parentElement.remove();
}

function loadingPage(){
    alert('This page is currently in develop');
}

function signIn(element){
    element.innerText = '';
    const image = document.createElement('img');
    image.src = 'imgs/loading.png';
    image.style = 'animation: rotation 2s infinite linear';
    element.appendChild(image);
}
