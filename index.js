document.getElementById("btn").onclick = function() {
    var randomnumber1 = Math.random() * 6;
    var randomnumber2 = Math.random() * 6;

    randomnumber1 = Math.floor(randomnumber1) + 1;
    randomnumber2 = Math.floor(randomnumber2) + 1;

    var dice1 = "dice"+randomnumber1+".png";
    var dice2 = "dice"+randomnumber2+".png";

    document.getElementById("dice-1").setAttribute("src", "img/"+dice1);
    document.getElementById("dice-2").setAttribute("src", "img/"+dice2);

    if(randomnumber1 === randomnumber2) {
        document.querySelector("h1").innerText = "Draw";
    } else if(randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!!!";
    }else {
        document.querySelector("h1").innerText = "Player 2 Wins!!!";
    }
}
