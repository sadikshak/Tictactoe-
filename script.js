console.log("welcome to Tic Tac Toe")
let turn = "X" 
//initial variable x 

//Function to change the turn 
const changeTurn =()=>{
return turn=== "X" ? "0" : "X"
}

//function to check win 

const checkWin = ()=>{

}
//Game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>
{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
if(boxtext.innerText === ''){
    
}
    })
})
