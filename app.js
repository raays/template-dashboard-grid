var body = document.body;
var btn = document.getElementById("checkbox");
var h1 = document.getElementById("h1")

var textColor = document.getElementsByClassName("p-color");
var tabTextColor = Array.from(textColor);

var card  = document.getElementsByClassName("card");
var tabCard = Array.from(card);

var cardOverview = document.getElementsByClassName("card_overview");
var tabCardOverview = Array.from(cardOverview);

btn.addEventListener("click", () =>{

    body.classList.toggle("bg-color");
    h1.classList.toggle("text-color");

    for(i = 0; i < tabTextColor.length; i++){
        tabTextColor[i].classList.toggle("text-color")
    }

    for(i = 0; i < tabCard.length; i++){
        tabCard[i].classList.toggle("card-color");
    }

    for(i = 0; i < tabCardOverview.length; i++){
        tabCardOverview[i].classList.toggle("card-color");
    }
});