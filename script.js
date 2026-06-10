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

        let result = "";

        if (userChoice === computerChoice) {

            result = "Draw!";

        } else if (

            (userChoice === "Rock" &&
             computerChoice === "Scissors") ||

            (userChoice === "Paper" &&
             computerChoice === "Rock") ||

            (userChoice === "Scissors" &&
             computerChoice === "Paper")

        ) {

            result = "You Win!";
            playerScore++;

        } else {

            result = "You Lose!";
            computerScore++;
        }

        document.getElementById("result").innerHTML =
            "You chose " + userChoice +
            ", Computer chose " + computerChoice +
            "<br>" + result;

        document.getElementById("score").innerText =
            "Player: " + playerScore +
            " | Computer: " + computerScore;

        if (playerScore === 5) {
            alert("You won the match!");
        }

        if (computerScore === 5) {
            alert("Computer won the match!");
        }

        isAnimating = false;

        setTimeout(() => {
            computerImg.src = "";
        }, 1000);

    }, 1000);
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("score").innerText =
        "Player: 0 | Computer: 0";

    document.getElementById("result").innerHTML = "";

    document.getElementById("player-img").src = "";
    document.getElementById("computer-img").src = "";
}
