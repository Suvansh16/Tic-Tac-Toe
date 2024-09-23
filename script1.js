let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;//playerX,playerO

//we have to create 2d array

//2D ARRAY
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
 box.addEventListener("click",()=>{
    console.log("box was clicked");
   if(turnO){
    box.innerText="O";
    turnO=false;
   }
   else{
    box.innerText="X";
    turnO=true;
   }
   box.disabled=true;
    
   checkWinner();
 });
});
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const disabledBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner=(winner)=>
{
    msg.innerText="Congratulations,winner is,"+winner;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner=()=>{
   for(let pattern of winPatterns)
   {
   
        let pos1=boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner",pos1);

                showWinner(pos1);

            }

        }
}
}; 
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

     