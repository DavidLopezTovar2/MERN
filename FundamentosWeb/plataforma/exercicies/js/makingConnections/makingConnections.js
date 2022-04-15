


var globalNumberRequests = 2;
var globalNumberConnections = 4;

function request(element, status) {
    fatherElement = element.parentElement;  //check
    if (status == true) {
        mainElement = fatherElement.parentElement; //person-container
        var childNodes = mainElement.childNodes;
        const myConnection = document.querySelector('.my-connections-items-container');
        console.log(myConnection);
        const newConnection = document.createElement('div');
        const image = document.createElement('img');
        image.src = "img/userp.png";
        image.alt = "User photo";
        const name = document.createElement('p');
        name.innerText = childNodes[3].innerText;
        newConnection.classList.add('connections-person-container');
        newConnection.appendChild(image);
        newConnection.appendChild(name);
        myConnection.appendChild(newConnection);
        addTotalConnections();
    }
    fatherElement.parentElement.remove();
    reduceRequestCount();
}

function reduceRequestCount(){
    var numberRequests = document.querySelector('.connections-header-container span');
    globalNumberRequests--;
    numberRequests.innerText = globalNumberRequests;
}

function addTotalConnections(){
    var numberConnections = document.querySelectorAll('.connections-header-container span');
    globalNumberConnections++;
    numberConnections[1].innerText = globalNumberConnections;
}

function editName(){
    var element = document.querySelector('.bottom-container h2');
    element.innerText = 'Default name';
}