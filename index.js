let homeScoreElement = document.querySelector(".home-score");
let guestScoreElement = document.querySelector(".guest-score");

let homeScore = 0;
let guestScore = 0;

function homebtn1() {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
}

function homebtn2() {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
}

function homebtn3() {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
}

function guestbtn1() {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
}

function guestbtn2() {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
}

function guestbtn3() {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
}