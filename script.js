let playerScore = 0;
let computerScore = 0;
let isAnimating = false;

function play(userChoice) {

    if (isAnimating) return;

    isAnimating = true;

    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-img").src =
    userChoice.toLowerCase() + ".png";

    const computerImg =
        document.getElementById("computer-img");

    let index = 0;

    const animation = setInterval(() => {
        computerImg.src =
            choices[index].toLowerCase() + ".png";

        index = (index + 1) % 3;

    }, 100);

    setTimeout(() => {

        clearInterval(animation);

        computerImg.src =
            computerChoice.toLowerCase() + ".png";
        console.log(computerChoice);
        console.log(computerImg.src);

        let result = "";

        if (userChoice === computerChoice) {

            result = "CLASH!";

        } else if (

            (userChoice === "Rock" &&
             computerChoice === "Scissors") ||

            (userChoice === "Paper" &&
             computerChoice === "Rock") ||

            (userChoice === "Scissors" &&
             computerChoice === "Paper")

        ) {

            result = "victory!";
            playerScore++;

        } else {

            result = "Defeat!";
            computerScore++;
        }

       const names = {
         Rock: "Divine Fist",
         Paper: "Golden Bell",
         Scissors: "Sword Intent"
        };

        document.getElementById("result").innerHTML =
            "You used " + names[userChoice] +
            ", oppponent used " + names[computerChoice] +
            "<br>" + result;

        document.getElementById("score").innerText =
            "Cultivator: " + playerScore +
            " | Enemy: " + computerScore;

        if (playerScore === 5) {
            alert("You have ascended to a higher realm!");
        }

        if (computerScore === 5) {
            alert("you have suffered a loss!");
        }

        isAnimating = false;



    }, 1000);
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("score").innerText =
        "Cultivator: 0 | Enemy: 0";

    document.getElementById("result").innerHTML = "";

    document.getElementById("player-img").src = "";
    document.getElementById("computer-img").src = "";
}
