let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const userScorenum= document.querySelector(".youscorenum");
const compScorenum= document.querySelector(".compscorenum");
const msg=document.querySelector(".msg");

const winner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorenum.innerText=userScore;
        msg.innerText=`Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorenum.innerText=compScore;
        msg.innerText=`Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};


const drawGame=()=>{
    msg.innerText=`Game is Draw. Play again.`;
    msg.style.backgroundColor= "black";
    msg.style.color= "white";
};


const generateCompChoice=()=>{
    const moves=["Rock","Paper","Scissors"];
    const compChoice=Math.floor(Math.random()*3);
    console.log(compChoice);
    return moves[compChoice];
};


const playGame=(userChoice)=>{
    const compChoice= generateCompChoice(); 

    if(userChoice === compChoice){
         drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="Rock"){
            userWin= compChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper"){
            userWin= compChoice==="Scissors"?false:true;
        }
        else{
            userWin= compChoice==="Rock"?false:true;
        }
        winner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("data-choice");
        playGame(userChoice);
    });
});