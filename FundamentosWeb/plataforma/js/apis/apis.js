var currentUser;
var cardsDiv = document.querySelector("#cards");

function getUserName(element) {
    currentUser = element.value;
}

function makeCoderCard(data) {
    var htmlResponse = 
        `<div class="card">
            <img src = "${data.avatar_url} alt="${data.login}" >
            <h3>${data.login} - ${data.name}</h3>
            <p>Location: ${data.location}</p>
            <p>Repositories: ${data.public_repos}</p>
        </div>`;
    return htmlResponse;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUser);
    var dataResponse = await response.json();
    cardsDiv.innerHTML += makeCoderCard(dataResponse);
}