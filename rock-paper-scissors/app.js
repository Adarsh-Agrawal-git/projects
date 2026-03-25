let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const userScoreH2 = document.querySelector(".user-score");
const compScoreH2 = document.querySelector(".comp-score");
let winner=document.querySelector("#winner");
const gencomputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();

    if(userchoice === compchoice){
        winner.innerText = "It's A Draw!";
        winner.style.backgroundColor = "blue";
        winner.style.color = "white";
    } else if (
        (userchoice === "rock" && compchoice === "scissors") ||
        (userchoice === "paper" && compchoice === "rock") ||
        (userchoice === "scissors" && compchoice === "paper")
    ){
        winner.innerText = "You Win!";
        winner.style.backgroundColor = "green";
        winner.style.color = "white";
        userscore++;
        userScoreH2.textContent = userscore;
    } else {
        winner.innerText = "Computer Wins!";
        winner.style.backgroundColor = "red";
        winner.style.color = "white";
        compscore++;
        compScoreH2.textContent = compscore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");

    
        playgame(userchoice);
    })
})
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userScoreH2.textContent = userscore;
    compScoreH2.textContent = compscore;
    winner.innerText = "";
    winner.style.backgroundColor = "transparent";
});