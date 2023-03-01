
const toyStoryCard = document.getElementById("flip-card").querySelectorAll(".ToyStory");
console.log(toyStoryCard);
const elmoCard = document.getElementById("Elmo");
const natGeoCard = document.getElementById("NatGeo");

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");


function addTony() {
    li1.append(toyStoryCard);
    console.log(li1);
    // listEl.appendChild(toyStoryCard);

    // listEl.appendChild(elmoCard);
    // listEl.appendChild(natGeoCard);
    // window.location.href = "./profile.html";

};

// function goToProfile() {
//     window.location.href = "./profile.html";
// }

// signup & login forms
function openSignup() {
    document.getElementById("signupForm").style.display = "block";
}

function closeSignup() {
    document.getElementById("signupForm").style.display = "none";
}