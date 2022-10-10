const savePlayers = () => {

    let player1Name = document.getElementById("NamePlayer1");
    let NamePlayer1 = player1Name.value;
    console.log(NamePlayer1);
    sessionStorage.setItem("Name player 1", NamePlayer1);

    let player1Type = document.getElementById("TypePlayer1Human");
    let TypePlayer1 = player1Type.checked;
    sessionStorage.setItem("¿Is player 1 human?", TypePlayer1);

    let player2Name = document.getElementById("NamePlayer2");
    let NamePlayer2 = player2Name.value;
    console.log(NamePlayer2);
    sessionStorage.setItem("Name player 2", NamePlayer2);

    let player2Type = document.getElementById("TypePlayer2Human");
    let TypePlayer2 = player2Type.checked;
    sessionStorage.setItem("¿Is player 2 human?", TypePlayer2);

// CHECK IF EVERYTHING IS FILLED IN AND AT LEAST ONE PLAYER IS A HUMAN

    if(TypePlayer1 == false && TypePlayer2 == false) {
        alert("At least one player must be human");
    } else if(NamePlayer1 == "" || NamePlayer2 == "") {
        alert("You must complete both names");
    } else {
       document.getElementById("startGame").href="./game.html";
    };
}