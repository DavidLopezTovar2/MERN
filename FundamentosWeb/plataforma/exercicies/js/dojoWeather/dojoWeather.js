function showAlert(){
    alert('Loading weather report');
}

function removeCookiesBanner(element){
    element.parentElement.remove();
}

function loadTemperature(){
    var t = document.getElementById("temperature");
    var selectedText = t.options[t.selectedIndex].text;
    selectedText == 'ºC' ? setTemperature('c') :
    setTemperature('f');
}

function setTemperature(character){
    var elements = document.querySelectorAll('.number-temperature p');
    elements.forEach(i => {
        var number = i.innerText;
        number = number.slice(0, -1);
        if (character == 'c')
            number = (number - 32) * 5/9;
        else{
            number = (number * 9/5) + 32;
            number = Math.round(number * 10) / 10;
        }
        number = Math.floor(number);
        i.innerText = number + 'º';
    });
}