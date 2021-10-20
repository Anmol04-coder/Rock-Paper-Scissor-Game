let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBord_div = document.querySelector(".score-bord");
let result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice() {
    const choice = ["r","s","p"];
    const comp = Math.floor(Math.random(choice)*3);
    return choice[comp];
}

function convert(letter) {
    if (letter === "r") return "rock";
    if (letter === "s") return "scissor";
    if (letter === "p") return "paper";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user_Word = "user".fontsize(2).sup();
    const comp_Word = "comp".fontsize(2).sup();
    result_div.innerHTML = `${convert(userChoice)}${user_Word} beats ${comp_Word}${convert(computerChoice)}`.fontcolor("green");
    
    
}


function loss(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user_Word = "user".fontsize(2).sup();
    const comp_Word = "comp".fontsize(2).sup();
    result_div.innerHTML = `${convert(userChoice)}${user_Word} beats ${comp_Word}${convert(computerChoice)}`.fontcolor("red");
}

function draw(userChoice, computerChoice) {
    
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user_Word = "user".fontsize(2).sup();
    const comp_Word = "comp".fontsize(2).sup();
    result_div.innerHTML = `${convert(userChoice)}${user_Word} draw ${comp_Word}${convert(computerChoice)}`.fontcolor("white");
}



function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        loss(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}
function main() {
scissor_div.addEventListener('click',function() {
    game("s");
    
})
paper_div.addEventListener('click',function() {
    game("p");
})
rock_div.addEventListener('click',function() {
    game("r");
})
}
main()