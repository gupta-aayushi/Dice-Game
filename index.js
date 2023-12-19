var r1 = Math.floor(Math.random()*6)+1;
var r2 = Math.floor(Math.random()*6)+1;
var imgs1 = "images/dice" + r1 + ".png";
var imgs2 = "images/dice" + r2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgs1);
document.querySelectorAll("img")[1].setAttribute("src", imgs2);
if (r1>r2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (r2>r1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Tie!";
}
