let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

function addHomeOne() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
    setLeader()
}

function addHomeTwo() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
    setLeader()
}

function addHomeThree() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
    setLeader()
}

function addGuestOne() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
    setLeader()
}

function addGuestTwo() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
    setLeader()
}

function addGuestThree() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
    setLeader()
}

function startNewGame(){
    scoreGuest = 0
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
    setLeader()
}

function setLeader() {
    if (scoreGuest > scoreHome) {
        scoreGuestEl.classList.add("leader")
        scoreHomeEl.classList.remove("leader")
    }
    else if (scoreHome > scoreGuest) {
        scoreHomeEl.classList.add("leader")
        scoreGuestEl.classList.remove("leader")
    }
    else {
        scoreGuestEl.classList.remove("leader")
        scoreHomeEl.classList.remove("leader")
    }
}