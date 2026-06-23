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
        let resultColor = "";

        if (userChoice === computerChoice) {

            result = "CLASH!";
            resultColor = "yellow";

        } else if (

            (userChoice === "Rock" &&
             computerChoice === "Scissors") ||

            (userChoice === "Paper" &&
             computerChoice === "Rock") ||

            (userChoice === "Scissors" &&
             computerChoice === "Paper")

        ) {

            result = "victory!";
            resultColor = "deepskyblue";
            playerScore++;
            if (playerScore % 5 === 0) {
                alert(`⚔️ Breakthrough Achieved!\nCultivation Realm: ${playerScore} Victories`);
            }

        } else {

            result = "Defeat!";
            resultColor = "red";
            computerScore++;
            if (computerScore % 5 === 0) {
                alert(`☠️ Heart Demon Emerges!\nDefeats: ${computerScore}`);
            }            
            
        }

       const names = {
         Rock: "Divine Fist",
         Paper: "Golden Bell",
         Scissors: "Sword Intent"
        };

        document.getElementById("result").innerHTML =
            "You used " + names[userChoice] +
            ", opponent used " + names[computerChoice] +
            "<br><br><span class='battle-result' style='color:" +
            resultColor +
            "'>" + result + "</span>";

        document.getElementById("score").innerText =
            "Cultivator: " + playerScore +
            " | Enemy: " + computerScore;

        
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
