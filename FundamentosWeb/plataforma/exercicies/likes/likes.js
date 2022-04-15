
var likeElement = document.querySelectorAll(".info-profile-container h3");
var likes = [0,0,0];

function liked(person){
    likes[person]++;
    likeElement[person].innerText = likes[person] + " likes(s)";
}



