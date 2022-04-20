function showAlert(){
    alert('Loading weather report');
}

function removeCookiesBanner(element){
    element.parentElement.remove();
}

function loadTemperature(){
    var t = document.getElementById("temperature");
    var selectedText = t.options[t.selectedIndex].text;
    selectedText == 'ºC' ? setTemperatureC() :
    setTemperatureF();
}

function setTemperatureC(){
    var elements = document.querySelectorAll('.number-temperature p');
    elements.forEach(i => {
        var number = i.innerText;
        number = number.slice(0, -1);
        number = (number - 32) * 5/9;
        number = Math.floor(number);
        i.innerText = number + 'º';
    });
}

function setTemperatureF(){
    var elements = document.querySelectorAll('.number-temperature p');
    elements.forEach(i => {
        var number = i.innerText;
        number = number.slice(0, -1);
        number = (number * 9/5) + 32;
        number = Math.round(number * 10) / 10;
        i.innerText = number+ 'º';
    });
}

//(32°F − 32) × 5/9