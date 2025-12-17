let homeEl = document.getElementById("home-el")
let guestEL = document.getElementById("guest-el")

let score1 = 0
let score2 = 0

function plus1home() {
    score1 += 1
    homeEl.textContent = score1
}

function plus2home() {
    score1 += 2
    homeEl.textContent = score1
}

function plus3home() {
    score1 += 3
    homeEl.textContent = score1
}

function plus1guest() {
    score2 += 1
    guestEL.textContent = score2
}

function plus2guest() {
    score2 += 2
    guestEL.textContent = score2
}

function plus3guest() {
    score2 += 3
    guestEL.textContent = score2
}