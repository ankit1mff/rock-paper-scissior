let userScore=0;
let comScore=0;
const userpra = document.querySelector("#user-score")
const computerpra = document.querySelector("#computer-score")
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const comchoice = () =>{
    let option =["rock","paper","scissor"]
  const randindex =  Math.floor(Math.random()*3) ;
  return option[randindex];
}
const drowgame = () =>{
    
    msg.innerText = "Game Drow!"
    msg.style.backgroundColor ="#081b31"
}
const showwinner =(userwin,userchoice,computerchoice) =>{
    if(userwin){
        userScore ++
        userpra.innerText = userScore
        msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`
        msg.style.backgroundColor ="green"
    } else{
        comScore ++
        computerpra.innerText = comScore
         console.log("you lose");
        msg.innerText = `You Lose! ${computerchoice} beats Your ${userchoice}`
        msg.style.backgroundColor ="red"
    } 

    }

const playGame = (userchoice) => {
    
    const computerchoice = comchoice();
   
    if(userchoice === computerchoice){
        drowgame();
    }else{
        let userwin = true;
        if(userchoice=== "rock"){
            userwin = computerchoice === "paper"  ? false : true ;
        } else if (userchoice === "paper"){
            userwin= computerchoice === "scissor" ? false : true;
        }else{
            userwin= computerchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
    playGame(userchoice);
    });
})