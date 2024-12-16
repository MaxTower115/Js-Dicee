let randomNumer1 = Math.floor(Math.random() * 6); 
let randomNumer2 = Math.floor(Math.random() * 6); 
let diceImages = [
    "images/dice1.png", 
    "images/dice2.png",
    "images/dice3.png", 
    "images/dice4.png",
    "images/dice5.png", 
    "images/dice6.png"
]

document.querySelector(".img1").setAttribute("src", diceImages[randomNumer1]);
document.querySelector(".img2").setAttribute("src", diceImages[randomNumer2]);

if(randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if(randomNumer1 < randomNumer2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else{
    document.querySelector("h1").textContent = "Draw!";
}

//🚩