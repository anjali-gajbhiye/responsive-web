let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    // rock.paper,scissors
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor = " #500F4C";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
      userScore++;  
      userScorePara.innerText=userScore   
    msg.innerText=` You win! ${ userChoice} beats ${ compChoice}`;
    msg.style.backgroundColor = "green";
}
else{
   compScore++;
   compScorePara.innerText=compScore;
     msg.innerText=` You loss. ${ compChoice} beats ${ userChoice}`;
     msg.style.backgroundColor = "red";

}
};
 const playGame=(userChoice)=>{

// computer choice
const compChoice=gencompChoice();

// draw game
if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        // scissors, paper
        userWin=compChoice==="scissors"?true:false;
    }else if(userChoice==="paper"){
        // rock, scissors
        userWin=compChoice==="rock"?true:false;
    }else {
    //    userChoice="scissors"
        // rock, paper
        userWin=compChoice==="rock"?false:true;
        
    }
     showWinner(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id"); 
      playGame(userChoice);
    })
});