let usr_score=0;
let comp_score=0;
let msg=document.getElementById("mass");
uscore=document.getElementById("user-score");
cscore=document.getElementById("comp-score");
uch=document.getElementById("uch");
cch=document.getElementById("cch");
const options=document.querySelectorAll(".option");
let compChoice=()=>{
    let choice=["Stone","Paper","Scissors"];
    let idx=Math.floor(Math.random()*3);
    return choice[idx];
};
let draw=()=>{
    console.log("Match Was Drawn...");
    msg.innerText="Match Was Drawn...   Try again!!!";
}
const showWinner=(usrwin )=>{
 if(usrwin){
    console.log("User Is Win");
    usr_score++;
    uscore.innerText=usr_score;
    cscore.innerText=comp_score;
    msg.innerText="You WoN";
 }
 else{
    console.log("computer is won");
    comp_score++;
    msg.innerText="You Loose";
    uscore.innerText=usr_score;
    cscore.innerText=comp_score;
 }
}
let game=(optionId)=>{
    let usrchoice = optionId;
    console.log("User chose:", usrchoice);
    uch.innerText=usrchoice;
    uch.style.color="red";
    let compchoice = compChoice();
    console.log("Computer chose:", compchoice);
    cch.innerText=compchoice;
    cch.style.color="red";
    if (compchoice === usrchoice) {
        draw();
    }else {
        let usrwin=true;
        if(usrchoice==="Paper"){
            usrwin= (compchoice==="Scissors"?false:true);
        }
        else if(usrchoice==="Stone"){
            usrwin=(compchoice==="Paper"?false:true);
        }
        else{
            usrwin=(compchoice==="Stone"?false:true);
        }
        showWinner(usrwin);
    }
}
options.forEach((option)=>{
    console.log(option);
    option.addEventListener("click",()=>{ 
        let optionId=option.getAttribute("id");
        game(optionId);
    });
});
let curmode="light";
const dark=()=>{
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector(".usr-choice").style.color="white";
    document.querySelector(".comp-choice").style.color="white";
    let headings = document.getElementsByTagName("h2");
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "white";
    }
    let style = document.createElement('style');
        style.innerHTML = `.option img:hover {
        border: 4px solid white;
        opacity: 0.8;
        border-radius: 50%;
        }`;
    document.head.appendChild(style);
    let d=document.querySelector("#mass");
    d.style.backgroundColor="#B388FF";
    d.style.color="#1A237E";
    curmode="dark";
}

const light=()=>{
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector(".usr-choice").style.color="black";
    document.querySelector(".comp-choice").style.color="black";
    let headings = document.getElementsByTagName("h2");
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "black";
    }
    let style = document.createElement('style');
        style.innerHTML = `.option img:hover {
        border: 4px solid black;
        opacity: 0.8;
        border-radius: 50%;
        }`;
    document.head.appendChild(style);
    let d=document.querySelector("#mass");
    d.style.backgroundColor="#B388FF";
    d.style.color="#1A237E";
    curmode="light";
}

let theme=document.querySelector(".H1");
theme.addEventListener("click",()=>{
    if(curmode==="light"){
        dark();
    }
    else{
        light();
    }
});