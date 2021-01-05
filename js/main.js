let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissor");

function makeItSmaller(string) {
    return string.fontsize(3).sub();
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice}${makeItSmaller("(user)")} equals ${computerChoice}${makeItSmaller("(comp)")} It's a Draw!`;

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('gray-glow')}, 400);
}

function win(userChoice, computerChoice){
    userScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice}${makeItSmaller("(user)")} beats ${computerChoice}${makeItSmaller("(comp)")} You Win! 🔥`;

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 400);
}

function lose(userChoice, computerChoice){
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice}${makeItSmaller("(user)")} loses to ${computerChoice}${makeItSmaller("(comp)")} You Lost! 💩`;

    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow')}, 400);
}

function game(userChoice){
    const computerCanChoice = ["Rock", "Paper", "Scissor"];
    let computerChoice = computerCanChoice[(Math.floor(Math.random() * 3))];

    switch(userChoice + computerChoice){
        case "RockRock":    case "PaperPaper":      case "ScissorScissor":  draw(userChoice, computerChoice);break;

        case "RockScissor": case "PaperRock":       case "ScissorPaper":    win(userChoice, computerChoice);break;

        case "RockPaper":   case "PaperScissor":    case "ScissorRock":     lose(userChoice, computerChoice);break;
    }

}
function main() {
    rock_div.addEventListener("click",  () => game('Rock'));
    paper_div.addEventListener("click",  () => game('Paper'));
    scissor_div.addEventListener("click",  () => game('Scissor'));
}
main();