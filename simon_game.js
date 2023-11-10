let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (start==false){
        start=true;
        levelUp();
    }
   
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");    
    },300);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");    
    },300);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
    gameFlash(randBtn);

}
function checkAns(idx){
//    console.log("cur level : ", level) 

if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }

}
else{
     h2.innerHTML=`Game over ! your Score Was<b> ${level}</b><br>Press any key to start`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(function(){
        document.querySelector("body").style.backgroundColorr="white";
     },150);
        reset();
     
   
}
}
function btnPress(){
let btn=this;
userFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    start==false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}
