// OBTAIN PLAYER INFO FROM STORAGE

let player1info = document.getElementById("player1");
player1info.innerHTML = sessionStorage.getItem("Name player 1");

let player2info = document.getElementById("player2");
player2info.innerHTML = sessionStorage.getItem("Name player 2");

let player1type = "";
if (JSON.parse(sessionStorage.getItem("Is player 1 human?")) == true) {
    player1type = "human";
} else {
    player1type = "machine";
};

let player2type = "";
if (JSON.parse(sessionStorage.getItem("Is player 2 human?")) == true) {
    player2type = "human";
} else {
    player2type = "machine";
};

// CREATE A CLASS FOR PLAYERS AND INSTANCE THE TWO PLAYERS

class Player {
    constructor(name, type) {
        this.name = name,
            this.type = type
    }
};

let player1 = new Player(player1info.innerHTML, player1type);
let player2 = new Player(player2info.innerHTML, player2type);

// VARIABLE FOR TURN COUNTING, STARTS AT 3 AND GOES DOWN

let player1Turns = 3;
let player2Turns = 3;

// DISPLAY OF TURNS LEFT ON SCREEN

let player1TurnsInfo = document.getElementById("player1TurnsLeft");
let player1TurnsText = document.getElementById("player1TurnsText");
player1TurnsInfo.innerHTML = 3;
player1TurnsText.innerHTML = " turns left."
const player1TurnsCounter = () => {
    if (player1Turns > 1) {
        player1TurnsInfo.innerHTML = player1Turns;
        player1TurnsText.innerHTML = " turns left.";
    } else if (player1Turns == 1) {
        player1TurnsInfo.innerHTML = player1Turns;
        player1TurnsText.innerHTML = " turn left."
    } else {
        player1TurnsInfo.innerHTML = "";
        player1TurnsText.innerHTML = "You're out of turns!";
    };
}
let player2TurnsInfo = document.getElementById("player2TurnsLeft");
let player2TurnsText = document.getElementById("player2TurnsText");
player2TurnsInfo.innerHTML = 3;
player2TurnsText.innerHTML = " turns left."
const player2TurnsCounter = () => {
    if (player2Turns > 1) {
        player2TurnsInfo.innerHTML = player2Turns;
        player2TurnsText.innerHTML = " turns left."
    } else if (player2Turns == 1) {
        player2TurnsInfo.innerHTML = player2Turns;
        player2TurnsText.innerHTML = " turn left."
    } else {
        player2TurnsInfo.innerHTML = "";
        player2TurnsText.innerHTML = "You're out of turns!"
    }
}

let player1Mark = "X";
let player2Mark = "O";
let playerMark = player1Mark;
let player = player1;

let boardChecks = Array.from(document.getElementsByClassName("cell"));

boardChecks.map((boardCheck, index) => {
    boardCheck.addEventListener('click', () => {
        if (boardCheck.innerHTML == "") {
            boardCheck.innerHTML = playerMark;
            if (playerMark == player1Mark) {
                player = player1;
                player1Turns--;
                console.log(player1Turns)
                checkWinner();
                player1TurnsCounter();
                console.log(boardCheck.innerHTML)
                playerMark = player2Mark;
            } else {
                player = player2;
                player2Turns--;
                player2TurnsCounter();
                checkWinner();
                console.log(boardCheck.innerHTML)
                playerMark = player1Mark;
            }
        }
    })
})



const checkWinner = () => {
    if (boardChecks[0].innerHTML === boardChecks[1].innerHTML && boardChecks[1].innerHTML === boardChecks[2].innerHTML && boardChecks[0].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        JSON.stringify(sessionStorage.setItem("Winner", player.name));
        window.location.href = "../pages/winner.html"
    }
    if (boardChecks[3].innerHTML === boardChecks[4].innerHTML && boardChecks[4].innerHTML === boardChecks[5].innerHTML && boardChecks[3].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[6].innerHTML === boardChecks[7].innerHTML && boardChecks[7].innerHTML === boardChecks[8].innerHTML && boardChecks[6].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[0].innerHTML === boardChecks[3].innerHTML && boardChecks[3].innerHTML === boardChecks[6].innerHTML && boardChecks[0].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[1].innerHTML === boardChecks[4].innerHTML && boardChecks[4].innerHTML === boardChecks[7].innerHTML && boardChecks[1].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[2].innerHTML === boardChecks[5].innerHTML && boardChecks[5].innerHTML === boardChecks[8].innerHTML && boardChecks[2].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[0].innerHTML === boardChecks[4].innerHTML && boardChecks[4].innerHTML === boardChecks[8].innerHTML && boardChecks[0].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
    if (boardChecks[2].innerHTML === boardChecks[4].innerHTML && boardChecks[4].innerHTML === boardChecks[6].innerHTML && boardChecks[6].innerHTML != "") {
        console.log(`Ha ganado ${player.name}`);
        window.location.href = "../pages/winner.html"

    }
}

