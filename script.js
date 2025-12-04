let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn"); 
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//all possible winning Patterns
const patterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let turn= true; // True for player O
let count = 0;  // for Draw scenario

//adding click event on each button using forEach...
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn){
            box.innerText = "O";
            turn= false;
            box.style.color="#fff";
        }
        else{
            box.innerText = "X";
            turn= true;
            box.style.color="#fff52f";
        }

        box.disabled = true; //Disabling each button to avoid reClicking

        count++; //increasing count after each button clicked

        checkWinner();


        //Draw Scenario...
        let isWinner = checkWinner(); //winner found or not
        
        //count for all 9 buttons clicking & not having winner 
        if(count === 9 && !isWinner){
             gameDraw();
        }
    });
});


const checkWinner = () => {
    for(let pattern of patterns){
        let pos1Val =  boxes[pattern[0]].innerText; //accessing innerText after clicking on button
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;
        
        //checking if all 3 positions shouldn't be empty 
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            //if innerText is similar for all 3 positions
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true; //for draw scenario...Winner is Found!
            }
           
        }
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is "${winner}"`; //Displaying message 
    msgContainer.classList.add("bgImage"); //add background Image
    msgContainer.style.height="100vh";
    msgContainer.classList.remove("hide"); //removing hide class to show winner
    disableBoxes();
};


const gameDraw = () => {
    msg.innerText = `Game Was a Draw !`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true; //disabling all boxes aftter winner found
    }
};


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false; //enabling all boxes for new game
        box.innerText = "";
    }
};


const resetGame = () => {
    turn = true; //O's Turn
    count = 0; //reseting count to 0 for draw scenario
    enableBoxes();
    msgContainer.classList.add("hide");
};


newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);



























// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//       box.style.color = "green";
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//       box.style.color = "purple";
//     }
//     box.disabled = true;
//     count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = "Game was a Draw";
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         return true;
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", resetGame);
// reset.addEventListener("click", resetGame);
