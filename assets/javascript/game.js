var randomNumber = 18 + Math.floor(Math.random() * 121);
var buttonNumber1 = 1 + Math.floor(Math.random() * 13);
var buttonNumber2 = 1 + Math.floor(Math.random() * 13);
var buttonNumber3 = 1 + Math.floor(Math.random() * 13);
var buttonNumber4 = 1 + Math.floor(Math.random() * 13);
var totalScore = 0;

var wins = 0;
var loses = 0;

var randomDiv = $("<p>");
$("#random").append(randomDiv);
randomDiv.text("Random Number: " + randomNumber);

var totalDiv = $("<p>");
$("#totalScore").append(totalDiv);

var counterDiv = $("<p>");
$("#counter").append(counterDiv);
counterDiv.text("Wins: " + wins + ", " +
                "Loses: " + loses);


var crystalPic1 = $("<img>");
$("#crystals").append(crystalPic1);
crystalPic1.addClass("button-1");
crystalPic1.attr("src", "assets/images/01.jpg");
// crystalPic1.attr("value", buttonNumber1);



var crystalPic2 = $("<img>");
$("#crystals").append(crystalPic2);
crystalPic2.addClass("button-2");
crystalPic2.attr("src", "assets/images/02.jpg");
// crystalPic2.attr("value", buttonNumber2);


var crystalPic3 = $("<img>");
$("#crystals").append(crystalPic3);
crystalPic3.addClass("button-3");
crystalPic3.attr("src", "assets/images/03.jpg");
// crystalPic3.attr("value", buttonNumber3);


var crystalPic4 = $("<img>");
$("#crystals").append(crystalPic4);
crystalPic4.addClass("button-4");
crystalPic4.attr("src", "assets/images/04.jpeg");
// crystalPic4.attr("value", buttonNumber4);

function winLose() {
    if (totalScore == randomNumber) {
        alert("You win!");
        wins++;
        reset();
    }
    if (totalScore > randomNumber) {
        alert("You lose!");
        loses++;
        reset();
    }
}

function reset() {
    randomNumber = 18 + Math.floor(Math.random() * 121);
    buttonNumber1 = 1 + Math.floor(Math.random() * 13);
    buttonNumber2 = 1 + Math.floor(Math.random() * 13);
    buttonNumber3 = 1 + Math.floor(Math.random() * 13);
    buttonNumber4 = 1 + Math.floor(Math.random() * 13);
    totalScore = 0;
    counterDiv.text("Wins: " + wins + ", " +
                "Loses: " + loses);
}


// $(".button").on("click", function () {
//     a = parseFloat($(this).val());
//     console.log(a);
//     totalScore += a;
//     totalDiv.text(totalScore);
//     console.log(totalScore);
//     winLose();
// });

$(".button-1").on("click", function () {
    totalScore += buttonNumber1;
    totalDiv.text("Total Score: " + totalScore);
    console.log(totalScore);
    winLose();
});

$(".button-2").on("click", function () {
    totalScore += buttonNumber2;
    totalDiv.text("Total Score: " + totalScore);
    console.log(totalScore);
    winLose();
});

$(".button-3").on("click", function () {
    totalScore += buttonNumber3;
    totalDiv.text("Total Score: " + totalScore);
    console.log(totalScore);
    winLose();
});

$(".button-4").on("click", function () {
    totalScore += buttonNumber4;
    totalDiv.text("Total Score: " + totalScore);
    console.log(totalScore);
    winLose();
});




