let x1 = ["", "", ""];
let x2 = ["", "", ""];
let x3 = ["", "", ""];

let board = [x1, x2, x3];

let player1-turn =

let player1 = "X";
let player2 = "O";

const ChangeStatus = () => {
    console.log("clicked")
}

x1[0] = document.getElementById("x1y1").addEventListener("click", ChangeStatus);
x1[1] = document.getElementById("x1y2").addEventListener("click", ChangeStatus);
x1[2] = document.getElementById("x1y3").addEventListener("click", ChangeStatus);
x2[0] = document.getElementById("x2y1").addEventListener("click", ChangeStatus);
x2[1] = document.getElementById("x2y2").addEventListener("click", ChangeStatus);
x2[2] = document.getElementById("x2y3").addEventListener("click", ChangeStatus);
x3[0] = document.getElementById("x3y1").addEventListener("click", ChangeStatus);
x3[1] = document.getElementById("x3y2").addEventListener("click", ChangeStatus);
x3[2] = document.getElementById("x3y3").addEventListener("click", ChangeStatus);






player1 = "X";
player2 = "O";
let player = player1;

let boardChecks = Array.from(document.getElementsByClassName("cell"));

boardChecks.map((boardCheck, index) => {
    boardCheck.addEventListener('click', () => {
        if (boardCheck.innerHTML == "") {
            boardCheck.innerHTML = player;
            if (player == player1) {
                player1Turns--;
                player1TurnsCounter();
                checkWinner();
                console.log(boardCheck.innerHTML)
                player = player2;
            } else {
                player2Turns--;
                player2TurnsCounter();
                checkWinner();
                console.log(boardCheck.innerHTML)
                player = player1;
            }
        }
    })
})



if (player2.type == "machine") {
    let nextCheck = boardChecks[Math.floor(Math.random() * boardChecks.length)];
    while (nextCheck.innerHTML == "") {
        nextCheck = boardChecks[Math.floor(Math.random() * boardChecks.length)];
    }
    nextCheck.innerHTML = "";
    player = player2;
    player2Turns++;
    player2TurnsCounter();
    checkWinner();
    playerMark = player1Mark;
    player = player1;
}