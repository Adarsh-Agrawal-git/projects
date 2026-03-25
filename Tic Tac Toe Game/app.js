let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn"); 
let msg = document.querySelector("#msg");

let turn0 = true;
let gameOver = false;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let click1=0;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            

        } else {
            box.innerText = "X";
            turn0 = true;
            
        }

        box.disabled = true;
        click1++;

        checkwinner();

        if (click1 === 9 && !gameOver) {
           msg.innerText = "Game is a Draw";
           alert("The Game Is A Draw");
           gameOver = true;
        }
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos1val === pos3val) {
                showwinner(pos1val);
                return;
            }
        }
    }
};

const showwinner = (winner) => {
    gameOver = true;
    msg.innerText = `Winner is ${winner}`;
    alert(`Winner is ${winner}`);
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetgame = () => {
    turn0 = true;
    gameOver = false;
    enableboxes();
    click1=0;
    msg.innerText = "";
};

resetbtn.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame); 